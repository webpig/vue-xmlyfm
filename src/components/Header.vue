<template lang="html">
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
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
@import '../assets/style/Index/head.scss'
</style>
