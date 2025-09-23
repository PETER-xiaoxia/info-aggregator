'use client';

interface CopyButtonProps {
  url: string;
  onCopy?: () => void;
}

export default function CopyButton({ url, onCopy }: CopyButtonProps) {
  const handleClick = () => {
    // 直接跳转，让微信显示"继续访问链接"提示页面
    window.location.href = url;
    onCopy?.();
  };

  return (
    <button
      onClick={handleClick}
      className="bg-background-secondary text-wechat-primary text-xs font-medium px-3 py-1.5 rounded-md hover:bg-gray-200 transition-colors duration-200 min-h-[44px] min-w-[44px] flex items-center justify-center"
    >
      去保存
    </button>
  );
}