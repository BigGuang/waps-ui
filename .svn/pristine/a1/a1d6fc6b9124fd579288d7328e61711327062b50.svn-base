//广告条banner，会随图片高度自动调整
//原生html、css
//todo:是否阴影
<!--img-->
<!--font_color-->
<!--title-->
<!--radius-->
<template>
    <div class="wp_banner" v-bind:style="{'width':width}">
        <div class="wp_banner_div" >
            <img :src="img" class="wp_banner_img" v-bind:style="{'border-radius':radius}">
        </div>
        <div class="more_info" v-bind:style="{'border-radius':radius}">
            <div class="g-name" v-bind:class="{'color':font_color}">
                {{title}}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "wp_banner",
        props: {
            img: {
                type: String,
                default: 'http://img.m3guo.com/group4/M00/00/2E/wKgMHFxHBnaAWCdAAAEOYmzvOVM460.jpg'
            },
            font_color: {
                type: String,
                default: '#fff'
            },
            title: {
                type: String,
                default: ''
            },
            radius:{
                type: String,
                default: '0px'
            },
            width: {
                type:String,
                default:'95%'
            }
        }
    }
</script>



<style scoped>
    .wp_banner {
        margin: auto;
        width: 95%;
        height: 100%;
        position: relative;

    }

    .wp_banner .wp_banner_div {

    }

    .wp_banner .wp_banner_img {
        width: 100%;
        height: 100%;
        /*border-radius: 8px;*/
        display: block;
        filter:progid:DXImageTransform.Microsoft.Shadow(color=#909090,direction=120,strength=4);
        -moz-box-shadow: 2px 2px 10px #909090;
        -webkit-box-shadow: 2px 2px 10px #909090;
        box-shadow:2px 2px 10px #909090;
    }

    .wp_banner .more_info {
        position: absolute;
        width: 100%;
        bottom: 0;
        left: 0;
        background: linear-gradient(180deg, transparent 0, transparent 10%, rgba(0, 0, 0, .06) 30%, rgba(0, 0, 0, .6));
        height: 2.5rem;
        border-radius: 8px;
        overflow: hidden;
    }

    .wp_banner .more_info .g-name {
        font-size: 1rem;
        height: 2.5rem;
        line-height: 2.53125rem;
        color: #fff;
        max-width: 15.625rem;
        overflow: hidden;
        position: absolute;
        top: 0;
        left: .78125rem;
    }
</style>