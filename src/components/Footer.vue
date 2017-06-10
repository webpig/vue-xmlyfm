<template lang="html">
  <div class="app-footer">
    <div class="item" v-for="item in tabbars" :key="item.id">
      <router-link :to="item.linkTo">
        <i :class="item.className"></i>
        <p>{{item.name}}</p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tabbars: this.$store.getters.tabbars
    }
  }
}
</script>

<style lang="scss">
@import '../assets/style/footer.scss'
</style>
