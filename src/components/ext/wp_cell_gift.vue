//cell单元格,适用于礼包显示
//原生html+css
//todo:简单指定进度条进度、颜色
<!--gift_title-->
<!--gift_desc-->
<!--ratio-->
<!--git_btn_text-->
<template>
    <div class="wp_cell_gift">
        <div class="gift-container-info">
            <div class="gift-title">
                <slot name="title">
                    <span v-html="gift_title"></span>
                </slot>
            </div>
            <div class="gift-desc">
                <slot name="title">
                    <span v-html="gift_desc"></span>
                </slot>
            </div>
            <slot name="progress">
                <div class="gift-progress" v-if="show_progress==='true'">
                    <div class="line-container">
                        <div class="line-width" v-bind:style="{width:real_width}"></div>
                    </div>
                    <div class="line-text">剩余{{real_width}}</div><!---->
                </div>
            </slot>
        </div>
        <div class="gift-btn">
            <slot name="right">
                <wp_button :disable="disable">{{git_btn_text}}</wp_button>
            </slot>
        </div>
        <div>
            <slot name="bottom">
            </slot>
        </div>
    </div>
</template>

<script>
    import wp_button from "@/components/base/wp_button";

    export default {
        name: "wp_cell_gift",
        components: {wp_button},
        props: {
            gift_title: String,
            gift_desc: String,
            ratio: {
                type: String,
                default: '50%'
            },
            git_btn_text: {
                type: String,
                default: '领取'
            },
            show_progress: {
                type: String,
                default: 'false'
            },
            disable: {
                type: String,
                default: 'false'
            }
        },
        computed: {
            real_width() {
                let ww = this.ratio.replace("%", "");
                let real_w = 100 - ww;
                return real_w + '%';
            }
        }
    }
</script>


<style scoped>
    .wp_cell_gift {
        position: relative;
    }

    .gift-container-info {
        width: 15.9375rem;
        position: relative;
        margin-left: .9375rem;
    }

    .gift-title {
        width: 100%;
        overflow: hidden;
        height: 1.875rem;
        line-height: 1.875rem;
        color: #000;
        font-size: .9375rem;
    }

    .gift-desc {
        font-size: .8125rem;
        color: #989898;
        line-height: 1.09375rem;
        max-height: 2.1875rem;
        overflow: hidden;
    }

    .gift-progress {
        position: relative;
        height: .9375rem;
        line-height: .9375rem;
        margin-top: .375rem;
    }

    .line-container {
        overflow: hidden;
        float: left;
        position: relative;
        width: 6.25rem;
        height: .46875rem;
        border-radius: .25rem;
        border: 1px solid #fd9b36;
        margin-top: .125rem;
        background-image: linear-gradient(90deg, #ff6126, #ff8f19);
    }

    .line-container .line-width {
        position: absolute;
        top: 0;
        right: 0;
        background: #ffe9e0;
        border-radius: 0 .25rem .25rem 0;
        height: .46875rem;
    }

    .gift-progress .line-text {
        color: #fd9b36;
        font-size: .6875rem;
        float: left;
        margin-left: .375rem;
    }

    .gift-normal {
        border: .0625rem solid #fd9b36;
        color: #fd9b36;
    }

    .gift-btn {
        position: absolute;
        top: 50%;
        box-sizing: border-box;
        right: .9375rem;
        width: 4.0625rem;
        height: 1.75rem;
        border-radius: .875rem;
        font-size: .8125rem;
        text-align: center;
        -webkit-transform: translate3d(0, -50%, 0);
        transform: translate3d(0, -50%, 0);
    }
</style>