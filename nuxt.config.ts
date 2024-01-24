// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    flickrKey: process.env.FLICKR_API_KEY,
    flickrUserId: process.env.FLICR_USER_ID,
    notionAPISecret: process.env.NOTION_API_SECRET,
    notionPhotohgraphyPage: process.env.NOTION_PHOTOGRAPHY_PAGE,
  },
  modules: ["@vueuse/nuxt"],
});
