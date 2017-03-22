<template>
  <div id="App" class="container">
    <router-view></router-view>
  </div>
</template>

<script>
require('./assets/style.css')
export default {
  name: 'app',
  components:{
  }
}
</script>

<style>
   body{
     background:#eee;
   }
</style>
