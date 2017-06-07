import Vue from 'vue'
import Vuex from 'vuex'
// 将Vuex 注入Vue,所有的组件都可以
// this.$store 找到vuex Store
Vue.use(Vuex)
// 返回唯一的一个Store实例 状态仓库
const store = new Vuex.Store({
  // 状态
  state: {
  }
})
export default store
