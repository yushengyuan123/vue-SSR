// store.js
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 假定我们有一个可以返回 Promise 的
// 通用 API（请忽略此 API 具体实现细节）
import { getItems } from '../api/getItems.js'

export function createStore () {
    return new Vuex.Store({
        state: {
            items: {
                id: '默认',
                name: '默认',
                price: '默认'
            }
        },
        actions: {
            fetchItem ({ commit }, id) {
                // `store.dispatch()` 会返回 Promise，
                // 以便我们能够知道数据在何时更新
                getItems(id).then(({ code, message, data }) => {
                    commit('setItem', data)
                })
            }
        },
        mutations: {
            setItem (state, { id, name, price }) {
                state.items.id = id
                state.items.name = name
                state.items.price = price
            }
        }
    })
}
