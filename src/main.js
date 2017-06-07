// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from '@/library/vuex'
// 模块化分离 有利于main.js 精简
// 减少流程，只给模块入口
import mint from '@/library/mint'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  mint,
  store,
  template: '<App/>',
  components: { App }
})
