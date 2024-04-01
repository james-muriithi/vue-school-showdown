import UnpluginComponentsVite from "unplugin-vue-components/vite";
import IconsResolver from "unplugin-icons/resolver";
import Icons from "unplugin-icons/vite";

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
    },
  },
});
