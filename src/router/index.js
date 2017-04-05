import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/layout/Home'
// import News from '@/layout/News'
import Article from '@/layout/Article'
import School from '@/layout/School'
import Detail from '@/layout/Detail'
Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/news',
            name: 'News',
            //component:News
        },
        {
            path: '/news/:id',
            name: 'Article',
            component: Article
        },
        {
            path: '/school',
            name: 'School',
            component: School
        },
        {
            path: '/school/:id',
            name: 'Detail',
            component: Detail
        }
    ]
})