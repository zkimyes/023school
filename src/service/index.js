import 'whatwg-fetch'
const apiHost = "http://www.023xiaoyuan.com";
// const apiHost = "http://192.168.0.6:8877";
export default {

    fetchSchoolType:()=>{
        return fetch(`${apiHost}/request/app/getAllSchoolType`).then(response=>{
            return response.json()
        })
    },

    fetchAreaType:()=>{
        return fetch(`${apiHost}/request/app/getAreaType`).then(response=>{
            return response.json()
        })
    },

    fetchHotNews:()=>{
        return fetch(`${apiHost}/request/app/getHomeNews`).then(response=>{
            return response.json()
        })
    },

    fetchZkInfo:(page)=>{
        let url = `${apiHost}/request/app/zklist`;
            (page >= 1)? url +=`/p/${page}`:url+='';
        return fetch(url).then(response=>{
            return response.json()
        })
    },

    fetchZkInfoById:(id)=>{
        return fetch(`${apiHost}/request/app/zkinfo/id/${id}`).then(response=>{
            return response.json()
        })
    },

    fetchNews:(area="",type="",page=1)=>{
         let url = `${apiHost}/request/app/getNews`;
            (area != '')? url +=`/area/${area}`:url+='';
            (type != '')? url +=`/type/${type}`:url+='';
            (page >= 1)? url +=`/p/${page}`:url+='';
         return fetch(url).then(response=>{
            return response.json()
        })
    },

    fetchNewsById:(id)=>{
        return fetch(`${apiHost}/request/app/newsDetail/nid/${id}`).then(response=>{
            return response.json()
        })
    },
    fetchSchoolList:(condition={area:'',type:'',page:1})=>{
         let url = `${apiHost}/request/app/getSchools`;
            (condition.area != '')? url +=`/area/${condition.area}`:url+='';
            (condition.type != '')? url +=`/type/${condition.type}`:url+='';
            (condition.page >= 1)? url +=`/p/${condition.page}`:url+='';
         return fetch(url).then(response=>{
            return response.json()
        })
    },
    fetchSchool:(id)=>{
        return fetch(`${apiHost}/request/app/getSchoolDetail/sid/${id}`).then(response=>{
            return response.json()
        })
    }
}