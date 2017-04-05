<template>
  <div class="page js_show">
    <div class="content native-scroll">
     <div class="Section-title">校园动态</div>
      <div class="note-list">
        <ul class="findschool">
          <li :key="school.id" v-for="school in schools">
            <router-link :to="{name:'Detail',params: { id: school.id }}">
            <img :src='"http://www.023xiaoyuan.com"+school.school_info.logo_img'>
              <h4>{{school.school_name}}</h4>
              <p class="infor">
                <span class="infor-card">
                 <i class="fa fa-phone"></i> {{school.school_info.school_phone||'暂无联系电话'}}
                </span>
                <span class="infor-card">
                  <i class="fa fa-map-marker"></i>
                  {{school.school_info.school_addr || '暂无地址'}}
                </span>
                <span class="infor-card">
                  <i class="fa fa-home"></i>
                  {{school.school_link || '暂无官方网站'}}
                </span>
              </p>
              </router-link>
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
