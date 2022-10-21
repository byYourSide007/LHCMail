<template >
    <div class="login">
        <nav-bar class="login-nav"><!--导航栏-->
            <nav-bar-item><template #center>登录</template></nav-bar-item>
        </nav-bar>
        <div class="content">
            <div>
                <form action="#" class="form-input">
                    <div class="username">
                        <label><input type="text"
                                      placeholder="请输入用户名"
                                      ref="login_username"
                                      @blur="alertUsername"></label>
                        <div :class="alertUsernameClass">请输入用户名</div>
                    </div>
                    <div class="password">
                        <label class="passwordLabel">
                            <input type="password"
                                      placeholder="请输入密码"
                                      ref="login_password"
                                      @blur="alertPassword">
                            <img src="@/assets/img/login/open_eyes.svg"
                                 alt="close"
                                 v-if="passwordShow"
                                 @click="closeEyes">
                            <img src="@/assets/img/login/eyes_close.svg"
                                 alt="close"
                                 v-if="!passwordShow"
                                 @click="openEyes"></label>
                        <div :class="alertPssswordClass">请输入密码</div>
                    </div>
                </form>
            </div>
            <!--        登录按钮-->
            <div class="login_button" @click="upload">
                <span>登录</span>
            </div>
            <!--        其他登录方式-->
            <another-way class="another_way"></another-way>
            <!--        注册提示-->
            <div class="register">
                <div>还没有账号?<span >立即注册</span></div>
            </div>
        </div>
    </div>
</template>

<script>
  import NavBar from "@/components/common/navbar/NavBar";
  import NavBarItem from "@/components/common/navbar/NavBarItem";
  import AnotherWay from "@/views/login/child_login/AnotherWay";
  export default {
    name: "LogIn",
    data(){
        return {
          show : false,
          userInfo : this.$store.state.personalData,
          alertUsernameClass : "not_active",
          alertPssswordClass : "not_active",
          passwordShow : false
        }
    },
    computed : {

    },
    methods: {
      upload(){
        //用户名和密码
        const username = this.$refs.login_username.value
        const password = this.$refs.login_password.value
        //如果用户名或密码为空
        if ((username === undefined || username === null || username === '') && (password === undefined || password === null || password === '')){
          setTimeout(() => {
            this.show = false;            //两秒后显示内容去除
          },2000);
          this.show = true;          //显示提示内容
        }else {
          for (let user of this.userInfo) {
            if (user.username === username && user.password === password){
                this.$store.commit('user',user.id);
            }
          }
          this.$router.push('/profile');
        }
      },
      register(){
        this.$router.push('/register')
      },
      alertUsername(){
        const value = this.$refs.login_username.value;
        if (value){
          this.alertUsernameClass = "not_active";
          this.$refs.login_username.style.borderColor = "gray";
        }else {
          this.alertUsernameClass = "active";
          this.$refs.login_username.style.borderColor = "red";
        }
      },
      alertPassword() {
        const value = this.$refs.login_password.value;
        if (value) {
          this.alertPssswordClass = "not_active";
          this.$refs.login_password.style.borderColor = "gray";
        } else {
          this.alertPssswordClass = "active";
          this.$refs.login_password.style.borderColor = "red";
        }
      },
      openEyes() {
        this.passwordShow = true;
        this.$refs.login_password.type = "text"
      },
      closeEyes() {
        this.passwordShow = false,
        this.$refs.login_password.type = "password"
      }
    },
    components: {
      NavBarItem,
      NavBar,
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
        height: 100vh;
        background-image: url('@/assets/img/login/background.jpg');
        background-size: contain;
        /*background-color: #999999;*/
        /*background-repeat: no-repeat;*/
        z-index: 1;
    }
    .login-nav {
        font-size: 20px;
        font-weight: 700;
        color: #fff;
        background-color: #eb4868;
    }
    .content {
        /*position: relative;*/
        width: 390px;
        top: 44px;
        height: calc(100vh-44px);
        margin: 0 auto;
    }
    .form-input{
        position: relative;
        width: 390px;
        height: 80px;
        margin-top: 10vh;
    }
    .form-input input {
        padding: 5px 3px;
    }
    .username,.password {
        width: 186px;
        margin: 0 auto;
    }
    .password{margin-top: 20px;}
    .passwordLabel {
        display: flex;
        position: relative;

    }
    .password img {
        position: absolute;
        width: 20px;
        top: 6px;
        right: 3px;
        margin: auto;
    }
    /*.username,.password input ::*/
    .login_button {
        width: 200px;
        height: 45px;
        /*margin-top: 50px;*/
        margin: 50px auto;
        text-align: center;
        line-height: 45px;
        border-radius: 15px;
        font-size: 30px;
        background-color: #ff5777;
        color: #fff;
    }
    .another_way {
        width: 390px;
    }
    .register{
        position: relative;
        width: 172px;
        /*margin: 0 auto;*/
        margin: 100% auto;
        color: #fff;
    }
    .register span{
        padding-left: 10px;
        /*color: #ef4562;*/
        /*color: red;*/
        color: violet;
    }
    .active {
        display: block;
        margin: 5px  ;
        color: red;
    }
    .not_active {
        display: none;
    }
</style>