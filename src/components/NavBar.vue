<template lang="html">
  <div class="nav">
    <ul>
      <li v-for="item in navbars" :key="item.id" >
        <router-link :to="item.linkTo">
          {{item.name}}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      navbars: this.$store.getters.navbars
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/style/Index/nav.scss'
</style>
