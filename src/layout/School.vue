<template>
  <div class="page js_show">
    <div class="content native-scroll">
      <div class="note-list">
        <div class="top-title">重庆校园</div>
        <ul class="findschool">
          <li :key="school.id" v-for="school in schools">
            <a href="//m.autohome.com.cn/4259/#pvareaid=101353">
            <img :src='"http://www.023xiaoyuan.com"+school.school_info.logo_img'>
              <h4>{{school.school_name}}</h4>
              <p class="infor"></p> <i class="iconfont icon-arrow-right"></i></a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'school',
  computed: {
    schools() {
      return this.$store.getters.getSchools
    }
  },
  mounted() {
    this.$store.dispatch('setTopShow',true);
    this.$store.dispatch('fetchSchoolList',{area:'',type:''});
  }
}
</script>

<style>
.swiper-container {
  height: 200px;
  background: #ff9900;
}
</style>
