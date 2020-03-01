//插屏
//原生html+css
//todo:可指定默认关闭方式。背景颜色可设置
<!--value-->
<!--width-->
<!--height-->
<!--bgColor-->
<!--transparent-->
<template>
    <div v-if="value" >
        <div class="wp-popup" style="z-index: 9999;" v-bind:style="{backgroundColor:bgColor}" >
            <slot>
            </slot>
        </div>
        <div class="wp-pop-overlay" @touchmove.prevent style="z-index: 8888;" @click="close"></div>
    </div>
</template>
<script>
    export default {
        name: "wp_pop",
        props: {
            value: {
                type: Boolean,
                default: false
            },
            width: {
                type: String,
                default: '100%'
            },
            height: {
                type: String,
                default: '100%'
            },
            bgColor: {
                type: String,
                default: ''
            },
            transparent: {
                type: String,
                default: '100%'
            },
            lock: {
                type: Boolean,
                default: true
            }
        },
        watch: {
            value: function (val) {
                // if(this.lock) {
                // if (val) {
                //     document.body.style.overflow = 'hidden';
                //     document.documentElement.style.overflow = 'hidden'
                // } else {
                //     document.body.style.overflow = 'auto';
                //     document.documentElement.style.overflow = 'auto'
                // }
                // }
            }
        },
        methods: {
            close() {
                this.$emit('input', false) //v-model绑定的就是input事件
            }
        }
    }
</script>

<style scoped>
    .wp-popup {
        position: fixed;
        width: 100%;
        padding: 20px;
        box-sizing: border-box;
    }

    .wp-popup {
        position: fixed;
        top: 50%;
        left: 50%;
        max-height: 100%;
        overflow-y: auto;
        /*background-color: #fff;*/
        -webkit-transition: 0.3s ease-out;
        transition: 0.3s ease-out;
        -webkit-overflow-scrolling: touch;
        -webkit-transform: translate3d(-50%, -50%, 0);
        transform: translate3d(-50%, -50%, 0);
    }

    .wp-pop-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.7);
    }
</style>