import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export function createRouter () {
    return new Router({
        mode: 'history',
        routes:[
            {
                path: '/',
                component: () => import('../views/index.vue'),
                name: "index"
            },
            {
                path: "/home",
                component: () => import('../components/home.vue'),
                name: "home"
            },
            {
                path: "/about",
                component: () => import('../components/about.vue'),
                name:"about"
            }
        ]
    })
}
