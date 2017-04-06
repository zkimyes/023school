<template>
  <div class="page js_show">
    <div class="content native-scroll">
      <div class="note-list">
        <div class="top-title">{{school.school_name}}</div>
        <section v-html="school.school_info?school.school_info.explain:null">
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import {HomeMenu} from '../components'
import _ from 'underscore'
export default {
  name: 'home',
  components: {
    HomeMenu
  },
  computed:{
    school(){
      let school = this.$store.getters.getSchool
     return school
    }
  },
  watch: {
    // 如果路由有变化，会再次执行该方法
    '$route': 'fetchSchool'
  },
  methods:{
    fetchSchool(){
      const id = this.$route.params.id;
      this.$store.dispatch('setTopShow',true);
      this.$store.dispatch('setLoading',false);
      this.$store.dispatch('fetchSchool',id);
    }
  },
  created(){
    this.fetchSchool()
  }
}
</script>

<style>
.swiper-container {
  height: 200px;
  background: #ff9900;
}
</style>
