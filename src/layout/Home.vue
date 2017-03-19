<template>
  <div class="page page-current">
    <header class="bar bar-nav">
    </header>
    <nav class="bar bar-tab">
      <a class="tab-item active"
         href="#">
        <span class="icon icon-home"></span>
        <span class="tab-label">校园动态</span>
      </a>
      <a class="tab-item"
         href="#">
        <span class="icon icon-me"></span>
        <span class="tab-label">美丽校园</span>
      </a>
      <a class="tab-item"
         href="#">
        <span class="icon icon-star"></span>
        <span class="tab-label">收藏</span>
      </a>
      <a class="tab-item"
         href="#">
        <span class="icon icon-settings"></span>
        <span class="tab-label">设置</span>
      </a>
    </nav>
    <div class="content native-scroll">
      <swiper>
        <swiper-item>asdasd</swiper-item>
        <swiper-item>asdasd</swiper-item>
        <swiper-item>asdasd</swiper-item>
      </swiper>
      <div class="content-block-title">曲目列表</div>
      <div class="list-block media-list">
        <ul>
          
          <li>
            <a href="#" class="item-link item-content">
              <div class="item-media"><img src="http://gqianniu.alicdn.com/bao/uploaded/i4//tfscom/i3/TB10LfcHFXXXXXKXpXXXXXXXXXX_!!0-item_pic.jpg_250x250q60.jpg" width="80"></div>
              <div class="item-inner">
                <div class="item-title-row">
                  <div class="item-title">标题</div>
                  <div class="item-after">$15</div>
                </div>
                <div class="item-subtitle">标题</div>
                <div class="item-text">此处是文本内容...</div>
              </div>
            </a>
          </li>

        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import {Swiper,SwiperItem} from '../components'
export default {
  name: 'home',
  components: {
    Swiper,SwiperItem
  },
  methods: {
  }

}
</script>

<style>
  .swiper-container{
    height: 200px;
    background: #ff9900;
  }
</style>
