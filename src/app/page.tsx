'use client';

import { useState, useMemo, useEffect } from 'react';
import { CategoryId, Page, Resource } from '@/types';
import { categories, resources, faqs } from '@/data/resources';
import { trackEvent } from '@/utils/analytics';
import BottomNavigation from '@/components/Layout/BottomNavigation';
import PageLayout from '@/components/Layout/PageLayout';
import CategoryCard from '@/components/CategoryCard';
import ResourceCard from '@/components/ResourceCard';
import SearchBox from '@/components/SearchBox';
import Toast from '@/components/Toast';
import FAQItem from '@/components/FAQItem';

export default function Home() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedCategory, setSelectedCategory] = useState<CategoryId>('game');
  const [searchQuery, setSearchQuery] = useState('');
  const [toast, setToast] = useState({ show: false, message: '' });

  // Filter resources based on search and category
  const filteredResources = useMemo(() => {
    let filtered = resources;

    if (searchQuery.trim()) {
      // Search in all resources
      const query = searchQuery.toLowerCase().trim();
      filtered = resources.filter(
        resource =>
          resource.name.toLowerCase().includes(query) ||
          resource.description?.toLowerCase().includes(query)
      );

      // Auto-switch to category of first matching result
      if (filtered.length > 0) {
        const firstMatchCategory = filtered[0].category;
        if (firstMatchCategory !== selectedCategory) {
          setSelectedCategory(firstMatchCategory);
        }
      }
    } else {
      // Filter by selected category when no search
      filtered = resources.filter(resource => resource.category === selectedCategory);
    }

    return filtered;
  }, [searchQuery, selectedCategory]);

  const showToast = (message: string) => {
    setToast({ show: true, message });
  };

  const hideToast = () => {
    setToast({ show: false, message: '' });
  };

  const handleCopy = (resource: Resource) => {
    trackEvent.contentAccess(resource.name, resource.category, resource.url);
    showToast('正在跳转...');
  };

  const handleCategoryChange = (categoryId: CategoryId) => {
    const category = categories.find(c => c.id === categoryId);
    if (category) {
      trackEvent.categorySwitch(categoryId, category.name);
    }
    setSelectedCategory(categoryId);
  };

  const handlePageChange = (page: Page) => {
    trackEvent.pageSwitch(currentPage, page);
    setCurrentPage(page);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim()) {
      // Track search after results are calculated
      setTimeout(() => {
        trackEvent.search(query, filteredResources.length);
      }, 100);
    }
  };

  const renderHomePage = () => (
    <PageLayout showHeader={false}>
      <div className="pt-6">
        <SearchBox
          value={searchQuery}
          onChange={handleSearch}
          placeholder="搜索内容..."
        />

        {/* Category Cards */}
        <div className="px-4 mb-6">
          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4 lg:gap-5">
            {categories.map((category) => (
              <CategoryCard
                key={category.id}
                category={category}
                isSelected={selectedCategory === category.id}
                onClick={handleCategoryChange}
              />
            ))}
          </div>
        </div>

        {/* Content List */}
        <div className="px-4">
          <h2 className="text-lg font-semibold text-text-primary mb-4">
            {searchQuery ? `搜索结果 (${filteredResources.length})` :
             `${categories.find(c => c.id === selectedCategory)?.name} (${filteredResources.length})`}
          </h2>

          {filteredResources.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-4xl mb-4">🔍</div>
              <p className="text-text-secondary">
                {searchQuery ? '没有找到匹配的内容' : '暂无内容'}
              </p>
            </div>
          ) : (
            <div className="space-y-2">
              {filteredResources.map((resource) => (
                <ResourceCard
                  key={resource.id}
                  resource={resource}
                  onCopy={() => handleCopy(resource)}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </PageLayout>
  );

  const renderFAQPage = () => (
    <PageLayout title="常见问题">
      <div className="px-4 py-6">
        {faqs
          .sort((a, b) => a.order - b.order)
          .map((faq) => (
            <FAQItem key={faq.id} faq={faq} />
          ))}
      </div>
    </PageLayout>
  );

  const renderProfilePage = () => (
    <PageLayout title="我的">
      <div className="px-4 py-6">
        <div className="bg-white rounded-lg border border-border-light p-6 mb-4">
          <div className="text-center">
            <div className="w-16 h-16 bg-wechat-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">👤</span>
            </div>
            <h3 className="font-semibold text-text-primary mb-2">欢迎使用信息聚合站</h3>
            <p className="text-text-secondary text-sm">
              信息聚合服务平台
            </p>
          </div>
        </div>

        <div className="space-y-3">
          <div className="bg-white rounded-lg border border-border-light">
            <div className="px-4 py-3 border-b border-border-light">
              <h4 className="font-medium text-text-primary">使用统计</h4>
            </div>
            <div className="p-4 space-y-3">
              <div className="flex justify-between">
                <span className="text-text-secondary">总内容数</span>
                <span className="text-text-primary font-medium">{resources.length}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-text-secondary">分类数</span>
                <span className="text-text-primary font-medium">{categories.length}</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-border-light">
            <div className="px-4 py-3 border-b border-border-light">
              <h4 className="font-medium text-text-primary">关于我们</h4>
            </div>
            <div className="p-4">
              <p className="text-text-secondary text-sm leading-relaxed">
                信息聚合站致力于为用户提供便捷的内容聚合服务，
                采用简洁的微信风格设计，支持快速搜索和便捷访问。
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-border-light">
            <div className="px-4 py-3">
              <div className="text-center text-text-tertiary text-xs">
                © 2025 信息聚合站 · 版本 1.0.0
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );

  return (
    <div className="min-h-screen bg-background-secondary">
      {currentPage === 'home' && renderHomePage()}
      {currentPage === 'faq' && renderFAQPage()}
      {currentPage === 'profile' && renderProfilePage()}

      <BottomNavigation
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />

      <Toast
        message={toast.message}
        show={toast.show}
        onHide={hideToast}
      />
    </div>
  );
}