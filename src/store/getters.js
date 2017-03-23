export default {
    getTitle:state=>{
        return state.header.title
    },
    showTop:state=>{
        return state.showTop
    },
    loading:state=>{
        return state.loading
    }
}