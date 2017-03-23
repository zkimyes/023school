import service from '../../service'
export default {
    state: {
        schools:[

        ]
    },
    mutations: {
        fetchSchool(state,schools){
            state.schools = [
                ...state.schools,
                ...schools.result
            ]
        }
    },
    actions: {
        fetchSchoolList({commit},condition){
             service.fetchSchoolList(condition).then(
                data=>{
                    commit('setLoading',false);
                    commit('fetchSchool',data)
                },
                error=>{
                    commit('setLoading',false);
                    commit('fetchSchool',[])
                }
            )
        }
    },
    getters: {
        getSchools:state=>{
            return state.schools
        }
    }
}