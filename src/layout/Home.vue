<template>
  <div class="page js_show">
    <logo></logo>
    <div class="content native-scroll">
      <home-menu></home-menu>
  
      <div class="note-list">
        <div class="top-title">最新校园动态</div>
        <ul>
          <li v-for="item in news" class="have-img">
            <router-link :to="{ name: 'Article', params: { id: item.id }}"
               class="wrap-img"><img :src='"http://www.023xiaoyuan.com/"+item.tumb'></router-link>
            <div class="content">
              <router-link :to="{ name: 'Article', params: { id: item.id }}">
                <div class="author">
                  <div class="name">
                  {{item.schoolname}}
                  </div> <span class="time">{{item.create_time}}</span></div>
                <div class="title">{{item.title}}</div>
                <div class="meta"><i class="iconfont ic-list-read"></i> <span>2029</span> <i class="iconfont ic-list-comments"></i> <span>45</span> <i class="iconfont ic-list-like"></i> <span>169</span> <i class="iconfont ic-list-money"></i> <span>2</span></div>
              </router-link>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperItem, HomeMenu, logo } from '../components'
export default {
  name: 'home',
  components: {
    Swiper, SwiperItem, HomeMenu, logo
  },
  computed:{
    news(){
      return this.$store.getters.getNewsList
    }
  },
  mounted(){
    this.$store.dispatch('setTopShow',false);
    this.$store.dispatch('fetchNewsList');
  }
}
</script>

<style>
.swiper-container {
  height: 200px;
  background: #ff9900;
}
</style>
