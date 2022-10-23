<template >
    <div class="login">
        <nav-bar class="login-nav"><!--导航栏--><nav-bar-item><template #center>登录</template></nav-bar-item></nav-bar>
        <div class="content">
            <form-data></form-data>
            <!--        其他登录方式-->
            <another-way class="another_way"></another-way>
<!--                    注册提示-->

        </div>
        <div class="register">
            <div>还没有账号?<span >立即注册</span></div>
        </div>
    </div>
</template>

<script>
  import NavBar from "@/components/common/navbar/NavBar";
  import NavBarItem from "@/components/common/navbar/NavBarItem";
  import AnotherWay from "@/views/login/child_login/AnotherWay";
  import FormData from "@/views/login/child_login/FormData";
  export default {
    name: "LogIn",
    components: {
      NavBarItem,
      NavBar,
      AnotherWay,
      FormData
    },
  }
</script>

<style scoped>
    .login {
        /*保障背景图片能够盖住TabBar的关键*/
        position: relative;
        height: 100vh;
        width: 100vw;
        background-image: url('@/assets/img/login/background.jpg');
        /*background-size: contain;*/
        background-size: 100%;
        background-repeat: no-repeat;
        z-index: 9;
    }
    .login-nav {
        width: 100%;
        font-size: 20px;
        font-weight: 700;
        color: #fff;
        background-color: #eb4868;
    }
    .content {
        position: relative;
        width: 100%;
        height: calc(100vh - 44px);
    }

    .another_way {
        width: 390px;
    }
    .register{
        position: absolute;
        width: 172px;
        bottom: 10px;
        left: calc((100% - 172px)/2);
        /*margin: 0 auto;*/
        color: #fff;
    }
    .register span{
        padding-left: 10px;
        color: violet;
    }
</style>