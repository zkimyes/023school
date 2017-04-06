import service from '../../service'
export default {
    state: {
        schools: [],
        school: {}
    },
    mutations: {
       getSchools(state, schools) {
            state.schools = [
                ...state.schools,
                ...schools.result
            ]
        },
        getSchool(state, school) {
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
                    commit('setLoading', false)
                    commit('getSchools', [])
                }
            )
        },
        fetchSchool({commit},id){
            service.fetchSchool(id).then(
                data=>{
                    commit('setLoading',false)
                    commit('getSchool',data)
                },
                error=>{
                    commit('setLoading',false)
                    commit('getSchool',{})
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
        }
    }
}