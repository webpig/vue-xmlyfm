import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: require('@/pages/index.vue'),
      redirect: '/main/hot',
      children: [
        {
          path: '/main',
          component: require('@/pages/Home/main.vue'),
          children: [
            {
              path: '/main/hot',
              name: '热门',
              component: require('@/pages/Main/hot.vue')
            },
            {
              path: '/main/sort',
              name: '分类',
              component: require('@/pages/Main/sort.vue')
            },
            {
              path: '/main/fine',
              name: '精品',
              component: require('@/pages/Main/fine.vue')
            },
            {
              path: '/main/live',
              name: '直播',
              component: require('@/pages/Main/live.vue')
            },
            {
              path: '/main/broadcast',
              name: '广播',
              component: require('@/pages/Main/broadcast.vue')
            }
          ]
        },
        {
          path: '/subscribe',
          name: '订阅',
          component: require('@/pages/Home/subscribe.vue')
        },
        {
          path: '/find',
          name: '发现',
          component: require('@/pages/Home/find.vue')
        },
        {
          path: '/my',
          name: '我的',
          component: require('@/pages/Home/my.vue')
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
    },
    {
      path: '/fm',
      component: require('@/pages/FMDetails/Index.vue')
    }
  ]
})
