<template lang="html">
  <div class="app-footer">
    <div class="item">
      <router-link to="/">
        <i class="fa fa-globe"></i>
        <p>首页</p>
      </router-link>
    </div>
    <div class="item">
      <router-link to="/subscribe">
        <i class="fa fa-star-o"></i>
        <p>订阅</p>
      </router-link>
    </div>
    <div class="item">
      <i class="fa fa-globe"></i>
    </div>
    <div class="item">
      <router-link to="/find">
        <i class="fa fa-search"></i>
        <p>发现</p>
      </router-link>
    </div>
    <div class="item">
      <router-link to="/my">
        <i class="fa fa-user-o"></i>
        <p>我的</p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
@import '../assets/style/footer.scss'
</style>
