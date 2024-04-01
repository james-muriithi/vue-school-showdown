import UnpluginComponentsVite from "unplugin-vue-components/vite";
import IconsResolver from "unplugin-icons/resolver";
import Icons from "unplugin-icons/vite";

const description =
  "Training solutions designed for companies, agencies and organizations with developers using or who are considering using the Vue.js framework";
const keywords = ["Vue school", "vue.js", "nuxt.js"];
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "unplugin-icons/nuxt"],
  vite: {
    optimizeDeps: { exclude: ["fsevents"] },
    plugins: [
      UnpluginComponentsVite({
        dts: true,
        resolvers: [
          IconsResolver({
            prefix: "Icon",
          }),
        ],
      }),
      Icons({
        autoInstall: true,
      }),
    ],
  },
  app: {
    head: {
      bodyAttrs: {
        class: "bg-dark",
      },
      title: "Vue school",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content: description,
        },
        {
          hid: "author",
          name: "author",
          content: "James muriithi",
        },
        {
          hid: "theme",
          name: "theme-color",
          content: "#2B2F44",
        },
        {
          hid: "keywords",
          name: "keywords",
          content: keywords.join(", "),
        },
        { hid: "og-title", property: "og:title", content: "Vue School" },
        { hid: "og-desc", property: "og:description", content: description },
        {
          hid: "og-type",
          property: "og:type",
          content: "website",
        },
        {
          hid: "og-site-name",
          property: "og:site_name",
          content: "Vue School",
        },
        {
          hid: "twitter-card",
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          hid: "twitter-title",
          name: "twitter:title",
          content: "Vue School",
        },
        {
          hid: "twitter-desc",
          name: "twitter:description",
          content: description,
        },
        {
          hid: "robots",
          name: "robots",
          content: "index, follow",
        },
      ],
    },
  },
});
