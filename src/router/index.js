import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/layout/Home'
import News from '@/layout/News'
import Warn from '@/layout/Warn'
import ZkInfo from '@/layout/ZkInfo'
import EpmtyPage from '@/components/EpmtyPage'
import Article from '@/layout/Article'
import ZkArticle from '@/layout/ZkArticle'
import School from '@/layout/School'
import Detail from '@/layout/Detail'
Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/news',
            name: 'News',
            component:News
        },
        {
            path: '/warning',
            name: 'Warn',
            component:Warn
        },
        {
            path: '/zkinfo',
            name: 'ZkInfo',
            component:ZkInfo
        },
        {
            path: '/zkdetail/:id',
            name: 'ZkArticle',
            component:ZkArticle
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
            component: Detail,
            beforeEnter(to,from,next){
                if(!to.params.id || typeof to.params.id != 'number'){
                    next(false)
                }
                next()
            }
        },
        {
            path:'/error',
            name:'404',
            components:EpmtyPage
        },
        {
            path:'*',
            name:'404',
            component:EpmtyPage
        }
    ]
})