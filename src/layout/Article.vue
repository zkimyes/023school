<template>
  <div class="page js_show">
    <div class="content">
      <article class="weui-article">
        <h1 v-text="article.title"></h1>
        <div class="article-info">
          <span><router-link to="{name:'detail'}">{{article.school}}</router-link></span>
          <span>发布于：{{article.create_time|fromNow}}</span>
        </div>
        <section v-html="article.content">
        </section>
      </article>
    </div>
  </div>
</template>

<script>
import share from '../components/share'
export default {
  name: 'home',
  components:{
    share
  },
  data(){
    return {
      share:false
    }
  },
  computed: {
    article() {
      return this.$store.getters.getNews
    }
  },
  created() {
    const id = this.$route.params.id
    this.$store.dispatch('fetchNewsById', id)
  },
  beforeMount() {
    let _this =this
    this.$store.dispatch('setTopShow', true)
    this.$store.dispatch('rightMenu', {
      show:false,
    })
  },
  beforeUpdate(){
    this.$store.dispatch('setTitle', this.$store.getters.getNews.title)
  }
}
</script>

<style>
.swiper-container {
  height: 200px;
  background: #ff9900;
}
</style>
