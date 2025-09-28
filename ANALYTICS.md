# Vercel Web Analytics 配置说明

## 📊 已配置的分析功能

### 🔧 基础配置

项目已经集成了 Vercel Web Analytics，包括：

1. **自动页面浏览统计** - 所有页面访问自动记录
2. **自定义事件追踪** - 用户行为深度分析
3. **数据隐私保护** - 符合隐私规范的数据收集

### 📈 自定义事件追踪

#### 1. 搜索行为分析
- **事件名**: `search`
- **追踪内容**: 搜索查询、结果数量
- **隐私保护**: 搜索内容脱敏处理

#### 2. 分类切换分析
- **事件名**: `category_switch`
- **追踪内容**: 分类ID、分类名称
- **用途**: 了解用户兴趣偏好

#### 3. 内容访问分析
- **事件名**: `content_access`
- **追踪内容**: 内容名称、分类、目标域名
- **用途**: 分析热门内容和外链点击

#### 4. 页面导航分析
- **事件名**: `page_switch`
- **追踪内容**: 来源页面、目标页面
- **用途**: 用户流程分析

#### 5. FAQ互动分析
- **事件名**: `faq_expand`
- **追踪内容**: 问题ID、问题标题
- **用途**: 优化常见问题内容

## 🛡️ 隐私与安全

### 数据保护措施

1. **搜索查询脱敏**: 不记录具体搜索内容，只记录是否有查询
2. **内容长度限制**: 所有文本属性限制在50字符内
3. **错误处理**: 包含完整的错误捕获和兜底处理
4. **环境控制**: 仅在生产环境启用数据收集

### 配置选项

在 `src/lib/analytics.config.ts` 中可以配置：

```typescript
// 启用/禁用特定事件追踪
events: {
  trackSearch: true,
  trackCategorySwitch: true,
  trackContentAccess: true,
  trackPageSwitch: true,
  trackFAQExpand: true,
}

// 隐私保护设置
privacy: {
  anonymizeSearchQueries: true,
  anonymizeContentNames: false,
  maxPropertyLength: 50,
}
```

## 📋 Vercel 仪表板设置

### 1. 启用 Analytics

1. 登录 [Vercel Dashboard](https://vercel.com/dashboard)
2. 选择项目 `info-aggregator`
3. 进入 **Analytics** 标签页
4. 点击 **Enable Analytics**

### 2. 查看数据

Analytics 数据包括：

- **页面浏览量**: 实时和历史数据
- **自定义事件**: 用户行为分析
- **性能指标**: Core Web Vitals
- **访问来源**: 流量来源分析

### 3. 关键指标

重点关注：

1. **搜索使用率**: search 事件频率
2. **分类偏好**: category_switch 事件分布
3. **内容热度**: content_access 事件排行
4. **用户流程**: page_switch 事件路径

## 🔄 部署后验证

### 1. 开发环境测试

在开发环境中，Analytics 事件会在控制台输出：

```bash
npm run dev
# 打开浏览器控制台查看事件日志
```

### 2. 生产环境验证

部署到 Vercel 后：

1. 访问网站并执行各种操作
2. 等待 5-10 分钟数据同步
3. 在 Vercel Dashboard 查看 Analytics 数据

## 🚀 优化建议

### 基于数据的优化方向

1. **搜索优化**: 根据搜索事件优化搜索功能
2. **内容调整**: 根据访问热度调整内容排序
3. **界面优化**: 根据页面切换数据优化导航
4. **FAQ改进**: 根据展开率优化问题排序

### 扩展功能

可以添加更多事件追踪：

- 错误事件追踪
- 性能指标监控
- 用户会话时长
- 设备类型分析

## 📝 注意事项

1. **数据延迟**: Vercel Analytics 有 5-15 分钟的数据延迟
2. **配额限制**: 免费计划有事件数量限制
3. **隐私合规**: 确保数据收集符合当地法律法规
4. **性能影响**: Analytics 脚本对性能影响极小