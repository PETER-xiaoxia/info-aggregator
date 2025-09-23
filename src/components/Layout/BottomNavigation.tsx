'use client';

import { Page } from '@/types';

interface BottomNavigationProps {
  currentPage: Page;
  onPageChange: (page: Page) => void;
}

interface NavItem {
  id: Page;
  label: string;
}

const navItems: NavItem[] = [
  { id: 'home', label: '首页' },
  { id: 'faq', label: '常见问题' },
  { id: 'profile', label: '我的' },
];

export default function BottomNavigation({ currentPage, onPageChange }: BottomNavigationProps) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-border-light h-[60px] flex items-center justify-around z-50">
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => onPageChange(item.id)}
          className={`flex items-center justify-center min-h-[44px] min-w-[44px] px-2 ${
            currentPage === item.id
              ? 'text-wechat-primary'
              : 'text-text-secondary'
          }`}
        >
          <span className="text-sm font-medium">{item.label}</span>
        </button>
      ))}
    </nav>
  );
}