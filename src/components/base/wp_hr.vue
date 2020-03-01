<template>
    <hr width='100%' size=1 :color='color' align=center class="wp_hr" noShade>
</template>

<script>
    export default {
        name: "wp_hr",
        props:{
            color:{
                type:String,
                default:'#ddd'
            }
        }
    }
</script>

<style scoped>
    .wp_hr{
        /*border:0;*/
        border-style:dotted;
        filter:alpha(opacity=10,finishopacity=100,style=1,startX=100,startY=100,finishX=0,finishY=0);
    }
</style>