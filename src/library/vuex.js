import Vue from 'vue'
import Vuex from 'vuex'
import navbar from './modules/navbar'
import tabbar from './modules/tabbar'
// 将Vuex 注入Vue,所有的组件都可以
// this.$store 找到vuex Store
Vue.use(Vuex)
// 返回唯一的一个Store实例 状态仓库
const store = new Vuex.Store({
  modules: {
    navbar,
    tabbar
  }
})
export default store
