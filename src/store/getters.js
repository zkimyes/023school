export default {
    getTitle:state=>{
        return state.header.title
    },
    showTop:state=>{
        return state.showTop
    },
    loading:state=>{
        return state.loading
    },
    showMask:state=>{
        return state.showMask
    },
    getRightMenu:state=>{
        return state.header.rightMenu
    }
}