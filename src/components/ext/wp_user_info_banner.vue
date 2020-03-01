//用户信息、banner形式
//外部依赖 van-cell,van-row,van-col
//todo: 整体样式还需要调整
<!--icon-->
<!--username-->
<!--userinfo-->

<template>
    <van-cell class="user_info">
        <template slot="title">
            <van-row>
                <van-col span="4">
                    <!--<van-img :name="img" size="40px"></van-img>-->
                    <wp_icon :img="icon"/>
                </van-col>
                <van-col span="8">
                    <div class="user_name">{{username}}</div>
                    <div>{{userinfo}}</div>
                </van-col>
                <van-col span="12">
                    <slot></slot>
                </van-col>
            </van-row>
        </template>
    </van-cell>
</template>

<script>
    import wp_icon from "@/components/base/wp_icon";
    export default {
        name: "wp_user_info",
        components: {wp_icon},
        props:{
            icon:{
                type:String,
                default:'https://cdn4.iconfinder.com/data/icons/miscellaneous-icons-1/200/misc_game_multiplayer-512.png'
            },
            username:{
                type:String,
                default: ''
            },
            userinfo:{
                type:String,
                default: ''
            }
        }
    }
</script>


<style scoped>
    .user_info {
        /*http://attach.bbs.miui.com/forum/201202/18/113901kkl1b1np9gg42n1p.jpg*/
        color: #fff;
        background-image: url('http://www.51pptmoban.com/d/file/2014/04/01/2eea46ecb5f25567a11af329da005f85.jpg');
        background-repeat: no-repeat;
    }

    .user_info .user_name{
        font-size: 18px;
        font-weight: bold;
    }
    .user_info .user_info{
        font-weight: bold;
    }
</style>