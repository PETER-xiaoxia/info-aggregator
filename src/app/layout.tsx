import './globals.css';
import type { Metadata, Viewport } from 'next';

export const metadata: Metadata = {
  title: '信息聚合站',
  description: '移动端优先的信息聚合网站，提供游戏、软件、影视等内容的便捷访问',
  keywords: '信息聚合,游戏,软件,影视,工具',
  authors: [{ name: '信息聚合站' }],
  creator: '信息聚合站',
  publisher: '信息聚合站',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: 'https://your-domain.com',
  },
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    url: 'https://your-domain.com',
    siteName: '信息聚合站',
    title: '信息聚合站 - 微信风格的信息聚合平台',
    description: '移动端优先的信息聚合网站，提供游戏、软件、影视等内容的便捷访问',
  },
  twitter: {
    card: 'summary_large_image',
    title: '信息聚合站',
    description: '移动端优先的信息聚合网站，提供游戏、软件、影视等内容的便捷访问',
  },
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