import 'whatwg-fetch'
// const apiHost = "http://www.023xiaoyuan.com";
const apiHost = "http://localhost:8877";
export default {

    fetchHotNews:()=>{
        return fetch(`${apiHost}/request/app/getHomeNews`).then(response=>{
            return response.json()
        })
    },
    fetchNewsById:(id)=>{
        return fetch(`${apiHost}/request/app/newsDetail/nid/${id}`).then(response=>{
            return response.json()
        })
    },
    fetchSchoolList:(condition={area:'',type:''})=>{
         let url = `${apiHost}/request/app/getSchools`;
            (condition.area != '')? url +=`area/${area}`:url+='';
            (condition.type != '')? url +=`type/${type}`:url+='';
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