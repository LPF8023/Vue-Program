/*路由器模块*/

import Vue from 'vue'
import Router from 'vue-router'

import Home from '../pages/Home/Home'
import Shiwu from '../pages/Shiwu/Shiwu'
import Types from '../pages/Types/Types'
import Cart from '../pages/Cart/Cart'
import Personal from '../pages/Personal/Personal'
import Login from '../pages/Login/Login'
import Interlayer from '../pages/Interlayer/Interlayer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      component: Login,
      meta: {
        isInterlayer: false
      }
    },
    {
      path: '/interlayer',
      component: Interlayer,
      meta: {
        isInterlayer: false
      }
    },
    {
      path: '/home',
      component: Home,
      meta: {
        isInterlayer: true
      }
    },
    {
      path: '/shiwu',
      component: Shiwu,
      meta: {
        isInterlayer: true
      }
    },
    {
      path: '/types',
      component: Types,
      meta: {
        isInterlayer: true
      }
    },
    {
      path: '/cart',
      component: Cart,
      meta: {
        isInterlayer: true
      }
    },
    {
      path: '/personal',
      component: Personal,
    },
    {
      path: '/',
      redirect: '/home'
    }
  ]
})
