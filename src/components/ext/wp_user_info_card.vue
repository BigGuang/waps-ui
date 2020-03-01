//用户信息、banner形式
//内部依赖wp_icon,外部依赖vant v-lazy
//todo: 整体样式还需要调整
<!--height-->
<!--color-->
<!--username-->
<!--userinfo-->
<template>
    <div class="user_info_card" v-bind:style="{height:height,color:color}">
        <div class="user_icon">
            <wp_icon img="https://cdn4.iconfinder.com/data/icons/miscellaneous-icons-1/200/misc_game_multiplayer-512.png" size="80px"/>
        </div>
        <div class="user_name">
            {{username}}
        </div>
        <div class="user_info">
            {{userinfo}}
        </div>
        <slot/>
    </div>
</template>

<script>
    import wp_icon from "@/components/base/wp_icon";
    export default {
        name: "wp_user_info_card",
        components: {wp_icon},
        props:{
            height:{
                type:String,
                default:'200px'
            },
            color:{
                type:String,
                default: '#fff'
            },
            username:{
                type:String,
                default: '13810889527'
            },
            userinfo:{
                type:String,
                default: 'ID:9527'
            }
        }
    }
</script>


<style scoped>
    .user_info_card {
        /*http://attach.bbs.miui.com/forum/201202/18/113901kkl1b1np9gg42n1p.jpg*/
        color: #fff;
        background-image: url('http://www.51pptmoban.com/d/file/2014/04/01/2eea46ecb5f25567a11af329da005f85.jpg');
        /*background-repeat: no-repeat;*/
        text-align: center;
    }
    .user_info_card .user_icon{
        padding-top: 30px;
    }

    .user_info_card .user_name{

        font-size: 18px;
        font-weight: bold;
    }
    .user_info_card .user_info{
        padding-top: 10px;
        font-size: 14px;
        /*font-weight: bold;*/
    }
</style>