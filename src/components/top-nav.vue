<template>
    <header class="bar bar-nav">
        <button @click="buttonLeft.action()" v-show="buttonLeft.show"
                class="button pull-left">
            {{buttonLeft.text}}
        </button>
        <button @click="buttonRight.action()" v-show="buttonRight.show"
                class="button pull-right">
            {{buttonRight.text}}
        </button>
        <h1 class="title">{{title}}</h1>
    </header>
</template>
<style>

</style>
<script>
export default {
    props: {
        title: {
            type:String,
            default:()=>{
                return '标题'
            }
        },
        buttonLeft: {
            type:Object,
            default:()=>{
                return {
                  show: false,
                  text: '左按钮',
                  action:()=>{
                  }
                }
            }
        },
        buttonRight: {
            type:Object,
            default:()=>{
                return {
                  show: false,
                  text: '右按钮',
                  action:()=>{
                  }
                }
            }
        },
        tabs: [
            {

            }
        ]
    }
}
</script>