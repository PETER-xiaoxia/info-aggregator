'use client';

import { FAQ } from '@/types';
import { useState } from 'react';

interface FAQItemProps {
  faq: FAQ;
}

export default function FAQItem({ faq }: FAQItemProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white rounded-lg border border-border-light mb-3 overflow-hidden">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full px-4 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200 min-h-[44px]"
      >
        <span className="font-medium text-text-primary pr-4">{faq.question}</span>
        <span
          className={`text-wechat-primary text-lg transform transition-transform duration-200 flex-shrink-0 ${
            isExpanded ? 'rotate-180' : ''
          }`}
        >
          ▼
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pb-4 text-text-secondary text-sm leading-relaxed border-t border-border-light pt-3">
          {faq.answer}
        </div>
      </div>
    </div>
  );
}