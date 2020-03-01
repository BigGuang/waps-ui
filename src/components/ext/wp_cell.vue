//cell单元格,适用于app展示
//内部依赖 wp_icon、wp_button
//todo:解决显示积分的样式布局，完善多个标签
<!--icon-->
<!--icon_size-->
<!--title-->
<!--info-->
<!--desc-->
<!--btntext-->
<!--btnwidth-->
<!--btntype-->
<template>
    <div class="game-long-container">
        <!--<img src="http://img.m3guo.com/group4/M00/00/2E/wKgMHFxRg8eATwEZAAC51V2Ur_c564.png"-->
        <!--class="long-img">-->
        <wp_icon :img="icon" :size="icon_size" class="long-icon"/>
        <div class="g-long-name">
            <slot name="title">
                <span class="g-l-name">{{title}}</span>
                <slot name="tag">
                    <!--<span class="g-l-tag g-l-3">精品</span><span-->
                        <!--class="g-l-tag g-l-4">礼包</span>-->
                </slot>
            </slot>
        </div>

        <div class="g-long-info">
            <slot name="info">
                <span class="g-l-type">{{info}}</span>
            </slot>
        </div>

        <div class="g-long-desc">
            <slot name="desc">{{desc}}</slot>
        </div>
        <div class="wp_l_right">
            <slot name="button">
                <wp_button :width="btn_width">
                    {{btn_text}}
                </wp_button>
            </slot>
        </div>
    </div>
</template>

<script>
    import wp_icon from "@/components/base/wp_icon";
    import wp_button from "@/components/base/wp_button";

    export default {
        name: "wp_cell",
        components: {wp_button, wp_icon},
        props: {
            title: String,
            info: String,
            desc: String,
            icon: {
                type: String,
                default: 'https://tse2-mm.cn.bing.net/th?id=OIP.Pdo0iVwqyX51xhAF75anyAHaHa&w=193&h=194&c=7&o=5&dpr=2&pid=1.7'
            },
            icon_size: {
                type: String,
                default: '60px'
            },
            btn_text: {
                type: String,
                default: '打开'
            },
            btn_width: {
                type: String,
                default: '60px'
            },
            btn_type: {
                type: String,
                default: 'primary'  //default、primary、info、warning、danger
            }
        }
    }
</script>


<style scoped>
    .game-long-container {
        height: 3.75rem;
        padding: .625rem 0;
        position: relative;
        color: #000;
        margin: 2px 15px;
    }

    .game-long-container .long-icon {
        width: 3.75rem;
        height: 3.75rem;
        display: block;
        position: absolute;
        top: .625rem;
        left: 0;
        border-radius: 12px;
    }

    .game-long-container .g-long-name {
        position: absolute;
        top: .625rem;
        left: 4.6875rem;
        text-align: left;
        height: 1.25rem;
    }

    .game-long-container .g-long-name span {
        display: inline-block;
        float: left;
        margin-right: .1875rem;
    }

    .game-long-container .g-l-name {
        max-width: 8.75rem;
        font-size: .9375rem;
        height: 1.25rem;
        line-height: 1.25rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .game-long-container .g-l-tag {
        padding: 0 .125rem;
        min-width: .6875rem;
        border-radius: 3px;
        text-align: center;
        font-size: .5625rem;
        height: .9375rem;
        margin-top: .15625rem;
        line-height: .9375rem;
    }

    .game-long-container .g-l-3 {
        color: #fff;
        background: #8b65f5;
    }

    .game-long-container .g-l-4 {
        color: #fff;
        background: #e7af42;
    }

    .game-long-container .g-l-6 {
        background: #3589d7;
    }

    .game-long-container .g-long-info .g-l-type {
        margin-right: .5625rem;
    }

    .game-long-container .g-long-info span {
        height: 1.25rem;
        line-height: 1.25rem;
        display: inline-block;
        float: left;
        position: relative;
    }

    .game-long-container .s-g-l {
        color: #d77d12;
        font-weight: 700;
    }

    .game-long-container .g-long-info {
        color: #6c7583;
        font-size: .6875rem;
        height: 1.25rem;
        position: absolute;
        top: 2.03125rem;
        left: 4.6875rem;
    }

    .game-long-container .g-long-desc {
        color: #6c7583;
        height: .9375rem;
        line-height: .9375rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        position: absolute;
        bottom: .625rem;
        left: 4.6875rem;
        font-size: .75rem;
    }

    .game-long-container .wp_l_right {
        position: absolute;
        top: 50%;
        right: 0;
        text-align: center;
        width: 100px;
        height: 100%;
        transform: translateY(-50%);
    }

</style>