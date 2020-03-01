//应用详情
//依赖 van-row,van-col,van-button
<!--title-->
<!--img-->
<!--info-->
<!--file_info-->
<!--text-->
<template>
    <van-row type="flex">
        <van-col span="5">
            <van-icon :name="icon" size="50px"/>
        </van-col>
        <van-col span="13">
            <div class="cell_center">
                <div class="cell_title">{{title}}</div>
                <div class="cell_info">{{info}}</div>
                <div class="cell_info">{{file_info}}</div>
            </div>
        </van-col>
        <van-col span="6">
            <div class="cell_right">
                <van-button round plain type="primary" size="small">{{btntext}}</van-button>
            </div>
        </van-col>
    </van-row>
</template>

<script>
    export default {
        name: "wp_app_info",
        props: {
            title: String,
            img: {
                type: String,
                default: 'https://tse3-mm.cn.bing.net/th?id=OIP.j2ktHg9pH9JOVq_hzKcGRgHaHf&pid=Api'
            },
            info: String,
            file_info: String,
            text: {
                type: String,
                default: '打开'
            }
        }
    }
</script>


<style scoped>

</style>