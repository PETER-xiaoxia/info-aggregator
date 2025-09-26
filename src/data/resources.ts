import { Category, FAQ, Resource } from '@/types';

export const categories: Category[] = [
  {
    id: 'game',
    name: '游戏',
    description: '各类游戏内容',
    count: 0
  },
  {
    id: 'software',
    name: '软件',
    description: '实用工具和应用程序',
    count: 0
  },
  {
    id: 'movie',
    name: '影视',
    description: '电影、电视剧、纪录片',
    count: 0
  },
  {
    id: 'other',
    name: '其他',
    description: '其他类型内容',
    count: 0
  }
];

export const resources: Resource[] = [
  {
    id: '1',
    name: '樱花校园模拟器',
    description: '樱花校园模拟器',
    url: 'https://pan.xunlei.com/s/VOa-0PmkvYi79mLPrNwh0ushA1?pwd=ierz#',
    category: 'game',
    featured: true,
    addedDate: '2025-09-23'
  },
  {
    id: '2',
    name: '我的世界珍妮模组手机版',
    description: '我的世界珍妮模组手机版',
    url: 'https://pan.xunlei.com/s/VOa-0ZUkA6wW0tTShVqkRSSpA1?pwd=bb7u# ',
    category: 'game',
    featured: false,
    addedDate: '2025-09-23'
  },
  {
    id: '3',
    name: '清洁工传说V2.01',
    description: '清洁工传说V2.01',
    url: 'https://pan.xunlei.com/s/VOa3NtoYgeYJKZkz5KOuU2PwA1?pwd=hhrr#',
    category: 'game',
    featured: false,
    addedDate: '2025-09-23'
  }
];

export const faqs: FAQ[] = [
  {
    id: '1',
    question: '如何使用本网站？',
    answer: '选择分类后，点击"去保存"按钮即可跳转到对应页面，然后可以保存内容。',
    order: 1
  },
  {
    id: '2',
    question: '如何搜索内容？',
    answer: '在顶部搜索框输入关键词，系统会自动匹配并切换到相应分类显示搜索结果。',
    order: 2
  },
  {
    id: '3',
    question: '复制功能不工作怎么办？',
    answer: '请确保浏览器支持剪贴板操作，在某些旧版浏览器中可能需要手动选择并复制链接。',
    order: 3
  },
  {
    id: '4',
    question: '如何添加新的内容？',
    answer: '目前本站为静态展示，如需添加内容请联系管理员。',
    order: 4
  },
  {
    id: '5',
    question: '网站在移动端的使用体验如何？',
    answer: '本网站采用响应式设计，在手机、平板等移动设备上都有良好的使用体验。',
    order: 5
  }
];

// 计算分类数量
categories.forEach(category => {
  category.count = resources.filter(resource => resource.category === category.id).length;
});