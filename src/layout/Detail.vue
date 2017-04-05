<template>
  <div class="page js_show">
    <div class="content native-scroll">
      <div class="note-list">
        <div class="top-title">{{school.school_name}}</div>
        <section v-html="school.school_info.explain">
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
      let schools = this.$store.getters.getSchool
         schools['school_info']['explain'] = _.unescape(schools['school_info']['explain'])
     return schools
    }
  },
  mounted(){
    const id = this.$route.params.id;
    this.$store.dispatch('setTopShow',true);
    this.$store.dispatch('setLoading',false);
    this.$store.commit('setSchool',id);
  }
}
</script>

<style>
.swiper-container {
  height: 200px;
  background: #ff9900;
}
</style>
