'use client';

import { ReactNode } from 'react';

interface PageLayoutProps {
  children: ReactNode;
  title?: string;
  showHeader?: boolean;
}

export default function PageLayout({ children, title, showHeader = true }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-background-secondary pb-[60px]">
      {showHeader && title && (
        <header className="bg-white border-b border-border-light px-4 py-3 sticky top-0 z-40">
          <h1 className="text-lg font-semibold text-text-primary text-center">
            {title}
          </h1>
        </header>
      )}
      <main className="flex-1">
        {children}
      </main>
    </div>
  );
}