//卡片
//原生html+css
<!--icon-->
<!--icon_size-->
<!--title-->
<!--bgColor-->
<!--width-->
<!--height-->
<template>
    <section class="wp_card" v-bind:style="{width:width,height:height,bgColorCss}">
        <div class="head">
            <slot name="head">
                <div class="wp_head">
                    <img v-if="icon" :src="icon"
                         :width="icon_size" :height="icon_size"/>
                    <span class="wp_head_text" v-if="title">{{title}}</span>
                </div>
            </slot>
        </div>
        <div class="body">
            <slot name="default">

            </slot>
        </div>
        <div class="foot">
            <slot name="foot">
            </slot>
        </div>
    </section>
</template>

<script>

    export default {
        name: "wp_card",
        props: {
            icon: {
                type: String,
                default: ''
            },
            icon_size: {
                type: String,
                default: '30px'
            },
            title: {
                type: String,
                default: ''
            },
            bgColor: {
                type: String,
                default: '#fff'
            },
            width: {
                type: String,
                default: ''
            },
            height: {
                type: String,
                default: '100%'
            }
        },
        computed: {
            bgColorCss() {
                return {
                    'background-color': 'rgba(255,255,255,0.0)'
                }
            }
        }
    }
</script>

<style scoped>
    .wp_card {
        margin-left: 7px;
        margin-right: 7px;
        padding: 7px;
        border-radius: 8px;
        overflow: hidden;
        width: 90%;
        background-color: rgba(255, 255, 255, 1.0);
        /*width: 100%;*/
        /*height: 5.625rem;*/
        height: 100%;
        position: relative;
        filter: progid:DXImageTransform.Microsoft.Shadow(color=#909090, direction=120, strength=4);
        -moz-box-shadow: 2px 2px 10px #909090;
        -webkit-box-shadow: 2px 2px 10px #909090;
        box-shadow: 2px 2px 10px #909090;
    }

    .bgColor {
        background-color: rgba(255, 255, 255, 0.0);
    }

    .wp_card .head {
        margin: 2px;
        font-size: 14px;

    }

    .wp_head {
        display: flex;
        -webkit-box-orient: horizontal;
        height: 30px;
        align-items: center;
        background-color: rgb(255, 255, 255);
        margin-bottom: 1px;
    }

    .wp_head .wp_head_text {
        margin-left: 5px;
        font-size: 15px;
        font-weight: bold;
    }

    .wp_card .body {
        margin: 15px 2px 2px;
    }

    .wp_card .foot {
        margin: 10px 2px 2px;
        color: lightgray;
    }
</style>