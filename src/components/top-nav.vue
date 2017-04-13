<template>
    <div class="header box">
        <div class="back box-item" @click="back()"><i class="fa fa-chevron-left" aria-hidden="true"></i><span>返回</span></div>
        <div class="title box-item">{{title}}</div>
        <div v-if="buttonRight.show" class="right box-item" @click="buttonRight.action()"><i class="fa" :class="buttonRight.icon"></i><span>{{buttonRight.text}}</span></div>
    </div>
</template>
<style>

</style>
<script>
export default {
    props: {
        title: {
            type: String,
            default: () => {
                return '标题'
            }
        },
        buttonLeft: {
            type: Object,
            default: () => {
                return {
                    show: false,
                    text: '左按钮',
                    icon:'fa-chevron-right',
                    action: () => {
                    }
                }
            }
        },
        buttonRight: {
            type: Object,
            default: () => {
                return {
                    show: false,
                    text: '右按钮',
                    icon:'fa-chevron-right',
                    action: () => {
                    }
                }
            }
        },
        tabs: [
            {

            }
        ]
    },
    mounted(){
    },
    methods:{
        back(){
            return this.$router.back()
        }
    }
}
</script>