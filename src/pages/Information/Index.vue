<template lang="html">
  <div class="information">
    <div class="header">
      <router-link to="/"> 
        <i class="fa fa-angle-left back"></i>
      </router-link>
      <p>消息中心</p>
      <i class="fa fa-edit edit"></i>
      <i class="fa fa-gear set"></i>
    </div>
    <ul class="list">
      <li>
        <i class="fa fa-commenting-o"></i>
        <span>评论</span>
        <i class="fa fa-angle-right"></i>
      </li>
      <li>
        <i class="fa fa-music"></i>
        <span>听友圈通知</span>
        <i class="fa fa-angle-right"></i>
      </li>
      <li>
        <i class="fa fa-question-circle-o"></i>
        <span>问答</span>
        <i class="fa fa-angle-right"></i>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
@import '../../assets/style/Information/index.scss';
</style>
