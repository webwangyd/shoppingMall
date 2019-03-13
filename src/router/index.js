import Vue from 'vue'
import Router from 'vue-router'
import shoppingMall from '@/components/pages/shoppingMall' 
import Register from '@/components/pages/register'
import Login from '@/components/pages/login'
import Goods from '@/components/pages/goods'
import Category from '@/components/pages/category'
import Cart from '@/components/pages/Cart'
import Main from '@/components/pages/Main'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/main',
      name: 'main',
      component: Main,
      children:[
        {
          path: '/',
          name: 'shoppingMall',
          component: shoppingMall
        },
        {
          path: '/category',
          name: 'category',
          component: Category
        },
        {
          path: '/cart',
          name: 'cart',
          component: Cart
        }
      ]
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
    },
    {
      path: '/goods',
      name: 'goods',
      component: Goods
    }
  ]
})
