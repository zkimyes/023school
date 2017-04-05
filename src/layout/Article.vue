<template>
  <div class="page js_show">
    <div class="content">
       <article class="weui-article">
            <h1 v-text="article.title"></h1>
            <div class="article-info">
                <span><router-link to="{name:'detail'}">{{article.school}}</router-link></span>
                <span>发布时间：{{article.create_time|fromNow}}</span>
            </div>
            <section v-html="article.content">
            </section>
        </article>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  computed:{
    article(){
      return this.$store.getters.getNews
    }
  },
  beforeMount(){
    const id = this.$route.params.id;
    this.$store.dispatch('fetchNewsById',id);
    this.$store.dispatch('setTopShow',true);
  }
}
</script>

<style>
.swiper-container {
  height: 200px;
  background: #ff9900;
}
</style>
