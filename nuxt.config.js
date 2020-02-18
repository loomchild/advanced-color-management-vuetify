export default {
  mode: 'spa',

  head: {
    title: 'Color Test',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Color test description.' }
    ],
    link: [
    ]
  },

  loading: { color: '#f00' },

  css: [
  ],

  plugins: [
  ],

  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify'
  ],

  modules: [
  ],

  vuetify: {
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: '#4caf50',
          secondary: '#ff8c00',
          accent: '#9c27b0'
        }
      }
    }
  },

  build: {
    extend (config, ctx) {
    }
  }
}
