import 'whatwg-fetch'

export default {

    fetchHotNews:()=>{
        return fetch('http://www.023xiaoyuan.com/request/app/getHomeNews').then(response=>{
            return response.json()
        })
    },
    fetchNewsById:(id)=>{
        return fetch(`http://www.023xiaoyuan.com/request/app/newsDetail/${id}`).then(response=>{
            return response.json()
        })
    }
}