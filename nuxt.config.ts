// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  app: {
    pageTransition: {
      name: "page",
      mode: "out-in",
    },
  },
  modules: ["@nuxt/content"],
});
