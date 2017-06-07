import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      component: require('@/pages/Index/Index.vue'),
      children: [
        {
          path: '/',
          component: require('@/pages/Index/hot/Index.vue')
        },
        {
          path: '/sort',
          component: require('@/pages/Index/sort/Index.vue')
        },
        {
          path: '/fine',
          component: require('@/pages/Index/fine/Index.vue')
        },
        {
          path: '/live',
          component: require('@/pages/Index/live/Index.vue')
        },
        {
          path: '/broadcast',
          component: require('@/pages/Index/broadcast/Index.vue')
        }
      ]
    },
    {
      path: '/search',
      component: require('@/pages/Search/Index.vue')
    },
    {
      path: '/information',
      component: require('@/pages/Information/Index.vue')
    }
  ]
})
