<template lang="html">
  <div class="">
    <my-head></my-head>
    <router-view></router-view>
  </div>
</template>

<script>
import Head from './Head'
export default {
  components: {
    'my-head': Head
  }
}
</script>

<style lang="scss">
</style>
