<template>
    <section class="dock">
        <h2 class="title">{{title}}</h2>
        <slot></slot>
    </section>
</template>

<script>
    export default {
        name: "wp_area",
        props:{
            title:{
                type:String,
                default:''
            }
        }
    }
</script>

<style scoped>
    .dock{
        line-height:1;
        color:#323233;
        display: block;
        background-color: #fafafa
    }
    .dock .title{
        margin: 0;
        font-weight: 400;
        font-size: 14px;
        color: rgba(69,90,100,.6);
        padding: 15px 15px 15px 15px;
    }
</style>