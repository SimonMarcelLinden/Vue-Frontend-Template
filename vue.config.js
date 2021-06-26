module.exports = {
  pluginOptions: {
    i18n: {
      locale: 'de',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: true
    }
  },
  devServer: {
    disableHostCheck: true,
    watchOptions: {
      poll: true
    }
  }
}  
  