<template>
  <div id="App" class="container">
    <div v-if="mask" @click="hideMask()" class="mask"></div>
    <loading v-if="loading"/>
    <top-nav :title="title" :buttonRight="rightButton" v-if="showTop"/>
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
    },
    title(){
      return this.$store.getters.getTitle;
    },
    rightButton(){
      return this.$store.getters.getRightMenu
    },
    mask(){
      return this.$store.getters.showMask
    }
  },
  watch:{
    mask:function(val){
        document.body.style.overflow = val?'hidden':'auto'
    }
  },
  methods:{
    hideMask(){
      this.$store.dispatch('showMask',false)
    }
  },
  created(){
    this.$store.dispatch('fetchAreaType')
    this.$store.dispatch('fetchSchoolType')
  }
}
</script>

<style>
   body{
     background:#eee;
   }
</style>
