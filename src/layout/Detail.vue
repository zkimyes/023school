<template>
  <div class="page js_show">
    <div class="content native-scroll">
      <div class="note-list">
        <section v-html="school.school_info?school.school_info.explain:null">
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import { HomeMenu } from '../components'
import _ from 'underscore'
export default {
  name: 'home',
  components: {
    HomeMenu
  },
  computed: {
    school() {
      let school = this.$store.getters.getSchool
      return school
    }
  },
  watch: {
    // 如果路由有变化，会再次执行该方法
    '$route': 'fetchSchool'
  },
  methods: {
    fetchSchool() {
      const id = this.$route.params.id;
      this.$store.dispatch('fetchSchool', id);
    }
  },
  created() {
    this.fetchSchool()
    this.$store.dispatch('setTopShow', true);
    this.$store.dispatch('rightMenu', {
       show:false
    })
  },
  beforeUpdate(){
    this.$store.dispatch('setTitle', this.school.school_name)
  },
  mounted() {
    this.$store.dispatch('setLoading', false);
  }
}
</script>

<style>
.swiper-container {
  height: 200px;
  background: #ff9900;
}
</style>
