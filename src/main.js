// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueLazyload from 'vue-lazyload'
import router from './router'
import store from './store'
import moment from 'moment'
import _ from 'lodash'
moment.locale('zh-cn');

Vue.use(VueLazyload)

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: '/dist/img-loading.png',
  loading: 'assets/img-loading.png',
  listenEvents: [ 'scroll' ],
  attempt: 3
})

Vue.config.productionTip = false
Vue.filter('fromNow',(date)=>{
  return moment(date).fromNow()
})
Vue.filter('unescape', string => {
    return _.unescape(string)
})

//百度统计跟踪
router.beforeEach((to, from, next) => {
  _hmt.push(['_trackPageview', '/wap/#'+to.path]);
  next()
})

router.afterEach(route => {
  document.body.scrollTop = 0;
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
  watch:{
    '$route': 'showloading'
  },
  methods:{
    showloading(){
      this.$store.dispatch('setLoading',true);
    }
  }
})
