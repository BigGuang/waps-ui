<template>
    <div class="ad">
        <div class="ad_body" id="flyout-cta:1w" style="">
            <div class="img_layout">
                <img class="icon" id="ad-image:1x" :src="icon" alt="" style="">
            </div>
            <div class="content">
                <div class="text_layout">
                    <div class="text_m">
                        <div class="" id="ad-text:1y" style="">{{title}}</div>
                    </div>
                    <div class="text_s">
                        <div class="" id="ad-text:1z" style="">{{info}}</div>
                    </div>
                </div>
                <div class="right">
                    <div>
                        <slot name="right">
                            <wp_button type="default">{{btn_text}}</wp_button>
                        </slot>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import wp_button from '@/components/base/wp_button';

    export default {
        name: "wp_cell_ad",
        components:{wp_button},
        props: {
            icon: {
                type: String,
                default: ""
            },
            title: {
                type: String,
                default: ""
            },
            info: {
                type: String,
                default: ""
            },
            btn_text: {
                type: String,
                default: ""
            }
        }
    }
</script>

<style scoped>
    .ad {
        /*background-color: grey;*/
        direction: ltr;
        height: 56px;
        width: 100%;
        background-color: whitesmoke;
    }

    .ad_body {
        /*background-color: white;*/
        position: absolute;
        margin: 3px;
        width: 98%;
        height: 48px;
    }

    .img_layout {
        /*background-color: yellow;*/
        position: absolute;
        width: 48px;
        height: 48px;
        /*top:0;*/
    }

    .text_layout {
        position: absolute;
        /*background-color: orange;*/
        line-height: 1.2;
        font-size: 14px;
        left: 55px;
        top: 18%;
    }

    .content {
        background-color: darkcyan;
    }

    .text_m {
        color: gray;
        font-weight: bold;
        font-size: 15px;
    }

    .text_s {
        color: #6c7583;
        font-size: 13px;
    }

    .content .right {
        position: absolute;
        float: right;
        right: 0;
        width: 80px;
        top: 27%;
    }

    .content .btn_layout .btn{
        background-color: deepskyblue;
    }


    .btn_text {
        color: white;
        font-size: 14px;
    }

    .icon {
        height: 48px;
        width: 48px;
        margin: 0;
        padding: 0;
        border: 0;
        background: transparent;
    }

    .ytp-flyout-cta .ytp-flyout-cta-icon-container {
        height: 48px;
        /*left: 4px;*/
        overflow: visible;
        position: absolute;
        /*top: 4px;*/
        width: 48px;
        -moz-transform: none;
        -ms-transform: none;
        -webkit-transform: none;
        transform: none;
        -moz-transition: -moz-transform .2s cubic-bezier(0.0, 0.0, 0.2, 1);
        -webkit-transition: -webkit-transform .2s cubic-bezier(0.0, 0.0, 0.2, 1);
        -ms-transition: -ms-transform .2s cubic-bezier(0.0, 0.0, 0.2, 1);
        transition: transform .2s cubic-bezier(0.0, 0.0, 0.2, 1);
    }

</style>