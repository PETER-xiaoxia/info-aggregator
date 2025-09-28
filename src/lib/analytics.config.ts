// Analytics 配置文件
export const analyticsConfig = {
  // 是否启用 Analytics（根据环境自动判断）
  enabled: process.env.NODE_ENV === 'production',

  // 调试模式（开发环境下启用）
  debug: process.env.NODE_ENV === 'development',

  // 事件配置
  events: {
    // 是否追踪搜索事件
    trackSearch: true,

    // 是否追踪分类切换
    trackCategorySwitch: true,

    // 是否追踪内容访问
    trackContentAccess: true,

    // 是否追踪页面切换
    trackPageSwitch: true,

    // 是否追踪FAQ展开
    trackFAQExpand: true,
  },

  // 数据保护设置
  privacy: {
    // 搜索查询是否脱敏（不记录具体内容）
    anonymizeSearchQueries: true,

    // 内容名称是否脱敏
    anonymizeContentNames: false,

    // 最大事件属性长度
    maxPropertyLength: 50,
  }
};

// 根据配置决定是否发送事件
export const shouldTrackEvent = (eventType: keyof typeof analyticsConfig.events): boolean => {
  return analyticsConfig.enabled && analyticsConfig.events[eventType];
};