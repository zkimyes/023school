<template>
  <div class="page js_show">
    <div v-if="showTopNav" class="homeNav">
        <span><router-link to=''>首页</router-link></span>
        <span><router-link to='school'>美丽校园</router-link></span>
        <span><router-link to='news'>校园动态</router-link></span>
        <span><router-link to='warning'>校园警钟</router-link></span>
        <span><router-link to='zkinfo'>招考信息</router-link></span>
        <span>父母必读</span>
    </div>
    <logo></logo>
    <div class="content native-scroll" style="padding-top:0px;">
      <home-menu></home-menu>
      <div class="note-list">
        <div class="Section-title">校园动态</div>
        <ul>
          <li v-for="item in news" class="have-img">
            <router-link :to="{ name: 'Article', params: { id: item.id }}"
               class="wrap-img"><img v-lazy="`http://www.023xiaoyuan.com/${item.tumb}`"></router-link>
            <div class="content">
              <router-link :to="{ name: 'Article', params: { id: item.id }}">
                <div class="author">
                  <div class="name">
                  {{item.school_name||'重庆校园'}}
                  </div> <span class="time">{{item.create_time|fromNow}}</span></div>
                <div class="title">{{item.title}}</div>
              </router-link>
            </div>
          </li>
        </ul>
        <div class="pagenation">
            <router-link :to='{name:"News"}'><span><i class="fa fa-chevron-circle-right" aria-hidden="true"></i> 查看更多动态</span></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { HomeMenu, logo } from '../components'
import _ from 'lodash'
export default {
  name: 'home',
  components: {
   HomeMenu, logo
  },
  data(){
    return {
      showTopNav:false
    }
  },
  computed:{
    news(){
      return this.$store.getters.getNewsListLimit
    }
  },
  methods:{
    showNav(isShow){
        this.showTopNav = isShow;
    }
  },
  mounted(){
    let _this = this
    this.$store.dispatch('setTopShow',false)
    this.$store.dispatch('fetchNewsList',{})
    document.addEventListener('scroll',_.throttle(function bodyScroll(e){
        let _top = document.body.scrollTop;
         if(_top>389){
            _this.showNav(true)
         }else{
           _this.showNav(false)
         }
    },500))
  }
}
</script>

<style>
.swiper-container {
  height: 200px;
  background: #ff9900;
}
</style>
