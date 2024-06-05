// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: {
    shim: false, // 이건 추가한거
    typeCheck: true,
  },
  modules: ["nuxt-quasar-ui"],
  quasar: {
    /* */
  },
});
