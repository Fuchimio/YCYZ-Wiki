<script lang="ts" setup>
import DefaultTheme from 'vitepress/theme'
import MouseClick from "./MouseClick.vue";
import MouseFollower from "./MouseFollower.vue";
import { useData } from 'vitepress'
import { toggleDark } from './Dark.ts'
const { isDark } = useData()

// 实现切换主题过渡动画
toggleDark(isDark)
</script>
<template>
  <DefaultTheme.Layout>

    <template #layout-top>
      <MouseFollower />
      <MouseClick />
    </template>

  </DefaultTheme.Layout>
</template>