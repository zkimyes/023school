// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import moment from 'moment'
import _ from 'underscore'
moment.locale('zh-cn');
Vue.config.productionTip = false
Vue.filter('fromNow',(date)=>{
  return moment(date).fromNow()
})
Vue.filter('unescape', string => {
    return _.unescape(string)
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
