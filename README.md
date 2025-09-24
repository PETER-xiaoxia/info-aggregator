# 信息聚合站 MVP

移动端优先的静态信息聚合网站，采用微信风格设计，提供游戏、软件、影视等内容的便捷访问。

## 功能特性

### 核心功能
- ✅ 底部导航栏（首页、常见问题、我的）
- ✅ 四个主要分类：游戏、软件、影视、其他
- ✅ 内容列表展示和便捷访问功能
- ✅ 实时搜索和智能分类切换
- ✅ Toast 提示消息
- ✅ 响应式设计（移动端优先）

### 技术特性
- ✅ Next.js 14 + TypeScript
- ✅ Tailwind CSS 微信风格设计
- ✅ 静态站点生成
- ✅ PWA 友好的触摸优化
- ✅ 现代浏览器剪贴板 API

## 技术栈

- **框架**: Next.js 14+
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **部署**: Vercel（静态导出）

## 快速开始

### 安装依赖
```bash
npm install
```

### 开发环境
```bash
npm run dev
```
访问 http://localhost:3000

### 生产构建
```bash
npm run build
```

### 项目结构
```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # 全局样式
│   ├── layout.tsx         # 根布局
│   └── page.tsx           # 主页面
├── components/            # React 组件
│   ├── Layout/           # 布局组件
│   │   ├── BottomNavigation.tsx
│   │   └── PageLayout.tsx
│   ├── CategoryCard.tsx   # 分类卡片
│   ├── ResourceCard.tsx   # 内容卡片
│   ├── SearchBox.tsx      # 搜索框
│   ├── CopyButton.tsx     # 复制按钮
│   ├── Toast.tsx         # 提示消息
│   └── FAQItem.tsx       # 常见问题项
├── data/                 # 静态数据
│   └── resources.ts      # 内容和FAQ数据
└── types/               # TypeScript 类型定义
    └── index.ts
```

## 设计规范

### 微信风格配色
- 主色调: `#07C160` (微信绿)
- 浅色调: `#1AAD19`
- 深色调: `#06A759`
- 背景色: `#FFFFFF` / `#F7F7F7`
- 文本色: `#353535` / `#888888` / `#B2B2B2`

### 响应式断点
- 移动端: `< 768px`
- 平板端: `768px - 1024px`
- 桌面端: `> 1024px`

## 核心功能说明

### 1. 分类切换
- 默认选中游戏分类
- 点击分类卡片切换内容列表
- 选中状态的视觉反馈

### 2. 搜索功能
- 实时搜索，支持名称和描述匹配
- 搜索结果自动切换到对应分类
- 清空搜索保持当前分类

### 3. 复制功能
- 现代浏览器使用 Clipboard API
- 旧浏览器使用 execCommand 兜底
- 复制成功显示 Toast 提示

### 4. 底部导航
- 固定底部位置
- 微信风格图标和文字
- 页面切换状态管理

## 数据结构

### 内容接口
```typescript
interface Resource {
  id: string;
  name: string;
  description?: string;
  url: string;
  category: 'game' | 'software' | 'movie' | 'other';
  featured?: boolean;
  addedDate: string;
}
```

### 分类接口
```typescript
interface Category {
  id: 'game' | 'software' | 'movie' | 'other';
  name: string;
  description: string;
  count: number;
}
```

### FAQ接口
```typescript
interface FAQ {
  id: string;
  question: string;
  answer: string;
  order: number;
}
```

## 部署说明

项目配置了静态导出，可以部署到任何静态托管平台：

### Vercel 部署
1. 推送代码到 GitHub
2. 在 Vercel 导入项目
3. 自动构建和部署

### 其他平台
```bash
npm run build
```
将 `out` 目录上传到静态托管平台。

## 开发注意事项

1. **触摸优化**: 所有可点击元素最小 44px × 44px
2. **性能优化**: 使用 Next.js 静态生成和代码分割
3. **SEO友好**: 设置了完整的 metadata 和 viewport
4. **微信兼容**: 在微信内置浏览器中测试兼容性

## 许可证

MIT License