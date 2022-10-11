import pkg from './package'
import path from 'path'
import fs from 'fs'

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: true,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'cobra-event',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // router: {
  //   base: '/events/'
  // },

  router: {
    middleware: ['auth']
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

 // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
 plugins: [
  '~/plugins/fetchclientid.js'
],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  // buildModules: [
  //   // https://go.nuxtjs.dev/tailwindcss
  //   '@nuxtjs/tailwindcss',
  // ],


    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
      // https://go.nuxtjs.dev/content
      '@nuxt/content',
      '@nuxtjs/axios',
      '@nuxtjs/auth-next'
    ],

    axios: {
      // WARNING: proxy doesn't work with nuxt generate,
      // have to use a prefix and set an API_URL
      //proxy: true,
    },

 

    auth: {

      strategies: {
        custom: {
          scheme: '@/AuthSchemes/runtimeConfigurableScheme',
          endpoints: {
          },
          grantType: 'authorization_code',
          scope: ['openid']        
        }
      }
    },

 
  server: {
    https: {
      key: fs.readFileSync(path.resolve(__dirname, 'server.key')),
      cert: fs.readFileSync(path.resolve(__dirname, 'server.crt'))
    }
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config, ctx) {
      if (ctx.isDev) {
        config.devtool = ctx.isClient ? 'source-map' : 'inline-source-map'
      }
    }
  }
}



