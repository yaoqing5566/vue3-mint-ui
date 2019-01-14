import router from './router'
import store from './store'
import { Indicator } from 'mint-ui';
import {
  setTitle
} from '@/utils/util' // 设置浏览器头部标题



//使用钩子函数对路由进行权限跳转
router.beforeEach((to, from, next) => {
    Indicator.open();

    // 设置浏览器头部标题
    const browserHeaderTitle = to.name;
    store.commit('SET_TITLE', {
        browserHeaderTitle: browserHeaderTitle
    })

    next();
    Indicator.close();
})


router.afterEach(() => {
    Indicator.close();
  setTimeout(() => {
    const browserHeaderTitle = store.state.browserHeaderTitle
    setTitle(browserHeaderTitle)
  }, 0)
})
