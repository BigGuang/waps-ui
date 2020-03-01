//小号卡片
//原生html+css
//todo：卡片上的签需要完善
<!--img-->
<!--title-->
<!--info-->
<!--isnew-->
<!--tag-->
<template>
    <div style="padding-bottom:10px">
        <div class="wp_card_sm">
            <div class="icon">
                <img v-lazy="img" class="wp_card_img">
            </div>
            <div v-if="isnew" class="tag-list"><i class="new"></i></div>
            <div class="more_info" v-if="title">
                <div class="g-name">
                    {{title}}
                </div>
                <div class="game-desc">
                    {{info}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "wp_card_sm",
        props: {
            img: {
                type: String,
                default: 'http://img.m3guo.com/group3/M00/00/DA/wKgMHFw0VwWAKmq7AACyV0DlYZE679.png'
            },
            title: {
                type: String,
                default: ''
            },
            info: {
                type: String,
                default: ''
            },
            isnew: String,
            tag: {
                type: String,
                default: 'http://www.agacio.com/catalog/view/theme/theme223/image/new.png'
            },
        }
    }
</script>


<style scoped>
    .wp_card_sm {
        margin: auto;
        border-radius: 8px;
        overflow: hidden;
        width: 90%;
        background-color: rgba(255, 255, 255, 1.0);
        /*width: 100%;*/
        /*height: 5.625rem;*/
        /*height: 100%;*/
        position: relative;
        filter: progid:DXImageTransform.Microsoft.Shadow(color=#909090, direction=120, strength=4);
        -moz-box-shadow: 2px 2px 10px #909090;
        -webkit-box-shadow: 2px 2px 10px #909090;
        box-shadow: 2px 2px 10px #909090;
    }

    .wp_card_img {
        width: 100%;
        height: 100%;
        transition: all 1s ease 0s;
        opacity: 1;
    }

    .more_info {
        background-color: #fff;
        font-size: 16px;
        padding: 0;
        height: 3.125rem;
        overflow: hidden;
        border-radius: 0 0 6px 6px;
        text-align: center;
    }

    .g-name {
        overflow: hidden;
        color: #010101;
        margin-top: .15625rem;
        font-size: .875rem;
        height: 1.25rem;
        line-height: 1.25rem;
    }

    .game-desc {
        width: 95%;
        display: block;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        font-size: 12px;
        color: #989898;
        height: .9375rem;
        margin: .21875rem auto;
        line-height: .9375rem;
    }

    .tag-list {
        width: 100%;
        height: 1.65625rem;
        position: absolute;
        top: -.15625rem;
        left: 0;
    }

    .tag-list .new {
        background: url('http://www.agacio.com/catalog/view/theme/theme223/image/new.png') 0 0/100% no-repeat;
        width: 50px;
        height: 50px;
        float: left;
        margin-right: .25rem;
    }
</style>