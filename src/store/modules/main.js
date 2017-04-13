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
        zkxx:[],
        zkxxTotalPage:0,
        newsTotalPage:0,
        article:{
            id:'',
            title:'',
            content:''
        },
        schoolType:[],
        areaType:[]
    },
    mutations: {
        fetchNews(state,news){
            state.news = [
                ...state.news,
                ...news.result
            ]
            state.newsTotalPage = Math.ceil(news.count/10)
        },
        fetchZkInfo(state,news){
            state.zkxx = [
                ...state.zkxx,
                ...news.result
            ]
            state.zkxxTotalPage = Math.ceil(news.count/10)
        },
        readNews(state,news){
            state.article = news
        },
        fetchSchoolType(state,types){
            state.schoolType = types
        },
        fetchAreaType(state,types){
            state.areaType = types
        }
    },
    actions: {
        fetchNewsList({commit},{area="",type="",page=1}){
            commit('setLoading',true);
            service.fetchNews(area,type,page).then(
                data=>{
                    commit('setLoading',false);
                    commit('fetchNews',data)
                },
                error=>{
                    commit('fetchNews',[])
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
        },
        fetchZkInfoList({commit},{page=1}){
            commit('setLoading',true);
            service.fetchZkInfo(page).then(
                data=>{
                    commit('setLoading',false)
                    commit('fetchZkInfo',data)
                },
                error=>{
                    commit('fetchZkInfo',[])
                }
            )
        },
        fetchZkInfo({commit},id){
            commit('setLoading',true);
            service.fetchZkInfoById(id).then(
                data=>{
                    commit('setLoading',false)
                    commit('readNews',data)
                },
                error=>{
                    commit('readNews',{})
                }
            )
        },

        fetchSchoolType({commit,state}){
            if(state.schoolType.length===0){
                service.fetchSchoolType().then(
                    data=>{
                        commit('fetchSchoolType',data)
                    },
                    error=>{
                        // commit('fetchSchoolType')
                    }
                )
            }
        },
        fetchAreaType({commit,state}){
            if(state.areaType.length===0){
                service.fetchAreaType().then(
                    data=>{
                        commit('fetchAreaType',data)
                    },
                    error=>{
                        commit('fetchAreaType',data)
                    }
                )
            }
        }
    },
    getters: {
        getNewsList:state=>{
            return state.news
        },
        getNewsListLimit:state=>{
            return state.news.filter((news,index)=>{return index<10})
        },
        getZkInfoList:state=>{
            return state.zkxx
        },
        getNewsTotalPage:state=>{
            return state.newsTotalPage
        },
        getZkxxTotalPage:state=>{
            return state.zkxxTotalPage
        },
        getNews:state=>{
            return state.article
        },
        getSchoolType:state=>{
            return state.schoolType
        },
        getAreaType:state=>{
            return state.areaType
        }
    }
}