const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
    entry:{

    },
    output:{
        publicPath:"http://localhost:8080/",
        path: path.resolve(__dirname + '/dist')
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    compilerOptions: {
                        preserveWhitespace: false
                    }
                }
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        // new CleanWebpackPlugin({
        //     exclude:['vue-ssr-server-bundle.json', 'main.js', 'vendors~main.js', 'vue-ssr-client-manifest.json'],
        // })
    ]
}
