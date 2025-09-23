'use client';

import { Category, CategoryId } from '@/types';

interface CategoryCardProps {
  category: Category;
  isSelected: boolean;
  onClick: (categoryId: CategoryId) => void;
}

export default function CategoryCard({ category, isSelected, onClick }: CategoryCardProps) {
  return (
    <button
      onClick={() => onClick(category.id)}
      className={`w-full p-3 rounded-lg border-2 transition-all duration-200 min-h-[44px] ${
        isSelected
          ? 'bg-blue-50 border-wechat-primary text-wechat-primary'
          : 'bg-white border-border-light text-text-primary hover:border-border-medium'
      }`}
    >
      <div className="flex items-center justify-center text-center">
        <h3 className="font-medium text-sm">{category.name}</h3>
      </div>
    </button>
  );
}