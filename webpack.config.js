const path = require('path')
const { merge } = require('webpack-merge')
const nodeExternals = require('webpack-node-externals')
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')
const baseConfig = require('./base.config')

module.exports = merge(baseConfig,{
    entry: {
        index: path.resolve(__dirname + '/src/server.js')
    },

    target: 'node',

    // 对 bundle renderer 提供 source map 支持
    devtool: 'source-map',

    // 此处告知 server bundle 使用 Node 风格导出模块(Node-style exports)
    output: {
        libraryTarget: 'commonjs2'
    },

    externals: nodeExternals({
        whitelist: /\.css$/
    }),

    plugins: [
        new VueSSRClientPlugin()
    ]
})
