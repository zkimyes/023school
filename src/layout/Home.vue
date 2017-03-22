<template>
  <div class="page js_show">
    <logo></logo>
    <form class="weui-search-bar__form">
      <div class="weui-search-bar__box">
        <i class="weui-icon-search"></i>
        <input type="search"
               class="weui-search-bar__input"
               id="searchInput"
               placeholder="搜索"
               required="">
        <a href="javascript:"
           class="weui-icon-clear"
           id="searchClear"></a>
      </div>
      <label class="weui-search-bar__label"
             id="searchText">
        <i class="weui-icon-search"></i>
        <span>搜索学校</span>
      </label>
    </form>
    <div class="content native-scroll">
      <home-menu></home-menu>
  
      <div class="note-list">
        <div class="top-title">最新校园动态</div>
        <ul>
          <li v-for="item in news" class="have-img">
            <link to="{ name: 'news', params: { id: item.id }}"
               class="wrap-img"><img :src='"http://www.023xiaoyuan.com/"+item.tumb'></link>
            <div class="content">
              <link to="{ name: 'news', params: { id: item.id }}">
                <div class="author">
                  <div class="name"><a>
                  {{item.schoolname}}
                </a></div> <span class="time">{{item.create_time}}</span></div>
                <div class="title">{{item.title}}</div>
                <div class="meta"><i class="iconfont ic-list-read"></i> <span>2029</span> <i class="iconfont ic-list-comments"></i> <span>45</span> <i class="iconfont ic-list-like"></i> <span>169</span> <i class="iconfont ic-list-money"></i> <span>2</span></div>
              </link>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperItem, HomeMenu, logo } from '../components'
import {Link} from 'vue-router'
export default {
  name: 'home',
  components: {
    Swiper, SwiperItem, HomeMenu, logo,Link
  },
  computed:{
    news(){
      return this.$store.getters.getNewsList
    }
  },
  mounted(){
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
