//用户信息、banner形式
//外部依赖 van-cell,van-row,van-col
//todo: 整体样式还需要调整
<!--icon-->
<!--username-->
<!--user_info-->

<template>
    <div class="user_info_banner" v-bind:style="{color:font_color,backgroundImage: 'url('+back_img+')'}">
        <!--        <wp_icon img="https://www.shandw.com/mobile/images/phdavatar.png" class="my-icon"/>-->
        <img class="my-icon" :src="icon">
        <div class="my-nick" style="top: 0.75rem;">
            <slot name="points">
                <wp_points>{{points}}</wp_points>
            </slot>
        </div>
        <div class="my-id">
            <span class="user_info">
                <slot name="user_info">{{user_info}}</slot>
            </span>
            <!--            <button data-clipboard-text="1862214035" class="clip-uid">复制</button>-->
            <span class="user_desc">
                <slot name="user_desc">{{user_desc}}</slot>
            </span>
        </div>
        <div class="btn-container">
            <slot name="right">

            </slot>
        </div>
    </div>
</template>

<script>
    import wp_points from "@/components/base/wp_points";

    export default {
        name: "wp_user_info_banner",
        components: {wp_points},
        props: {
            icon: {
                type: String,
                default: 'https://www.shandw.com/mobile/images/phdavatar.png'
            },
            points: {
                type: String,
                default: '0'
            },
            user_desc: {
                type: String,
                default: ''
            },
            user_info: {
                type: String,
                default: '游客'
            },
            font_color: {
                type: String,
                default: '#fff'
            },
            back_img:{
                type: String,
                default:'http://pic36.nipic.com/20131228/13258436_122805989000_2.png'
            }
        }
    }
</script>


<style scoped>
    .user_info_banner {
        height: 3.75rem;
        width: 100%;
        background-image: url(http://pic36.nipic.com/20131228/13258436_122805989000_2.png);
        background-size: cover;
        position: relative;
    }

    .user_info_banner .my-icon {
        display: block;
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 50%;
        position: absolute;
        top: .625rem;
        left: .6875rem;
        z-index: 5;
    }

    .user_info_banner .my-nick {
        font-size: .8125rem;
        position: absolute;
        top: .75rem;
        left: 3.75rem;
        max-width: 5.9375rem;
        overflow: hidden;
        height: 1.25rem;
        max-height: 1.25rem;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .user_info_banner .my-id {
        z-index: 5;
        display: inline-block;
        height: .9375rem;
        line-height: 1.03125rem;
        font-size: .6875rem;
        position: absolute;
        bottom: .6875rem;
        left: 3.75rem;
    }

    .user_info_banner .my-id .user_info{
        font-weight: bold;
    }
    .user_info_banner .my-id .user_desc{
        margin-left: 10px;
        font-weight: bold;
    }


    .btn-container {
        height: 1.75rem;
        position: absolute;
        top: 1rem;
        right: .46875rem;
        text-align: right;
        z-index: 4;
    }
</style>