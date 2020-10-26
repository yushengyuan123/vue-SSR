import Vue from 'vue'
import {createRouter} from "./router/router";
import App from "./App.vue";
import {createStore} from "./store";

export function createApp(context) {
    const router = createRouter()
    const store = createStore()

    const app = new Vue({
        store,
        router,
        render: h => h(App)
    })

    return {app, router}
}
