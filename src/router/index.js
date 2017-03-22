import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/layout/Home'
// import News from '@/layout/News'
import Article from '@/layout/Article'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path:'/news',
      name:'News',
      //component:News
    },
    {
      path:'/news/:id',
      name:'News',
      component:Article
    }
  ]
})
