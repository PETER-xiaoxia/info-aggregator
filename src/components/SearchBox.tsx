'use client';

import { useState } from 'react';

interface SearchBoxProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export default function SearchBox({ value, onChange, placeholder = "搜索内容..." }: SearchBoxProps) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative w-full max-w-2xl mx-auto px-4 mb-6">
      <div className={`relative transition-all duration-200 ${
        isFocused ? 'transform scale-[1.02]' : ''
      }`}>
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          className={`w-full px-4 py-2 text-sm rounded-full border transition-all duration-200 ${
            isFocused
              ? 'bg-white border-wechat-primary shadow-sm'
              : 'bg-background-secondary border-border-light'
          } placeholder-text-tertiary focus:outline-none`}
        />
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
          <span className="text-text-tertiary text-sm">🔍</span>
        </div>
      </div>
    </div>
  );
}