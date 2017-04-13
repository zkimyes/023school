<template>
    <div v-if="show" @click="backTop()" class="backtop">
        <i class="fa fa-chevron-up" aria-hidden="true"></i>
    </div>
</template>

<script>
    import _ from 'lodash'
    export default{
        name:'backTop',
        data(){
            return {
                show:false
            }
        },
        methods:{
            backTop(){
                document.body.scrollTop = 0;
            }
        },
        mounted(){
            let _body = document.body;
            let _this = this;
            document.addEventListener('scroll',_.throttle(function checkScroll(){
                let top = Math.abs(_body.scrollTop);
                if(top>300){
                    _this.show = true;
                }else{
                    _this.show = false;
                }
            },1000))
        }
    }
</script>