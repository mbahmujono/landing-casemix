export default defineNuxtConfig({
  css: ["@/assets/css/base.css"],

  app: {
    head: {
      title: "Nuxt 3 SaaS Starter",
      htmlAttrs: {
        lang: "en",
      },
    },
    pageTransition: { name: "page", mode: "out-in" },
  },

  site: {
    url: "https://nuxt-saas-landing-page.vercel.app/",
  },

  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/eslint",
    "@nuxtjs/color-mode",
    "nuxt-og-image",
    "@nuxt/image",
    '@vueuse/motion/nuxt',
    "@nuxt/icon"
  ],

  eslint: {
    config: {
      stylistic: {
        quotes: "double",
      },
    },
  },

  colorMode: {
    classSuffix: "",
    preference: "system",
    fallback: "light",
  },

  runtimeConfig: {
    public: {
      motion: {
        directives: {
          'pop-bottom': {
            initial: {
              scale: 0,
              opacity: 0,
              y: 100,
            },
            visible: {
              scale: 1,
              opacity: 1,
              y: 0,
            }
          }
        }
      }
    }
  },
})