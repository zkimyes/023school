import service from '../../service'
export default {
    state: {
        menu:[
            {
                name:'',
                url:''
            },
            {
                name:'',
                url:''
            }
        ],
        news:[],
        article:{
            id:'',
            title:'',
            content:''
        }
    },
    mutations: {
        fetchHotNews(state,news){
            state.news = [
                ...state.news,
                ...news
            ]
        },
        readNews(state,news){
            state.article = news;
        }
    },
    actions: {
        fetchNewsList({commit}){
            service.fetchHotNews().then(
                data=>{
                    commit('setLoading',false);
                    commit('fetchHotNews',data)
                },
                error=>{
                    commit('fetchHotNews',[])
                }
            )
        },
        fetchNewsById({commit},id){
            service.fetchNewsById(id).then(
                data=>{
                    commit('setLoading',false);
                    commit('readNews',data)
                },
                error=>{
                    commit('readNews',[])
                }
            )
        }
    },
    getters: {
        getNewsList:state=>{
            return state.news
        },
        getNews:state=>{
            return state.article
        }
    }
}