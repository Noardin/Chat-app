
module.exports = {
    devServer: {
        disableHostCheck: true,
        host: 'localhost'
    },
     configureWebpack:{
    optimization: {
      splitChunks: {
        minSize: 10000,
        maxSize: 250000,
      }
    }
  }
}
