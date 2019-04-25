
module.exports = {
    devServer: {
        disableHostCheck: true,
        host: 'localhost'
    },
     configureWebpack:{
    optimization: {
      splitChunks: {
        minSize: 1000,
        maxSize: 25000,
      }
    }
  }
}
