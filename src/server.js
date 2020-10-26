const devServer = require("../build/dev-server.js");
const express = require("express");
const app = express();
const vueRender = require("vue-server-renderer");
const fs = require('fs')
const path = require('path')
const clientManifest = require('../dist/vue-ssr-client-manifest.json')

process.on('unhandledRejection', (reason, p) => {
    console.log('Unhandled Rejection at:', p, 'reason:', reason);
    // application specific logging, throwing an error, or other logic here
});

app.use(express.static('../dist'))



app.get('*', (request, respones) => {
    respones.status(200);

    console.log('外层' + request.url)
    if (request.url === '/' || request.url === '/home') {
        const json_path = path.resolve(__dirname, '../dist/vue-ssr-server-bundle.json')

        let render = vueRender.createBundleRenderer(json_path, {
            template: fs.readFileSync(path.resolve(__dirname, '../index.template.html'), 'utf-8'),
            //  每次创建一个独立的上下文
            renInNewContext: false,
            clientManifest
        });

        render.renderToString({
            url: request.url
        }).then((html) => {
            respones.end(html);
        }).catch(error => {
            console.error(error)
            respones.end(JSON.stringify(error));
        });
    } else {
        respones.end('404')
    }
})

app.listen(8080, () => {
    console.log("服务已开启 localhost:8080")
});
