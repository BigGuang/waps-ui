//显示积分
//原生 html+css

<template>
    <div class="wp_points" v-bind:style="{width:width,color:font_color,fontSize:font_size}" v-bind:class="back">
        <div class="icon_span">
            <img class="money_icon" :src="icon"/>
        </div>
        <div class="points_text"><slot></slot></div>
    </div>
</template>

<script>
    export default {
        name: "wp_points",
        props: {
            icon:{
                type: String,
                default: 'http://demo.sc.chinaz.com/Files/pic/icons/6003/b10.png'
            },
            width: {
                type: String,
                default: "auto"
            },
            font_size:{
                type: String,
                default: "13px"
            },
            font_color:{
                type: String,
                default: "#ff9000"
            },
            background:{
                type:Boolean,
                default:true
            }
        },
        computed:{
            back(){
                if(this.background===true) {
                    return 'wp_points_bg'
                }else{
                    return ''
                }
            }
        }
    }
</script>

<style scoped>
    .wp_points {
        line-height: 21px;
        border-radius: .625rem;
        display: flex;
        font-weight: bold;
        height: 20px;
    }
    .wp_points_bg{
        background: rgba(0, 0, 0, .34);
    }

    .wp_points .money_icon {
        width: 20px;
        height: 20px;
        border-radius: .625rem;
    }

    .wp_points .icon_span {
        border-radius: .625rem;
    }

    .wp_points .points_text {
        text-align: left;
        padding-left: 5px;
        padding-right: 5px;
        min-width:20px;
    }
</style>