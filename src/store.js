import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        windowHeight: document.documentElement.clientHeight || document.body.clientHeight,
        windowWidth: document.documentElement.clientWidth || document.body.clientWidth,
        browserHeaderTitle:'',
    },
    mutations: { //提交状态修改 也就是set
        SET_TITLE: (state, action) => {
            state.browserHeaderTitle = action.browserHeaderTitle
        }
    },
    actions: { //和mutations类似。不过actions支持异步操作

    },
    getters: {//getters 和 vue 中的 computed 类似 , 都是用来计算 state 然后生成新的数据 ( 状态 ) 的

    }
})
