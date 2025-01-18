import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "我的文档",
  description: "使用 VitePress 构建的文档站点",
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/' }
    ],
    sidebar: [
      {
        text: '指南',
        items: [
          { text: '介绍', link: '/guide/introduction' },
          { text: '快速开始', link: '/guide/getting-started' }
        ]
      }
    ]
  }
})
