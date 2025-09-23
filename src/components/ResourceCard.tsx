'use client';

import { Resource } from '@/types';
import CopyButton from './CopyButton';

interface ResourceCardProps {
  resource: Resource;
  onCopy: () => void;
}

export default function ResourceCard({ resource, onCopy }: ResourceCardProps) {
  return (
    <div className="bg-white rounded-lg border border-border-light p-3">
      <div className="flex items-center justify-between">
        <div className="flex-1 min-w-0 mr-3">
          <div className="flex items-center">
            <h3 className="font-medium text-text-primary text-sm truncate">
              {resource.name}
            </h3>
            {resource.featured && (
              <span className="inline-flex items-center px-1.5 py-0.5 rounded text-xs font-medium bg-wechat-primary text-white ml-2 flex-shrink-0">
                推荐
              </span>
            )}
          </div>
        </div>
        <div className="flex-shrink-0">
          <CopyButton url={resource.url} onCopy={onCopy} />
        </div>
      </div>
    </div>
  );
}