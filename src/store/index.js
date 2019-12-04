import Vue from 'vue'
import Vuex from 'vuex'
import state from './state.js'
import mutations from './mutations.js'
import actions from './actions.js'
import getters from './getters.js'
Vue.use(Vuex)

export default new Vuex.Store({
    state,//保存应用的状态值
    mutations, //在这个文件中定义对状态值的操作，增删改查。
    actions,
    getters //将我们在states中定义的值暴露在store.getters对象中，便于我们在组件中可以通过store.getters.bookList访问数据
})
