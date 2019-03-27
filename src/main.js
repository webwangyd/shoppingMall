// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {Tabbar,TabbarItem,PullRefresh,Stepper,Tab,Tabs,Button,Row,Col,Swipe, SwipeItem,Lazyload,List,Field,NavBar} from 'vant'
Vue.use(Tabbar).use(TabbarItem).use(PullRefresh).use(Stepper).use(Tab).use(Tabs).use(Field).use(NavBar).use(Button).use(Row).use(Col).use(Swipe).use(SwipeItem).use(Lazyload).use(List)
// import Vant from 'vant'
// import 'vant/lib/index.css'
// Vue.use(Vant)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
