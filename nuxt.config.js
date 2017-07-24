module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'James Zaccardo | Web Developer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'James Zaccardo | Web Developer' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }, { rel: 'stylesheet', href: '~assets/Wavehaus-42Light.otf'}, { rel: 'stylesheet', href: '~assets/Wavehaus-28Thin.otf'}
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#2196f3' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
