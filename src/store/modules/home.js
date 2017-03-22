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
        schools:[

        ],
        news:[],
        article:{
            id:'',
            title:'',
            content:''
        }
    },
    mutations: {
        fetchSchool(state,schools){
            state.schools = [
                ...state.schools,
                ...schools
            ]
        },
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
        fetchSchoolByService({commit}){
            commit('fetchSchool',[])
        },
        fetchNewsList({commit}){
            service.fetchHotNews().then(
                data=>{
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