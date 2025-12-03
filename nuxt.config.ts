// 临时在本文件声明 process，避免 ts 报错（推荐在 tsconfig 中添加 node types）
declare const process: any;

export default defineNuxtConfig({
  modules: [],

  app: {
    // ⚠️ 核心配置：如果是项目站点，必须配置 baseURL
    // 如果仓库名是 'my-blog'，这里填 '/my-blog/'
    // 如果是 'username.github.io'，这里保持默认 '/' 或不填
    baseURL: process.env.NUXT_APP_BASE_URL || "/",

    // 优化：构建时给 HTML 添加 meta 信息
    head: {
      title: "我的技术博客",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
    },
  },

  // 公开运行时配置，方便在客户端使用 useRuntimeConfig()
  runtimeConfig: {
    public: {
      // 在 .env 中设置 NUXT_APP_BASE_URL 或者在 CI 中注入环境变量
      baseURL: process.env.NUXT_APP_BASE_URL || "/",
    },
  },

  // 开启 SSG 全静态生成模式 (Nuxt 3 默认 generate 就是 SSG，但显式声明是个好习惯)
  ssr: true,
  nitro: {
    // 预渲染配置
    prerender: {
      crawlLinks: true, // 自动爬取链接进行预渲染
      routes: ["/"], // 确保首页被预渲染
    },
  },

  // 兼容性设置
  experimental: {
    payloadExtraction: false, // 有时能解决 GitHub Pages 部署后的 payload 404 问题
  },
});
