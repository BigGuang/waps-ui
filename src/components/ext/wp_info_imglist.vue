//多图横向展示，支持点击看大图
//依赖vantui的v-lazy
<!--images-->
<template>
    <div class="banners-container">
            <img v-for="(image, index) in images" :key="index" v-lazy="image" width="100px" class="scroll-items" @click="view(index)" style="transition: all 1s ease 0s; opacity: 1;"/>
    </div>
</template>

<script>
    import Vue from 'vue';
    import { ImagePreview } from 'vant';
    Vue.use(ImagePreview);

    export default {
        name: "wp_info_imglist",
        props:{
            images:{
                type:Array,
                default: function () {
                    return ['http://img.m3guo.com/group4/M00/00/25/wKgMHFvPEhuALmrvAATUW_P9vXE006.jpg',
                        'http://img.m3guo.com/group2/M00/00/D3/wKgMHFvPEh6ABMY4AAUhjz8vV5w059.jpg']
                }
            }
        },
        methods: {
            view(index){
                // this.$toast('ok!!!');
                ImagePreview({
                    images: this.images,
                    startPosition: index,
                    onClose() {
                        // do something
                    }
                });
            }
        }
    }
</script>

<style scoped>
    .banners-container {
        height: 9.375rem;
        padding: .9375rem 0;
        overflow-y: hidden;
        overflow-x: scroll;
        -webkit-overflow-scrolling: touch;
        white-space: nowrap;
        position: relative;
    }
    .scroll-items {
        background: #e1e1e1;
        display: inline-block;
        height: 9.375rem;
        width: 5.28125rem;
        margin-left: .9375rem;
    }
</style>