<template>
    <div class="gift-progress" v-bind:style="{width:width,height:height}">
        <div class="line-text" v-bind:style="{color:font_color,width:width,height:height,lineHeight: height}">
            <slot>{{show_text}}</slot>
        </div>
        <div class="line-container" v-bind:style="{height:height}">
            <div class="line-width" v-bind:style="{width:real_width+'%',height:height}"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "wp_progress",
        data() {
            return {
                show_text: ""
            }
        },
        props: {
            total: {
                type: String,
                default: '0'
            },
            current: {
                type: String,
                default: '-1'
            },
            ratio: {
                type: String,
                default: '200px'
            },
            width: {
                type: String,
                default: '200px'
            },
            height: {
                type: String,
                default: '23px'
            },
            type: {
                type: String,
                default: "default"
            },
            default_text: {
                type: String,
                default: ""
            },
            font_color:{
                type: String,
                default: "#fff"
            }
        },
        computed: {
            real_width: function () {
                let that = this;
                let real_w = '';
                if (this.current >= "0") {
                    if (this.total !== "0") {
                        let ww = (this.current / this.total) * 100;
                        real_w = 100 - ww;
                    } else {
                        window.console.log(this.ratio);
                        let ww = this.ratio.replace("%", "");
                        real_w = 100 - ww;
                    }

                    let curr = 100 - real_w;
                    if (this.type === 'left') {
                        that.show_text = "剩余" + real_w + "%";
                    } else if (this.type === 'default') {
                        that.show_text = "完成" + curr + '%';
                    } else if (this.type === 'app') {
                        that.show_text = this.current + "/" + this.total + " MB"
                    }
                    return real_w;
                } else {
                    return that.show_text = this.default_text;
                }
            }
        }
    }
</script>

<style scoped>
    .gift-progress {
        /*background-color: #279fcf;*/
        /*margin-top: .125rem;*/
        /*margin-bottom: .125rem;*/
        vertical-align: middle;

        text-align: center;
        position: relative;
        margin: 0 auto;
    }

    .line-container {
        background-color: #3fe28f;
        overflow: hidden;
        /*margin-left: auto;*/
        /*margin-right: auto;*/
        float: left;
        position: relative;
        width: 99%;
        border-radius: .25rem;
        border: 1px solid #fd9b36;

        background-image: linear-gradient(90deg, #ff6126, #ff8f19);
    }

    .line-container .line-width {
        position: absolute;
        top: 0;
        right: 0;
        background: #ff8f19;
        border-radius: 0 .25rem .25rem 0;
    }

    .gift-progress .line-text {
        position: absolute;
        z-index: 99;
        /*background-color: #2c3e50;*/
        font-size: 14px;
        top:1px;
        overflow:hidden;
        vertical-align: middle;
        /*margin-left: .375rem;*/
    }

    .gift-progress_type_1 {
        border-radius: .78125rem;
    }
</style>