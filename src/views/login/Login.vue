<template>
    <div class="login">
<!--        登录标题    -->
        <div class="title">登录</div>

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
                <!--                密码  -->
                <div class="password">
                    <span>密码：</span>
                    <label>
                        <input type="password" value="" placeholder="请输入密码" ref="login_password" >
                    </label>
                    <span class="forget">忘记密码？</span>
                </div>
            </form>
        </div>

<!--        记住我按钮 -->
        <div class="remember_me">
            <label><input type="checkbox" checked></label>
            <span>记住我</span>
        </div>
<!--        登录按钮-->
        <div class="login_button" @click="upload">
            <span >登录</span>
        </div>
        <!--提示用户-->
        <div class="alert" v-show="show">
            <span >请输入用户名和密码</span>
        </div>
<!--        其他登录方式-->
        <another-way></another-way>
<!--        注册提示-->
        <div class="register">
            <div>还没有账号?<span>立即注册</span></div>
        </div>
    </div>
</template>

<script>
import AnotherWay from "@/views/login/child_login/AnotherWay";
  export default {
    name: "LogIn",
    data(){
        return {
          show : false,
          userInfo : this.$store.state.personalData
        }
    },
    computed: {

    },
    methods: {
      upload(){
        //用户名和密码
        const username = this.$refs.login_username.value
        const password = this.$refs.login_password.value
        //如果用户名或密码为空
        if ((username === undefined || username === null || username === '') && (password === undefined || password === null || password === '')){
          setTimeout(() => {
            //两秒后显示内容去除
            this.show = false
          },2000);
          //显示提示内容
          this.show = true;
        }else {
          for (let user of this.userInfo) {
            //如果输入的用户名和存储的用户信息的用户名吻合
            if (user.username === username){
              //如果该用户的密码与存储的该用户名下的密码吻合
              if (user.password === password){
                // console.log('登录成功')
                this.$store.commit('user',user.id)
                return;
              }
            }

          }
          // const id = Number(1)
          //
          // console.log(this.$store.state.user);
          this.$router.push('/profile');
        }
      }
    },
    components: {
      AnotherWay
    },
    activated() {
      this.$refs.login_username.value = null
      this.$refs.login_password.value = null
    },
    mounted() {
      this.$refs.login_username.value = null
      this.$refs.login_password.value = null
    }
  }
</script>

<style scoped>
    .login {
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
    .forget {
        margin-left: 10px;
        font-size: 15px;
    }
    .remember_me{
        padding-top: 20px;
        padding-left: 110px;
        color: #fff;
    }
    .remember_me span {
        padding-left: 5px;
    }
    .remember_me input {
        /*
            未搜到改变复选框大小的方法， 寻找到的方法并没有生效
            如果想使用类似复选框的样式，则需要模拟
        */
        /*zoom: 180%;*/
        /*width: 100px;*/
    }
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
    .login_button span {
        padding-top: 5px;
        /*padding: 15px;*/
    }
    .register{
        padding-top: 150px;
        padding-left: 110px;
        color: #fff;
    }
    .register span{
        padding-left: 10px;
        color: #ef4562;
    }
</style>