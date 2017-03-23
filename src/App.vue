<template>
  <div id="App" class="container">
    <loading v-show="loading"></loading>
    <top-nav v-show="showTop"></top-nav>
    <router-view></router-view>
  </div>
</template>

<script>
require('./assets/style.css')
import {TopNav,loading} from './components'
export default {
  name: 'app',
  components:{
    loading,
    TopNav
  },
  computed:{
    loading(){
      return this.$store.getters.loading;
    },
    showTop(){
      return this.$store.getters.showTop;
    }
  }
}
</script>

<style>
   body{
     background:#eee;
   }
</style>
