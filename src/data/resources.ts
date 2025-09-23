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
    name: '王者荣耀安装包',
    description: 'MOBA手游，5v5竞技对战',
    url: 'https://pan.quark.cn/s/9a2af34ff3ca',
    category: 'game',
    featured: true,
    addedDate: '2025-09-23'
  },
  {
    id: '2',
    name: '原神PC版',
    description: '开放世界冒险游戏',
    url: 'https://pan.baidu.com/s/1a2b3c4d5e6f',
    category: 'game',
    featured: false,
    addedDate: '2025-09-23'
  },
  {
    id: '3',
    name: '和平精英辅助工具',
    description: '战术竞技射击手游',
    url: 'https://pan.123.com/s/abc123def',
    category: 'game',
    featured: false,
    addedDate: '2025-09-23'
  },
  {
    id: '4',
    name: 'VS Code 最新版',
    description: '免费代码编辑器，支持多种编程语言',
    url: 'https://pan.quark.cn/s/vscode2024',
    category: 'software',
    featured: true,
    addedDate: '2025-09-23'
  },
  {
    id: '5',
    name: 'Figma 桌面版',
    description: '在线UI设计协作工具',
    url: 'https://pan.baidu.com/s/figma_desktop',
    category: 'software',
    featured: false,
    addedDate: '2025-09-23'
  },
  {
    id: '6',
    name: 'Notion 离线版',
    description: '全能笔记和项目管理工具',
    url: 'https://pan.123.com/s/notion_offline',
    category: 'software',
    featured: false,
    addedDate: '2025-09-23'
  },
  {
    id: '7',
    name: 'Photoshop 2024',
    description: 'Adobe图像处理软件',
    url: 'https://pan.quark.cn/s/ps2024_crack',
    category: 'software',
    featured: false,
    addedDate: '2025-09-23'
  },
  {
    id: '8',
    name: '流浪地球 4K蓝光',
    description: '刘慈欣科幻小说改编电影',
    url: 'https://pan.baidu.com/s/wandering_earth_4k',
    category: 'movie',
    featured: true,
    addedDate: '2025-09-23'
  },
  {
    id: '9',
    name: '三体 完整版',
    description: '刘慈欣科幻小说改编剧集',
    url: 'https://pan.123.com/s/threebody_full',
    category: 'movie',
    featured: false,
    addedDate: '2025-09-23'
  },
  {
    id: '10',
    name: '长安三万里 高清版',
    description: '国产动画电影',
    url: 'https://pan.quark.cn/s/changan_hd',
    category: 'movie',
    featured: false,
    addedDate: '2025-09-23'
  },
  {
    id: '11',
    name: '封神第一部 导演剪辑版',
    description: '乌尔善导演奇幻电影',
    url: 'https://pan.baidu.com/s/fengshen_director_cut',
    category: 'movie',
    featured: false,
    addedDate: '2025-09-23'
  },
  {
    id: '12',
    name: 'AI工具包合集',
    description: '人工智能工具和教程',
    url: 'https://pan.quark.cn/s/ai_tools_2024',
    category: 'other',
    featured: true,
    addedDate: '2025-09-23'
  },
  {
    id: '13',
    name: '编程学习资料',
    description: '前端后端全栈教程',
    url: 'https://pan.123.com/s/programming_tutorials',
    category: 'other',
    featured: false,
    addedDate: '2025-09-23'
  },
  {
    id: '14',
    name: '设计师素材库',
    description: '图标字体UI设计素材',
    url: 'https://pan.baidu.com/s/design_materials',
    category: 'other',
    featured: false,
    addedDate: '2025-09-23'
  }
];

export const faqs: FAQ[] = [
  {
    id: '1',
    question: '如何使用本网站？',
    answer: '选择分类后，点击复制按钮即可复制链接到剪贴板，然后可以分享给朋友或保存使用。',
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