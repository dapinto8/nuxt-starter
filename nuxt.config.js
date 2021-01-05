export default {
  // Nuxt server (https://nuxtjs.org/api/configuration-server)
  server: {
    port: 4000, // default: 3000
    host: '0.0.0.0' // default: localhost
  },

  // Nuxt env (https://nuxtjs.org/api/configuration-env)
  env: {
    apiURL: process.env.API_URL
  },

  //  Nuxt target (https://go.nuxtjs.dev/config-target)
  target: 'server',

  // Nuxt srcDir (https://nuxtjs.org/guides/configuration-glossary/configuration-srcdir)
  srcDir: 'client/',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'nuxt-starter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['~/assets/styles/global.scss'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://google-analytics.nuxtjs.org
    '@nuxtjs/google-analytics',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://github.com/nuxt-community/style-resources-module
    '@nuxtjs/style-resources',
    // https://sitemap.nuxtjs.org
    '@nuxtjs/sitemap',
    // https://github.com/nuxt-community/robots-module,
    '@nuxtjs/robots',
    // https://gitlab.com/broj42/nuxt-lazy-load,
    'nuxt-lazy-load',
    // https://github.com/nuxt-community/community-modules/tree/master/packages/toast
    '@nuxtjs/toast'
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    baseURL: process.env.API_URL
  },

  // Google Analytics module configuration (https://google-analytics.nuxtjs.org/options)
  googleAnalytics: {
    id: process.env.GOOGLE_ANALYTICS_ID
  },

  // Sitemap config (https://sitemap.nuxtjs.org/usage/sitemap)
  sitemap: {},

  // @nuxtjs/robots config (https://github.com/nuxt-community/robots-module#options)
  robots: {},

  // Nuxt Style Resources config (https://github.com/nuxt-community/style-resources-module#setup)
  styleResources: {
    scss: ['~/assets/styles/variables.scss']
  },

  // Nuxt Tailwind config (https://tailwindcss.nuxtjs.org/tailwind-config)
  tailwindcss: {
    configPath: '@@tailwind.config.js',
    cssPath: '@assets/styles/tailwind.scss',
    exposeConfig: true
  },

  // nuxtjs/toast - vue-toasted config (https://github.com/nuxt-community/community-modules/tree/master/packages/toast#setup)
  toast: {
    position: 'top-center',
    register: [
      // Register custom toasts
      {
        name: 'my-error',
        message: 'Oops...Something went wrong',
        options: {
          type: 'error'
        }
      }
    ]
  }
};
