<template>
    <div class="detail-top-container">
        <img :data-src="bg_img" data-loaded="1"
             class="detail-bg-img" style="transition: all 1s ease 0s; opacity: 1;"
             :src="bg_img">
        <div class="linear-mask"></div>
        <div class="game-info-container">
            <img :data-src="icon_img" data-loaded="1"
                 class="game-icon" style="transition: all 1s ease 0s; opacity: 1;"
                 :src="icon_img">
            <div class="game-title">
                <div class="game-name">{{title}}</div>
                <!--<slot name="header">-->
                <span v-if="type"><span class="game-tag" >{{type}}</span></span>
                <!--</slot>-->
            </div>
            <div class="hot-play-info"><span class="star-list"><i class="star2"></i><i class="star2"></i><i
                    class="star2"></i><i class="star2"></i><i class="star1"></i></span><span
                    class="light-num">9.6万</span>人在玩
            </div>
            <div class="game-info">{{info}}</div>
            <div class="play-game">
                <slot>
                    <div class="play-game-btn">{{btn_text}}</div>
                </slot>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "wp_info_top",
        props: {
            bg_img: {
                type: String,
                default: 'http://img.m3guo.com/group2/M00/00/D3/wKgMHFvPEjyAeNSEAAHtiBkgWs4405.jpg'
            },
            icon_img: {
                type: String,
                default: 'http://img.m3guo.com/group3/M00/00/D3/wKgMHFvPEgiACvGPAAKndeotG6o114.png'
            },
            title: {
                type: String,
                default: ''
            },
            type: {
                type: String,
                default: ''
            },
            info: {
                type: String,
                default: ''
            },
            btn_text: {
                type: String,
                default: ''
            }
        }
    }
</script>

<style scoped>
    .detail-top-container {
        height: 19.0625rem;
        width: 100%;
        position: relative;
        overflow: hidden;
        background: #2b323d;
    }

    .detail-bg-img, .linear-mask {
        width: 100%;
        position: absolute;
        left: 0;
    }

    .detail-bg-img {
        top: 0;
        display: block;
        opacity: .8;
    }

    .linear-mask {
        height: 11.25rem;
        bottom: 0;
        background: linear-gradient(180deg, transparent, rgba(33, 39, 47, 0) 5%, rgba(33, 39, 47, .33) 20%, #21272f 40%, #21272f);
    }

    .game-info-container {
        width: 13.4375rem;
        height: 8.125rem;
        position: absolute;
        bottom: 1.25rem;
        left: 50%;
        -webkit-transform: translate3d(-50%, 0, 0);
        transform: translate3d(-50%, 0, 0);
    }

    .game-icon, .game-title {
        position: absolute;
        top: 0;
    }

    .game-icon {
        width: 4.375rem;
        height: 4.375rem;
        border-radius: 12px;
        left: 0;
    }

    .game-title, .game-title .game-name {
        height: 1.5625rem;
        line-height: 1.5625rem;
    }

    .game-title {
        font-size: 1.0625rem;
        color: #fff;
        left: 5.15625rem;
        width: 10.9375rem;
    }

    .game-icon, .game-title {
        position: absolute;
        top: 0;
    }

    .game-title .game-name {
        display: inline-block;
        float: left;
        max-width: 5.9375rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .game-title, .game-title .game-name {
        height: 1.5625rem;
        line-height: 1.5625rem;
    }

    .game-title .game-tag {
        height: .9375rem;
        display: inline-block;
        float: left;
        line-height: .9375rem;
        border-radius: 3px;
        margin-left: .25rem;
        border: 1px solid #ffb400;
        font-size: .5625rem;
        color: #ffb400;
        background: #000;
        padding: 0 .46875rem;
        margin-top: .25rem;
    }

    .light-num {
        color: #ff9000;
    }

    .game-info {
        color: #929dac;
        height: 1.5625rem;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        line-height: 1.5625rem;
        font-size: .8125rem;
        position: absolute;
        left: 5.15625rem;
        top: 2.96875rem;
        width: 8.28125rem;
    }

    .play-game {
        width: 100%;
        height: 2.5rem;
        position: absolute;
        bottom: 0;
    }

    .play-game-btn {
        line-height: 2.53125rem;
        color: #fff;
        font-size: 1.0625rem;
        border-radius: 1.25rem;
        text-align: center;
        background-image: linear-gradient(90deg, #1fc7b9, #40e38d);

    }
</style>