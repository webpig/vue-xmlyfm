<template lang="html">
  <div class="sort">
    <div class="sort-section" v-for="item in 5" key="item">
      <div class="sort-item" v-for="item in items" key="item">
        <i class="fa fa-book"></i>
        <span>{{item}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: ['付费精品', '有声书', '音乐', '娱乐', '相声评书', '儿童']
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/style/Index/sort/sort.scss';
</style>
