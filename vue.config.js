
module.exports = {
    devServer: {
        disableHostCheck: true,
        host: 'localhost'
    },

            optimization: {
                splitChunks: {
                    minSize: 10000,
                    maxSize: 250000,
                }
            }
        }
        