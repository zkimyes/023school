<template>
    <nav class="bar bar-tab">
        <a class="tab-item external active"
           href="#">
            <span class="icon icon-home"></span>
            <span class="tab-label">文案</span>
        </a>
        <a class="tab-item external"
           href="#">
            <span class="icon icon-me"></span>
            <span class="tab-label">文案</span>
            <span class="badge">2</span>
        </a>
        <a class="tab-item external"
           href="#">
            <span class="icon icon-star"></span>
            <span class="tab-label">文案</span>
        </a>
        <a class="tab-item external"
           href="#">
            <span class="icon icon-cart"></span>
            <span class="tab-label">文案</span>
        </a>
        <a class="tab-item external"
           href="#">
            <span class="icon icon-settings"></span>
            <span class="tab-label">文案</span>
        </a>
    </nav>
</template>
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