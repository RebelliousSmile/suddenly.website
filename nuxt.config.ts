// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@unocss/nuxt', '@nuxtjs/i18n'],

  ssr: true,

  app: {
    head: {
      title: 'Suddenly',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Suddenly — Réseau fédéré de fiction partagée. Publiez vos comptes-rendus de partie, liez vos personnages, et tissez des fictions partagées à travers le Fediverse.' },
        { name: 'keywords', content: 'suddenly, fédéré, activitypub, jeu de rôle, microstories, fediverse, fiction partagée' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Crimson+Text:ital,wght@0,400;0,600;1,400&family=Inter:wght@400;500;600;700&display=swap' }
      ]
    },
    baseURL: '/'
  },

  i18n: {
    locales: [
      { code: 'fr', language: 'fr-FR', name: 'Français', file: 'fr.json' },
      { code: 'en', language: 'en-US', name: 'English', file: 'en.json' },
    ],
    defaultLocale: 'fr',
    strategy: 'prefix_except_default',
    lazy: true,
    langDir: 'locales',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
    },
  },
})
