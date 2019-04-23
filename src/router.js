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
            redirect: '/home'
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
                    meta: {
                        keepAlive: false // 不需要缓存
                    },
                    component: () => import('@/views/invite-member/Home.vue'),
                },
            ]
        },
        {
            path: '/activity',
            redirect: '/activity/list',
            component: Layout,
            meta: {title: '活动'},
            children: [
                {
                    path: 'list',
                    name: '校园活动',
                    meta: {
                        keepAlive: false // 不需要缓存
                    },
                    component: () => import('@/views/activity/index.vue'),
                },
                {
                    path: 'pullDown',
                    name: '校园活动1',
                    meta: {
                        keepAlive: false // 不需要缓存
                    },
                    component: () => import('@/views/activity/pullDown.vue'),
                },
                {
                    path: 'pullDown2',
                    name: '校园活动2',
                    meta: {
                        keepAlive: true // 要缓存
                    },
                    component: () => import('@/views/activity/pullDown2.vue'),
                },
                {
                    path: 'detail',
                    name: '校园活动详情',
                    meta: {
                        keepAlive: false // 不需要缓存
                    },
                    component: () => import('@/views/activity/detail.vue'),
                }
            ]
        },
        {
            path: '/swiper',
            redirect: '/swiper/virtual',
            component: Layout,
            meta: {title: 'swiper'},
            children: [
                {
                    path: 'virtual',
                    name: 'virtual',
                    meta: {
                        keepAlive: false // 不需要缓存
                    },
                    component: () => import('@/views/swiper/virtualSlides.vue'),
                }
            ]
        },
        {
            path: '/home',
            meta: {title: 'home'},
            name: 'home',
            component: () => import('@/views/home.vue'),
        },
        {
            path: '/404',
            meta: {title: '404'},
            name: '404',
            component: () => import('@/views/404.vue'),
        },
        {
            path: '*',
            redirect: '/404'
        }

    ]
})
