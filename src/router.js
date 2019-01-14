import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import Layout from './components/Layout.vue'
export default new Router({
    //mode: 'history',
    //base: process.env.BASE_URL,
    scrollBehavior (to, from, savedPosition) {
        if (savedPosition) {
            console.log("后退")
            return savedPosition
        } else {
            console.log("前进")
            return {x: 0, y: 0}
        }
    },
    routes: [
        {
            path: '/',
            redirect: '/invite'
        },
        {
            path: '/invite',
            redirect: '/invite/member',
            component: Layout,
            meta: {title: '邀请家人H5'},
            children: [
                {
                    path: 'member',
                    name: '邀请家人',
                    component: () => import('@/views/invite-member/Home.vue'),
                },
            ]
        }

    ]
})
