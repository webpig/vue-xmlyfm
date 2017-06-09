<template lang="html">
  <div class="main">
    <my-navbar></my-navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from '@/components/Navbar'
export default {
  components: {
    'my-navbar': NavBar
  }
}
</script>

<style lang="css">
</style>
