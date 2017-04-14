import service from '../../service'
import _ from 'underscore'
export default {
    state: {
        schools: [],
        schoolTotalPage: 0,
        school: {}
    },
    mutations: {
        getSchools(state, schools) {
            if (schools && schools.result != null && schools.result.length > 0) {
                state.schools = [
                    ...state.schools,
                    ...schools.result
                ]
                state.schoolTotalPage = Math.ceil(schools.count / 10)
            } else {
                state.schools = []
            }


        },
        getSchool(state, school) {
            school['school_info']['explain'] = _.unescape(school['school_info']['explain'])
            state.school = school
        }
    },
    actions: {
        fetchSchoolList({ commit }, condition) {
            service.fetchSchoolList(condition).then(
                data => {
                    commit('setLoading', false)
                    commit('getSchools', data)
                },
                error => {
                    commit('getSchools', null)
                }
            )
        },
        fetchSchool({ commit }, id) {
            service.fetchSchool(id).then(
                data => {
                    console.log(data)
                    commit('setLoading', false)
                    commit('getSchool', data || {})
                },
                error => {
                    commit('setLoading', false)
                    commit('getSchool', {})
                }
            )
        }
    },
    getters: {
        getSchools: state => {
            return state.schools
        },
        getSchool: state => {
            return state.school
        },
        getPageNub: state => {
            return state.schoolTotalPage
        }
    }
}