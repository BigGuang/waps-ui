<template>
    <div class="wp_icon_btn">
        <div class="icon">
            <img v-lazy="icon" :width="size" :heihgt="size" class="wp_cell_icon">
        </div>
        <div class="title">
            {{title}}
        </div>
        <div class="info">
            {{info}}
        </div>
    </div>
</template>

<script>
    export default {
        name: "wp_icon",
        props: {
            icon: {
                type: String,
                default: 'https://tse3-mm.cn.bing.net/th?id=OIP.j2ktHg9pH9JOVq_hzKcGRgHaHf&pid=Api'
            },
            size:{
                type: String,
                default: '60px'
            },
            title: {
                type: String,
                default: ''
            },
            info: {
                type: String,
                default: ''
            }
        }
    }
</script>

<style scoped>
    .wp_icon_btn{
        width:60px;
        text-align:center;
        margin: auto;
    }
    .wp_icon_btn .wp_cell_icon{
        border-radius: 10px;
    }
    .wp_icon_btn .title{
        font-size: 12px;
    }

    .wp_icon_btn .info{
        padding-top: 2px;
        font-size: 10px;
        color:#9EA1A3;
    }
</style>