<template>
  <div class="page js_show">
    <div v-if="showCondition"
         class="condition off-canvas">
      <div class="section-title"><i class="fa fa-bank"></i> 类型</div>
      <div class="block">
        <span :class="{actived:type===''}" @click="chooseType()" class="label width65">全部</span><span class="label width65"
              key="index"
              @click="chooseType(index)"
              :class="{actived:type===index}"
              v-for="(item,index) in schoolType">{{item}}</span>
      </div>
      <div class="section-title"><i class="fa fa-map-marker"
           aria-hidden="true"></i> 区域</div>
      <div class="block">
        <span :class="{actived:area===''}" @click="chooseArea()" class="label width65">全部</span><span class="label width65"
              key="index"
              @click="chooseArea(index)"
              :class="{actived:area===index}"
              v-for="(item,index) in areaType">{{item}}</span>
      </div>
    </div>
    <div v-if="mask" @click="hideMask()" class="sure">
        <i class="fa fa-check"></i>
        确认
    </div>
    <div class="content native-scroll">
      <div class="note-list">
        <ul class="findschool">
          <li :key="school.id"
              v-for="school in schools">
            <router-link :to="{name:'Detail',params: { id: school.id }}">
              <img v-lazy="`http://www.023xiaoyuan.com/${school.school_info.logo_img}`">
              <h4>{{school.school_name}}</h4>
              <p class="infor">
                <span class="infor-card">
                    <i class="fa fa-phone"></i> {{school.school_info.school_phone||'暂无联系电话'}}
                    </span>
                <span class="infor-card">
                      <i class="fa fa-map-marker"></i>
                      {{school.school_info.school_addr || '暂无地址'}}
                    </span>
                <span class="infor-card">
                      <i class="fa fa-home"></i>
                      {{school.school_link || '暂无官方网站'}}
                    </span>
              </p>
            </router-link>
          </li>
        </ul>
        <div v-if="schools && schools.length>0" class="pagenation">
          <span v-if="totalPage>page" @click="nextPage()">
              <i class="fa fa-hand-o-down" aria-hidden="true"></i> 
              点击加载更多
          </span>
          <span v-else>
              <i class="fa fa-hand-o-up" aria-hidden="true"></i>
              没有更多了
          </span>
        </div>
        <div class="empty-page" v-else>
            <i class="fa fa-times-circle" aria-hidden="true"></i>
            <br>
            没有找到该类型的学校哦
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'School',
  data() {
    return {
      showCondition: false,
      area:'',
      type:'',
      page:1
    }
  },
  computed: {
    schools() {
      return this.$store.getters.getSchools
    },
    schoolType() {
      return this.$store.getters.getSchoolType
    },
    areaType() {
      return this.$store.getters.getAreaType
    },
    totalPage(){
      return this.$store.getters.getPageNub
    },
    mask() {
      return this.$store.getters.showMask
    }
  },
  methods: {
    getSchools(area="",type="",page=1) {
      this.$store.dispatch('fetchSchoolList', { area:area, type: type,page:page})
    },
    chooseArea(choosedArea=""){
      this.area = choosedArea;
      this.getSchools(this.area,this.type,0)
    },
    chooseType(choosedType=""){
      this.type = choosedType
      this.getSchools(this.area,this.type,0)
    },
    nextPage(){
      this.page <=this.totalPage?this.page++:this.page;
      this.getSchools(this.area,this.type,this.page)
    },
    hideMask(){
      this.$store.dispatch('showMask', false)
    }
  },
  watch: {
    'mask': function (n,o) {
      if(o === true && n === false){
          this.showCondition = false
      }
    }
  },
  beforeMount() {
    this.getSchools()
  },
  mounted() {
    this.$store.dispatch('setTopShow', true)
    this.$store.dispatch('setTitle', '美丽校园')
    this.$store.dispatch('rightMenu', {
      show:true,
      text: '检索',
      icon: 'fa-bars',
      action: () => {
        this.showCondition = true
        this.$store.dispatch('showMask', true)
      }
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
