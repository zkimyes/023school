import 'whatwg-fetch'

export default {

    fetchHotNews:()=>{
        return fetch('http://www.023xiaoyuan.com/request/app/getHomeNews').then(response=>{
            return response.json()
        })
    },
    fetchNewsById:(id)=>{
        return fetch(`http://www.023xiaoyuan.com/request/app/newsDetail/nid/${id}`).then(response=>{
            return response.json()
        })
    },
    fetchSchoolList:(condition={area:'',type:''})=>{
         let url = "http://www.023xiaoyuan.com/request/app/getSchools";
            (condition.area != '')? url +=`area/${area}`:url+='';
            (condition.type != '')? url +=`type/${type}`:url+='';
         return fetch(url).then(response=>{
            return response.json()
        })
    }
}