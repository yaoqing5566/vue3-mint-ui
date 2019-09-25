import router from './router'
import store from './store'
import { Indicator } from 'mint-ui';
import {
  setTitle
} from '@/utils/util' // 设置浏览器头部标题



//使用钩子函数对路由进行权限跳转
router.beforeEach((to, from, next) => {
    console.log('start',111)
    Indicator.open();
    // 设置浏览器头部标题
    const browserHeaderTitle = to.name;
    store.commit('SET_TITLE', {
        browserHeaderTitle: browserHeaderTitle
    })
    // 强制把url信息留在微信浏览器
    setTimeout(function () {
        window.location = window.location;
    }, 500);
    next();
})


router.afterEach(() => {
    console.log('start',222)
    Indicator.close();
  setTimeout(() => {
    const browserHeaderTitle = store.state.browserHeaderTitle
    setTitle(browserHeaderTitle)
  }, 0)
})
