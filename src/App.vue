<template>
  <div id="app">
    <router-view></router-view>
    <my-footer></my-footer>
  </div>
</template>

<script>
import Footer from './components/Footer'
export default {
  name: 'app',
  components: {
    'my-footer': Footer
  }
}
</script>

<style lang="scss">
@import '../node_modules/font-awesome/css/font-awesome.min.css';
@import './assets/style/reset.scss';
</style>
