<template>
    <div id="wp_iframe_g" class="warp">
        <iframe id="wp_iframe" ref="wp_iframe" class="my-game-container" name="my-game-container" :src="url"
                :width="width" :height="fullHeight"></iframe>
    </div>
</template>

<script>
    // 注意这里要实时获取宽高，尤其高度，游戏会自动适配

    export default {
        name: "wp_iframe",
        mounted: function () {
            const that = this;
            window.onresize = () => {
                return (() => {
                    window.fullHeight = document.documentElement.clientHeight;
                    that.fullHeight = window.fullHeight;
                })()
            };
        },
        watch: {
            fullHeight (val) {
                if(!this.timer) {
                    this.fullHeight = val
                    this.timer = true
                    let that = this
                    setTimeout(function (){
                        that.timer = false
                    },400)
                }
            }
        },
        props: {
            url: String
        },
        data() {
            return {
                width: '100%',
                height: '100%',
                fullHeight: document.documentElement.clientHeight
            }
        },
        methods: {

        }
    }
</script>

<style scoped>
    .warp {
        -webkit-overflow-scrolling: touch;
        overflow-scrolling: touch;
        overflow-y: scroll;
        overflow-x: hidden;

        position: fixed;
        width: 100%;
        min-height: 100%;
        max-width: 100%;
        display: block;
    }

    .my-game-container {
        width: 100%;
        min-height: 100%;
        display: block;
        padding: 0;
        margin: 0;
        transition: transform .32s, opacity .6s;
        opacity: 1;
        border: none;
        box-shadow: none;
    }

    body {
        background: #fff;
        -webkit-tap-highlight-color: rgba(88, 44, 22, 0);
    }


</style>