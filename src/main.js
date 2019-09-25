import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import MintUI, {Indicator,MessageBox} from 'mint-ui'
import 'mint-ui/lib/style.css'
import VueClipboard from 'vue-clipboard2' ///复制插件
Vue.use(VueClipboard)
import './permission' // permission control
import {post,get} from './http'
Vue.config.productionTip = false
global.$_post=post;
global.$_get=get;

// vue-photo-preview
let options={
    fullscreenEl:true, //关闭全屏按钮
    escKey: true,
    tapToClose:true
}
import preview from 'vue-photo-preview'
import 'vue-photo-preview/dist/skin.css'
Vue.use(preview,options)
// vue-photo-preview  end

// swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper, /* { default global options } */)
// swiperend






Vue.use(MintUI);
new Vue({
  router,
  store,
  render: h => h(App),
  watch: {
      $route(to, from) {
          Indicator.close();
          MessageBox.close();
          console.log('start',333)
      }
  }
}).$mount('#app')
