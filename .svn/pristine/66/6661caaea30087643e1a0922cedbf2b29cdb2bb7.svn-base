<template>
    <div class="inpus" v-bind:style="{width:width}">
        <i class="icons-v2" v-bind:style="{background:'url('+icon+')'}"></i> <input type="text" :placeholder="placeholder" class="long">
        <div id="getCode-v-2" class="codenormal">
            获取验证码
        </div>
    </div>
</template>

<script>
    export default {
        name: "wp_input",
        props:{
            width:{
                type:String,
                default:"100%"
            },
            icon:{
                type:String,
                default:""
            },
            placeholder:{
                type: String,
                default: ""
            }
        }
    }
</script>

<style scoped>
    .inpus {
        height: 3.125rem;
        position: relative;
        border-bottom: 1px solid #858b94;
    }

    .inpus .icons-v2 {
        width: 1rem;
        height: 1.1875rem;
        position: absolute;
        bottom: .625rem;
        left: 0;
    }

    .inpus input {
        height: 1.25rem;
        line-height: 1.25rem;
        /*color: #fff;*/
        background: transparent;
        position: absolute;
        bottom: .625rem;
        left: 1.5625rem;
        border: none;
        box-shadow: none;
    }

    .long {
        width: 12.8125rem;
    }

    .short {
        width: 7.8125rem;
    }

    #getCode-v-2 {
        display: inline-block;
        padding: 0 0 0 .625rem;
        height: 1.25rem;
        line-height: 1.25rem;
        position: absolute;
        bottom: 0;
        right: 0;
        font-size: .9375rem;
        border: .625rem solid transparent;
        border-right: none;
        text-align: right;
    }

    .codenormal {
        color: #e4e4e4;
    }
</style>