import Vue from 'vue'

const app = new Vue({
    template: `<div>Hello World</div>`
})

const renderer = require('vue-server-renderer').createBundleRenderer()

renderer.renderToString(app, (err, html) => {
    if (err)
        throw err
    console.log(html)
})

renderer.renderToString(app).then(html => {
    console.log(html)
}).catch(err => {
    console.log(err)
})

