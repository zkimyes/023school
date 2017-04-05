<template>
    <div @click="backTop()" style="position:fixed;right:20px;bottom:20px;font-size:40px;color:#5fd7d6">
        <i class="fa fa-chevron-circle-up" aria-hidden="true"></i>
    </div>
</template>

<script>
    const content = document.querySelector('.container');
    export default{
        name:'backTop',
        methods:{
            backTop(){
                document.body.scrollTop = 0;
            }
        }
    }
</script>