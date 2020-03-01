//用户登陆
//todo: 全新开发，登陆过程互动
<template>
    <div class="wp_user_login">
        <div class="top">
            <div class="top_icon">
                top
            </div>
        </div>
        <div class="center">
            center
<!--            <wp_input width="300px"></wp_input>-->
            <van-field
                    v-model="phone"
                    left-icon="phone"
                    placeholder="请输入手机号"
                    error-message="手机号格式错误"
            />
            <van-field
                    v-model="sms"
                    left-icon="lock"
                    center
                    clearable
                    placeholder="请输入短信验证码"
            >
                <van-button slot="button" size="small" type="primary">发送验证码</van-button>
            </van-field>
        </div>
        <div class="bottom">
            bottom
        </div>
    </div>
</template>

<script>
    import wp_input from "@/components/base/wp_input";
    export default {
        name: "wp_login_form",
        components:{wp_input},
        data(){
            return {
                msg:'用户登陆组件'
            }
        }
    }
</script>

<style scoped>
    .wp_user_login{
        background-color: #3fe28f;
        /*display: flex;*/
        flex-direction: row;
        justify-content:center;
        text-align: center;
    }

    .wp_user_login .top{
        background-color: thistle;
        width: 100%;
    }

    .top_icon{
        background-color: red;

    }

    .wp_user_login .center{
        background-color: coral;
        width: 100%;
    }

    .wp_user_login .bottom{
        background-color: bisque;
        width: 100%;
    }
</style>