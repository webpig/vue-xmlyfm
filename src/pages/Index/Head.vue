<template lang="html">
  <div class="head">
    <div class="header">
      <router-link to='/information'>
        <i class="fa fa-envelope-o information"></i>
      </router-link>
      <div class="input">
        <router-link to="/search">
          <input type="text" placeholder="每天一本书">
          <i class="fa fa-search icon-search"></i>
        </router-link>
      </div>
      <i class="fa fa-clock-o playHistory"></i>
      <i class="fa fa-download download"></i>
    </div>
    <div class="nav">
      <ul>
        <router-link  v-for="(nav, index) in navs" key="item" :to="nav.link">
          <li @click="changeActive(nav, index)" :class="{active: nav.isActive}">
            {{nav.name}}
          </li>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      navs: [
        {
          name: '热门',
          link: '/',
          isActive: true
        },
        {
          name: '分类',
          link: '/sort',
          isActive: false
        },
        {
          name: '精品',
          link: '/fine',
          isActive: false
        },
        {
          name: '直播',
          link: '/live',
          isActive: false
        },
        {
          name: '广播',
          link: '/broadcast',
          isActive: false
        }
      ]
    }
  },
  methods: {
    changeActive (item, index) {
      for (let i = 0; i < this.navs.length; i++) {
        this.navs[i].isActive = false
      }
      this.navs[index].isActive = true
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/style/Index/head.scss'
</style>
