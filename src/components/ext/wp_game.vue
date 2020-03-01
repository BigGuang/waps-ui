<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <div id="wp_game">
        <!--<wp_float/>-->
        <wp_float  :percent="process">
            <slot name="default" >
                <div style="font-size: 20px">
                    {{level}}
                </div>
            </slot>
            <template slot="sub_menu">
                <table>
                    <tr>
                        <td>
                            <wp_icon @click.native="close"
                                    img="http://icons.iconarchive.com/icons/custom-icon-design/mono-general-1/512/close-icon.png"
                                    size="35px"/>
                        </td>
                        <td>
                            <wp_icon
                                    img="https://cdn0.iconfinder.com/data/icons/feather/96/591236-share-512.png"
                                    size="35px"/>
                        </td>
                    </tr>
                </table>
            </template>
        </wp_float>

        <!--<div class="div_lay" @mousedown="down" @touchstart="down"></div>-->
        <wp_iframe ref="wp_gw" :url="url"/>
    </div>
</template>

<script>
    import wp_float from "@/components/ext/wp_float";
    import wp_iframe from "@/components/game/wp_iframe";
    import wp_icon from "@/components/base/wp_icon";

    export default {
        name: "wp_game",
        components: {wp_iframe, wp_float, wp_icon},
        data() {
            return {
                level: 5
            }
        },
        mutated: {},
        props: {
            process: {
                type: Number,
                default: 0.0
            },
            url: {
                type: String,
                default: ''
            }
        },
        created: function () {
            this.process = 0.0;
            let that = this;
            setInterval(function () {
                that.process = that.process + 0.1;
                if (that.process >= 1.0) {
                    that.process = 0.0
                    that.level=that.level-1;
                    // that.r0_color=that.r1_color;
                    // that.r1_color="#F1d"
                    if(that.level<1){
                        that.level=0
                    }
                }
            }, 1000)
        },
        mounted() {

        },
        methods: {
            down() {
                this.$toast('down');
            },
            close() {
                this.$toast('close');
            },
            clickFn() {
                this.$toast('click')
            },
            blurFn() {
                this.$toast('blur')
            },
            focusFn() {
                this.$toast('focus')
            }
        }
    }
</script>

<style scoped>
    .div_lay {
        position: fixed;
        z-index: 99999;
        pointer-events: none;
        top: 0;
        width: 100%;
        min-height: 400px;
        display: block;
        padding: 0;
        margin: 0;
        transition: transform .32s, opacity .6s;
        opacity: 1;
        background-color: yellow;
        background: rgba(255, 255, 255, 0.0);
    }
</style>