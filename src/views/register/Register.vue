<template>
    <div class="register">
        <!--        注册标题    -->
        <div class="title">注册新用户</div>

        <!--        输入内容-->
        <div class="label">
            <form action="#" class="input">
                <!--                用户名 -->
                <div class="username">
                    <span>用户名：</span>
                    <label>
                        <input type="text" placeholder="请输入用户名" ref="login_username">
                    </label>
                </div>
                <!--真实姓名-->
                <div class="password">
                    <span>姓名：</span>
                    <label>
                        <input type="text" placeholder="请输入真实姓名" ref="login_username">
                    </label>
                </div>
                <!--                密码  -->
                <div class="password">
                    <span>密码：</span>
                    <label>
                        <input type="password" value="" placeholder="请输入密码" ref="login_password" >
                    </label>
                </div>
                <!--确认密码                -->
                <div class="password">
                    <span>确认：</span>
                    <label>
                        <input type="password" value="" placeholder="请输入密码" ref="login_password" >
                    </label>
                </div>
<!--               联系电话-->
                <div class="password">
                    <span>电话：</span>
                    <label>
                        <input type="text" value="" placeholder="联系电话" ref="login_password" >
                    </label>
                </div>
<!--                收获地址-->
                <div class="password">
                    <span>地址：</span>
                    <label>
                        <input type="text" value="" placeholder="请输入收获地址" ref="login_password" >
                    </label>
                </div>
            </form>
        </div>
        <!--        登录按钮-->
        <div class="login_button" @click="upload">
            <span >注册</span>
        </div>
        <!--提示用户-->
        <div class="alert" v-show="show">
            <span >请输入用户名和密码</span>
        </div>
    </div>
</template>

<script>
  export default {
    name: "Register_er",
    methods: {
      upload(){
        this.$router.push('/login');
      }
    }
  }
</script>

<style scoped>
    .register {
        /*保障背景图片能够盖住TabBar的关键*/
        position: relative;
        /*display: flex;*/
        height: 100vh;
        background-image: url('@/assets/img/login/background.jpg');
        background-size: 50vh;
        z-index: 1;
    }
    .title{
        align-items: center;
        padding-left: 160px;

        font-size: 30px;
        color: #fff;

        border-bottom: 1px solid #a3a3a5;
    }
    .label {
        display: flex;
        color: #fff;
    }
    .input{
        flex: 1;
        padding-top: 240px;
        /*padding-right: 100px;*/
        padding-left: 50px;
        /*right: ;*/
        /*right: 0;*/
    }
    .password{
        margin-top: 10px;
    }
    .password input{
        margin-left: 15px;
    }
    /*.password_sure input{*/
    /*    margin: 15px 0;*/
    /*}*/
    /*提示内容*/
    .alert{
        flex: 1;
        position: absolute;
        width: 80vw;
        font-size: 30px;
        /*padding-left: 30px;*/
        margin-top: -250px;
        margin-left: 30px;
        text-align: center;
        border-radius: 20%;
        box-shadow: #eb4868;
        opacity: 0.6;
        background-color: #ef4562;
        color: #fff;
    }
    .login_button {
        width: 200px;
        height: 45px;
        margin-top: 50px;
        margin-left: 110px;
        text-align: center;
        border-radius: 5%;
        font-size: 30px;
        background-color: #ff5777;
        color: #fff;
    }
</style>