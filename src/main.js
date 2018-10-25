/* 入口JS */

import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import './mock/mockServer'

import VueLazyload from 'vue-lazyload'
import loading from './common/imgs/loading.gif'

Vue.use(VueLazyload, {
  loading
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  store,
  router,
})
