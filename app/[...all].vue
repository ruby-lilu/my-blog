<template>
  <div style="padding: 6rem; text-align: center">
    <h1>404 — 页面未找到</h1>
    <p>您访问的页面不存在。</p>
    <NuxtLink to="/">返回首页</NuxtLink>
  </div>
</template>

<script setup>
definePageMeta({
  // 使用 404 状态码，若 SSR 则会返回 404
  // 注意：对于 GitHub Pages SPA fallback，这个并不会改变服务器行为
  // 但能在客户端显示正确的内容
  // @ts-ignore
  layout: "default",
});
</script>
