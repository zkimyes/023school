<template>
    <div class="header box">
        <div class="back box-item"><i class="bi bi-arrow-left"></i></div>
        <div class="title box-item">小说书城</div><a class="search box-item"
           href="/search?query=%E6%90%9C%E7%B4%A2"><i class="bi bi-search"></i></a>
        <div class="profile"></div><span></span></div>
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
    }
}
</script>