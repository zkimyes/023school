<template>
  <div id="App" class="container">
    <loading v-if="loading"/>
    <top-nav v-if="showTop"/>
    <router-view></router-view>
    <backTop/>
  </div>
</template>

<script>
require('./assets/style.css')
import {TopNav,loading,backTop} from './components'
export default {
  name: 'app',
  components:{
    loading,
    TopNav,
    backTop
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
