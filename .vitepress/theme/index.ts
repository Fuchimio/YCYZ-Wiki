/// <reference types="vitepress/client" />
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import Linkcard from "./components/Linkcard.vue"
import HomeUnderline from "./components/HomeUnderline.vue"
import './style/index.css'
import MouseClick from "./components/MouseClick.vue"
import MouseFollower from "./components/MouseFollower.vue"
import MyLayout from './components/MyLayout.vue'
import update from "./components/update.vue"
import ArticleMetadata from "./components/ArticleMetadata.vue"
import giscusTalk from 'vitepress-plugin-comment-with-giscus'
import { useData, useRoute } from 'vitepress'
import { toRefs } from 'vue'
import { NProgress } from 'nprogress-v2/dist/index.js' // 进度条组件
import 'nprogress-v2/dist/index.css' // 进度条样式
import { inBrowser } from "vitepress";


export default {
  extends: DefaultTheme,
  Layout: MyLayout,

  setup() {
    const { frontmatter } = toRefs(useData())
    const route = useRoute()

    giscusTalk(
      {
        repo: 'Fuchimio/YCYZ-Wiki',
        repoId: 'R_kgDOV5eAbQ',
        category: 'General',
        categoryId: 'DIC_kwDOV5eAbc4DMAzH',
        mapping: 'pathname',
        inputPosition: 'bottom',
        transparent_background: true,
        lang: 'zh-CN',
      },
      { frontmatter, route },
      true
    )
  },

  enhanceApp({ app, router, siteData }) {
    app.component('Linkcard', Linkcard)
    app.component('HomeUnderline', HomeUnderline)
    app.component('MouseClick', MouseClick)
    app.component('MouseFollower', MouseFollower)
    app.component('update', update)
    app.component('ArticleMetadata', ArticleMetadata)
    if (inBrowser) {
      NProgress.configure({ showSpinner: false });
      router.onBeforeRouteChange = () => {NProgress.start();};
      router.onAfterRouteChange = () => {NProgress.done();}
    }


  }
} satisfies Theme