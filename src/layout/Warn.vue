<template>
  <div class="page js_show">
    <div class="content native-scroll">
       <div class="note-list">
          <ul>
            <li v-for="item in news">
              <div class="content">
                <router-link :to="{ name: 'Article', params: { id: item.id }}">
                  <div class="title">{{item.title}}</div>
                </router-link>
              </div>
            </li>
          </ul>
         <div v-if="news" class="pagenation">
            <span v-if="totalPage>page" @click="nextPage()">
                <i class="fa fa-hand-o-down" aria-hidden="true"></i> 
                点击加载更多
            </span>
            <span v-else>
                <i class="fa fa-hand-o-up" aria-hidden="true"></i>
                没有更多了
            </span>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'warn',
  data(){
    return {
      page:1,
      type:12403
    }
  },
  computed: {
    news(){
      return this.$store.getters.getNewsList
    },
    totalPage(){
      return this.$store.getters.getNewsTotalPage
    }
  },
  methods:{
    getNewsList(area="",type="",page=1) {
      this.$store.dispatch('fetchNewsList',{area:'',type,page})
    },
    nextPage(){
      this.page <=this.totalPage?this.page++:this.page;
      this.getNewsList('',this.type,this.page)
    }
  },
  beforeMount() {
    this.getNewsList('',this.type,this.page)
  },
  mounted() {
    this.$store.dispatch('setTopShow', true)
    this.$store.dispatch('setTitle', '校园警钟')
    this.$store.dispatch('rightMenu', {
      show:false
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
