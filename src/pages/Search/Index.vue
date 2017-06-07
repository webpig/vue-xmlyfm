<template lang="html">
  <div class="search-page">
    <div class="header">
      <router-link to="/">
        <div class="back">
          <i class="fa fa-angle-left"></i>
        </div>
      </router-link>
      <input type="text" placeholder="每天一本书">
      <div class="search-btn">
        搜索
      </div>
    </div>
    <div class="search-result">
      <ul>
        <li class="search-section" >
          <span class="caaa">大家都在搜的</span>
          <span class="change">换一批</span>
          <ul>
            <li class="suggest-item "v-for="(section, index) in sections" key="section" :class="{cf86442: index<=2}">
              <span>{{section}}</span>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      sections: ['喜马拉雅巅峰会员', '陈志武', '声音报告', '马未都', '凯书讲故事', '摸金天师', '“大力”史', '陈默', '麻衣神算']
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/style/Search/index.scss'
</style>
