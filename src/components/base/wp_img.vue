<template>
    <img v-lazy="src" v-bind:style="{width:imgWidth,height:imgHeight}" v-bind:class="imgCss">
</template>

<script>
    export default {
        name: "wp_img",
        props: {
            src: {
                type: String,
                default: "https://cdn2.iconfinder.com/data/icons/55-files-and-documents/512/Icon_32-512.png"
            },
            size: {
                type: String,
                default: "50px"
            },
            width: String,
            height: String,
            type: {
                type: String,
                default: 'default'
            },
            shadow:{
                type:String,
                default: 'false'
            },
        },
        computed: {
            imgWidth() {
                let ss=this.size;
                if (this.width != null && this.width !== '' && typeof this.width != 'undefined') {
                    ss= this.width
                }
                return ss
            },
            imgHeight() {
                let ss=this.size;
                if (this.height && this.height !== '' && typeof this.height != 'undefined') {
                    ss= this.height
                }
                return ss
            },
            imgCss() {
                let css='';
                if(this.shadow === 'true') {
                    css=css+' shadow'
                }
                if (this.type === 'app') {
                    css=css+ ' wp_img_app'
                } else if (this.type === 'round') {
                    css=css+ ' wp_img_round'
                }
                return css;
            }
        }
    }
</script>

<style scoped>
    .wp_img_round {
        border-radius: 50%;
    }

    .wp_img_app {
        border-radius: 10px;
    }

    .shadow{
        filter: progid:DXImageTransform.Microsoft.Shadow(color=#909090, direction=120, strength=4);
        -moz-box-shadow: 2px 2px 10px #909090;
        -webkit-box-shadow: 2px 2px 10px #909090;
        box-shadow: 2px 2px 10px #909090;
    }
</style>