# 部署指南

## GitHub 上传步骤

### 1. 安装 Git（如果尚未安装）
```bash
# macOS
brew install git
# 或使用 Xcode Command Line Tools
xcode-select --install
```

### 2. 初始化 Git 仓库
```bash
git init
git add .
git commit -m "Initial commit: 信息聚合站 MVP"
```

### 3. 连接到 GitHub
首先在 GitHub 上创建新仓库，然后：
```bash
git remote add origin https://github.com/你的用户名/info-aggregator.git
git branch -M main
git push -u origin main
```

## Vercel 部署

### 1. 连接 GitHub 仓库
1. 访问 [vercel.com](https://vercel.com)
2. 使用 GitHub 账户登录
3. 点击 "New Project"
4. 选择 info-aggregator 仓库

### 2. 部署设置
- **Framework Preset**: Next.js
- **Root Directory**: `./`
- **Build Command**: `npm run build`
- **Output Directory**: `out` (静态导出)

### 3. 环境变量（如果需要）
目前项目不需要环境变量

## 项目特性

- ✅ 静态导出配置
- ✅ 响应式微信风格设计
- ✅ TypeScript 支持
- ✅ Tailwind CSS
- ✅ 微信内置浏览器优化

## 更新部署

每次推送到 main 分支，Vercel 会自动部署：
```bash
git add .
git commit -m "更新内容"
git push
```