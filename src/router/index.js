import Vue from 'vue'
import Router from 'vue-router'
import shoppingMall from '@/components/pages/shoppingMall' 
import Register from '@/components/pages/register'
import Login from '@/components/pages/login'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'shoppingMall',
      component: shoppingMall
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
