/*
 * @Author: 龚燎原 274473435@qq.com
 * @Date: 2024-02-01 01:36:34
 * @LastEditors: 龚燎原
 * @LastEditTime: 2024-02-02 15:35:55
 */
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["~/assets/css/globals.css"],
  ssr: false,
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt"],
  devServer: {
    port: 8000,
  },
});
