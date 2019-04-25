
module.exports = {
    devServer: {
        disableHostCheck: true,
        host: 'localhost'
    },
    configureWebpack: {
        watch: true,
        watchOptions: {
            ignored: /node_modules/,
            poll: 1000,
            performance: {
                hints: false
            },
            optimization: {
                splitChunks: {
                    minSize: 10000,
                    maxSize: 250000,
                }
            }
        }

    }
}