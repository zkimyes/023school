<template>
  <div class="page js_show">
    <div class="content">
        <div class="empty-page">
          <i class="fa fa-question-circle-o" aria-hidden="true"></i>
          <h2>貌似找不到这个页面</h2>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EpmtyPage',
  components:{
  },
  beforeMount() {
    let _this =this
    this.$store.dispatch('setLoading',false)
    this.$store.dispatch('setTitle', '找不到页面')
    this.$store.dispatch('setTopShow', true)
    this.$store.dispatch('rightMenu', {
      show:false,
    })
  }
}
</script>

<style>
.swiper-container {
  height: 200px;
  background: #ff9900;
}
</style>
