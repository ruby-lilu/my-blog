<template>
  <div class="error-page" style="text-align: center; padding: 6rem 1rem">
    <h1 v-if="error?.statusCode === 404">404 — 页面未找到</h1>
    <h1 v-else>{{ error?.statusCode || 500 }} — 出错了</h1>
    <p v-if="error?.message">{{ error.message }}</p>
    <NuxtLink to="/">返回首页</NuxtLink>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  error?: { statusCode?: number; message?: string };
}>();
const error = props.error;
</script>
