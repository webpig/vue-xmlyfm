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
          name: '首页',
          component: require('@/pages/Home/main.vue'),
          children: [
            {
              path: '/main/hot',
              name: '热门',
              component: require('@/pages/Index/hot.vue')
            },
            {
              path: '/main/sort',
              name: '分类',
              component: require('@/pages/Index/sort.vue')
            },
            {
              path: '/main/fine',
              name: '精品',
              component: require('@/pages/Index/fine.vue')
            },
            {
              path: '/main/live',
              name: '直播',
              component: require('@/pages/Index/live.vue')
            },
            {
              path: '/main/broadcast',
              name: '广播',
              component: require('@/pages/Index/broadcast.vue')
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
    }
  ]
})
