import { defineConfig } from 'vitepress'
import { nav } from './config/nav.ts'
import { sidebar } from './config/sidebar.ts'

// https://vitepress.dev/reference/site-config
export default defineConfig({

  srcDir: "docs",
  sitemap: {
    hostname: 'https://wiki.ycyz.top',
  },
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  title: "银川一中校园指南",
  description: "银川一中校园指南 Wiki，养正人的校园指南针",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    footer: {
      message: 'Released under the MIT License.',
      copyright: `Copyright © 2026-${new Date().getFullYear()} 银川一中校园指南`,
    },
    logo: '/logo.jpg',
    sidebarMenuLabel:'本章目录',
    returnToTopLabel:'返回顶部',
    outline: {
      level: [2,4],
      label: '当前页大纲'
    },
    editLink: {
      pattern: 'https://github.com/Fuchimio/YCYZ-Wiki/edit/main/docs/:path',
      text: '在GitHub编辑本页'
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      },
    },
    darkModeSwitchLabel: '深色模式',
    docFooter: {
      prev: '上一节',
      next: '下一节',
    },
    nav,
    sidebar,
    search: {
      provider: 'local'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Fuchimio/YCYZ-Wiki' }
    ]
  }
})
