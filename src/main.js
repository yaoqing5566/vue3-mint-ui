import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import MintUI, {Indicator} from 'mint-ui'
import 'mint-ui/lib/style.css'
import VueClipboard from 'vue-clipboard2'
Vue.use(VueClipboard)
import './permission' // permission control
import {post,get} from './http'
Vue.config.productionTip = false
global.$_post=post;
global.$_get=get;

Vue.use(MintUI);
new Vue({
  router,
  store,
  render: h => h(App),
  watch: {
      $route(to, from) {
          Indicator.close();
          console.log(333)
      }
  }
}).$mount('#app')
