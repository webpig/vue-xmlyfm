<template lang="html">
  <div class="">
    <my-header></my-header>
    <router-view></router-view>
    <my-footer></my-footer>
    <my-toTop></my-toTop>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ToTop from '@/components/ToTop'

export default {
  components: {
    'my-header': Header,
    'my-footer': Footer,
    'my-toTop': ToTop
  }
}
</script>

<style lang="scss">
</style>
