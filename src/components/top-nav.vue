<template>
    <div class="header box">
        <div class="back box-item" @click="back()"><i class="fa fa-chevron-left" aria-hidden="true"></i><span>返回</span></div>
        <div class="title box-item"></div>
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
    methods:{
        back(){
            return this.$router.back()
        }
    }
}
</script>