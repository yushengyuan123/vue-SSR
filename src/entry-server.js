// entry-server.js
const { createApp } = require('./app')

// const getData = () => {
//     return new Promise(((resolve, reject) => {
//         try {
//             setTimeout(() => {
//                 resolve({title: 'SSR data'})
//             }, 2000)
//         } catch (e) {
//             reject(e)
//         }
//     }))
// }

// 2、编译webpack配置文件
// const serverCompiler = webpack(webpackConfig)
// const mfs = new MemoryFS()
// // 指定输出到的内存流中
// serverCompiler.outputFileSystem = mfs

// 3、监听文件修改，实时编译获取最新的 vue-ssr-server-bundle.json
// let bundle
// serverCompiler.watch({}, (err, stats) =>{
//     if (err) {
//         throw err
//     }
//     stats = stats.toJson()
//     stats.errors.forEach(error => console.error(error) )
//     stats.warnings.forEach( warn => console.warn(warn) )
//     const bundlePath = path.join(
//         webpackConfig.output.path,
//         'vue-ssr-server-bundle.json'
//     )
//     bundle = JSON.parse(mfs.readFileSync(bundlePath,'utf-8'))
//     console.log('new bundle generated')
// })


module.exports = (context) => {
    // 因为有可能会是异步路由钩子函数或组件，所以我们将返回一个 Promise，
    // 以便服务器能够等待所有的内容在渲染前，
    // 就已经准备就绪。
    return new Promise(async (resolve, reject) => {
        // const data = await getData()

        const { app, router } = createApp();

        // 设置服务器端 router 的位置
        router.push({
            name: context.url.substring(1)
        })

        // 等到 router 将可能的异步组件和钩子函数解析完
        router.onReady(() => {
            const matchedComponents = router.getMatchedComponents();
            // 匹配不到的路由，执行 reject 函数，并返回 404
            if (!matchedComponents.length) {
                return reject({ code: 404 })
            }
            // Promise 应该 resolve 应用程序实例，以便它可以渲染
            resolve(app)
        }, reject)
    })
}
