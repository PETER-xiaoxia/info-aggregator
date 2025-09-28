import { track } from '@vercel/analytics';
import { analyticsConfig, shouldTrackEvent } from '@/lib/analytics.config';

// 安全的追踪函数，包含错误处理
const safeTrack = (eventName: string, properties: Record<string, any>) => {
  try {
    if (analyticsConfig.debug) {
      console.log(`[Analytics] ${eventName}:`, properties);
    }
    track(eventName, properties);
  } catch (error) {
    if (analyticsConfig.debug) {
      console.error(`[Analytics] Error tracking ${eventName}:`, error);
    }
  }
};

// 数据脱敏函数
const sanitizeProperty = (value: string, maxLength: number = analyticsConfig.privacy.maxPropertyLength): string => {
  return value.substring(0, maxLength);
};

// 定义自定义事件类型
export const trackEvent = {
  // 搜索事件
  search: (query: string, resultsCount: number) => {
    if (!shouldTrackEvent('trackSearch')) return;

    safeTrack('search', {
      query: analyticsConfig.privacy.anonymizeSearchQueries
        ? (query.length > 0 ? 'has_query' : 'empty_query')
        : sanitizeProperty(query),
      results_count: resultsCount,
      timestamp: new Date().toISOString(),
    });
  },

  // 分类切换事件
  categorySwitch: (categoryId: string, categoryName: string) => {
    if (!shouldTrackEvent('trackCategorySwitch')) return;

    safeTrack('category_switch', {
      category_id: categoryId,
      category_name: sanitizeProperty(categoryName),
      timestamp: new Date().toISOString(),
    });
  },

  // 内容访问事件
  contentAccess: (contentName: string, category: string, url: string) => {
    if (!shouldTrackEvent('trackContentAccess')) return;

    try {
      const domain = new URL(url).hostname;
      safeTrack('content_access', {
        content_name: analyticsConfig.privacy.anonymizeContentNames
          ? `content_${category}`
          : sanitizeProperty(contentName),
        category: category,
        domain: domain,
        timestamp: new Date().toISOString(),
      });
    } catch (error) {
      // URL 解析失败时的兜底处理
      safeTrack('content_access', {
        content_name: analyticsConfig.privacy.anonymizeContentNames
          ? `content_${category}`
          : sanitizeProperty(contentName),
        category: category,
        domain: 'unknown',
        timestamp: new Date().toISOString(),
      });
    }
  },

  // 页面切换事件
  pageSwitch: (fromPage: string, toPage: string) => {
    if (!shouldTrackEvent('trackPageSwitch')) return;

    safeTrack('page_switch', {
      from_page: fromPage,
      to_page: toPage,
      timestamp: new Date().toISOString(),
    });
  },

  // FAQ展开事件
  faqExpand: (questionId: string, question: string) => {
    if (!shouldTrackEvent('trackFAQExpand')) return;

    safeTrack('faq_expand', {
      question_id: questionId,
      question: sanitizeProperty(question),
      timestamp: new Date().toISOString(),
    });
  },
};