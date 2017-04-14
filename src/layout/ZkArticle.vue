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
export default {
  name: 'zkarticle',
  computed: {
    article() {
      return this.$store.getters.getNews
    }
  },
  created() {
    const id = this.$route.params.id
    this.$store.dispatch('fetchZkInfo', id)

  },
  beforeMount() {
    this.$store.dispatch('setTopShow', true)
    this.$store.dispatch('rightMenu', {
      text: '分享',
      icon: 'fa-share',
      action: () => {
        alert('分享')
      }
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
