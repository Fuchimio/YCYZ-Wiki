import { defineConfig } from 'vitepress'

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
    nav: [
      { text: '主页', link: '/' },
      { text: '探索一中', link: '/introduction' }
    ],
    logo: '/logo.jpg',
    sidebar: [
      {
        text: '侧边栏还没搞呢',
        items: [
          { text: '欢迎', link: '/introduction' },
          { text: '银川一中', link: '/Campus' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Fuchimio/YCYZ-Wiki' }
    ]
  }
})
