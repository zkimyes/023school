import 'whatwg-fetch'
const apiHost = "http://www.023xiaoyuan.com";
// const apiHost = "http://192.168.0.6:8877";
export default {

    fetchSchoolType: () => {
        return fetch(`${apiHost}/request/app/getAllSchoolType`).then(response => {
            return response.json()
        })
    },

    fetchAreaType: () => {
        return fetch(`${apiHost}/request/app/getAreaType`).then(response => {
            return response.json()
        })
    },

    fetchHotNews: () => {
        return fetch(`${apiHost}/request/app/getHomeNews`).then(response => {
            return response.json()
        })
    },

    fetchZkInfo: (page) => {
        let url = `${apiHost}/request/app/zklist`;
        (page >= 1) ? url += `/p/${page}`: url += '';
        return fetch(url).then(response => {
            return response.json()
        })
    },

    fetchZkInfoById: (id) => {
        return fetch(`${apiHost}/request/app/zkinfo/id/${id}`).then(response => {
            return response.json()
        })
    },

    fetchNews: (area = "", type = "", page = 1) => {
        let url = `${apiHost}/request/app/getNews`;
        if (area != '')
            url += `/area/${area}`
        if (type != '')
            url += `/type/${type}`
        if (page >= 1)
            url += `/p/${page}`
        return fetch(url).then(response => {
            return response.json()
        }).then(data => {
            return Promise.resolve(data)
        }).catch(err => {
            return Promise.reject(err)
        })
    },

    fetchNewsById: (id) => {
        return fetch(`${apiHost}/request/app/newsDetail/nid/${id}`).then(response => {
            return response.json()
        })
    },
    fetchSchoolList: (condition = { area: '', type: '', page: 1 }) => {
        let url = `${apiHost}/request/app/getSchools`;
        if (condition.area != '')
            url += `/area/${condition.area}`
        if (condition.type != '')
            url += `/type/${condition.type}`
        if (condition.page >= 1)
            url += `/p/${condition.page}`
        return fetch(url).then(response => {
            return response.json()
        }).then(data => {
            if (data.result !== null) {
                return Promise.resolve(data)
            } else {
                return Promise.reject([])
            }

        }).catch(err => {
            return Promise.reject(err)
        })
    },
    fetchSchool: (id) => {
        return fetch(`${apiHost}/request/app/getSchoolDetail/sid/${id}`).then(response => {
            console.log(response)
            return response.json()
        }).then(data => {
            return Promise.resolve(data)
        }).catch(err => {
            return Promise.reject(err)
        })
    }
}