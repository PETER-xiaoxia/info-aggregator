import './globals.css';
import type { Metadata, Viewport } from 'next';

export const metadata: Metadata = {
  title: '信息聚合站',
  description: '移动端优先的信息聚合网站，提供游戏、软件、影视等资源的一站式链接分享',
  keywords: '信息聚合,资源分享,游戏,软件,影视,链接',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}