import service from '../../service'
export default {
    state: {
        schools: [

        ],
        school: {}
    },
    mutations: {
        fetchSchool(state, schools) {
            state.schools = [
                ...state.schools,
                ...schools.result
            ]
        },
        setSchool(state, schoolId) {
            state.school = state.schools.filter(sch => { return sch.id === schoolId })[0]
        }
    },
    actions: {
        fetchSchoolList({ commit }, condition) {
            service.fetchSchoolList(condition).then(
                data => {
                    commit('setLoading', false);
                    commit('fetchSchool', data)
                },
                error => {
                    commit('setLoading', false);
                    commit('fetchSchool', [])
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