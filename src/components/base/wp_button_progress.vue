<template>
    <div id="wp_button_progress" class="wp_button_progress" v-bind:style="{width:width,height:height}" @click="onClick">
        <div class="line-text" v-bind:style="{color:font_color,width:width,height:height,lineHeight: height}">
            <slot>{{show_text}}</slot>
        </div>
        <div class="line-container" v-bind:style="{height:height}" v-bind:class="btn_disable">
            <div class="line-width" v-bind:style="{width:real_width+'%',height:height}"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "wp_button_progress",
        data() {
            return {
                show_text: "",
                disabled: true
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
                default: '40px'
            },
            type: {
                type: String,
                default: "default"
            },
            default_text: {
                type: String,
                default: ""
            },
            font_color: {
                type: String,
                default: "#fff"
            },
            disable: {
                type: String,
                default: "false"
            },
            loading: {
                type: String,
                default: "false"
            }
        },
        methods: {
            onClick() {
                if (this.disable !== 'true' && this.loading !== 'true') {
                    this.$emit('click')
                }
            },
            toMB(b) {
                if (b && typeof b != 'undefined') {
                    b = Math.abs(b);  //绝对值
                    let k = 1024;
                    let mb = b / k / k;
                    mb = mb.toFixed(2);
                    return mb;
                } else {
                    return '0.00';
                }
            },
        },
        computed: {
            real_width: function () {
                let that = this;
                let real_w = '';
                if (this.loading === 'true') {    //loading状态的时候才会显示进度
                    if (this.total !== "0") { //以当前完成和总数来自动计算
                        let ww = (this.current / this.total) * 100;
                        real_w = 100 - ww;
                    } else {    //直接给完成比例
                        let ww = this.ratio.replace("%", "");
                        real_w = 100 - ww;
                    }

                    let curr = 100 - real_w;
                    if (this.type === 'left') {  //以剩余百分比方式显示
                        that.show_text = "剩余" + real_w + "%";
                    } else if (this.type === 'default') {  //以完成百分比方式显示
                        that.show_text = "完成" + curr + '%';
                    } else if (this.type === 'app') {  //以下载文件比例方式显示
                        that.show_text = this.toMB(this.current) + "/" + this.toMB(this.total) + " MB"
                    }
                    return real_w;
                } else {
                    return that.show_text = this.default_text;
                }
            },
            btn_disable() {
                if (this.disable === 'true') {
                    return 'disable_true'
                } else {
                    return 'disable_false'
                }
            }
        }
    }
</script>

<style scoped>
    .wp_button_progress {
        /*background-color: #279fcf;*/
        vertical-align: middle;
        text-align: center;
        position: relative;
        margin: 0 auto;
    }

    .wp_button_progress .line-container {
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

    .disable_false {

    }

    .disable_true {
        opacity: .5;
    }

    .wp_button_progress .line-container .line-width {
        position: absolute;
        top: 0;
        right: 0;
        background: #ff8f19;
        border-radius: 0 .25rem .25rem 0;
    }

    .wp_button_progress .line-text {
        position: absolute;
        z-index: 99;
        /*background-color: #2c3e50;*/
        font-size: 14px;
        top: 1px;
        overflow: hidden;
        vertical-align: middle;
        /*margin-left: .375rem;*/
    }

    .gift-progress_type_1 {
        border-radius: .78125rem;
    }
</style>