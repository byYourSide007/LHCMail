<template>
        <div id="personal-data" @click="jumpToLogin">
<!--        <div id="personal-data" >-->
<!--            <div class="profile_photo"><img src="@/assets/img/profile/profile_photo.svg" alt="头像"></div>-->
            <div class="profile_photo"><img :src="personalData.arrowhead" alt="头像"></div>
            <div class="login">
                    <div class="login-words">
                        <p>{{personalData.username}}</p>
                    </div>
                    <div class="login-phone">
                        <img src="@/assets/img/profile/phone.svg" alt="电话">
                        <span>{{personalData.phone}}</span>
                    </div>
            </div>
            <div class="arrowhead">
                    <img src="@/assets/img/profile/arrowhead.svg" alt="箭头">
            </div>
<!--            <component :is="currentRoute"/>-->
        </div>
<!--    <router-view></router-view>-->
</template>

<script>
  export default {
    name: "PersonalData",
    data(){

    },
    props: {
      personalData: {
        type: Object,
        default(){
          return {
            id : 0,
            arrowhead : 'src/assets/img/profile/profile_photo.svg',
            username : '登录/注册',
            phone: '暂无手机绑定'
          }
        }
      }
    },
    methods: {
      jumpToLogin(){
        this.$router.push('/login')
      }
    },
    mounted() {
      console.log(this.$store.state.user)
    }
  }
</script>

<style scoped>
    #personal-data{
        display: flex;
        background-color: #ff5777;
        padding-bottom: 13px;
    }
    .profile_photo{
        width: 60px;
        background-color: #f2f5f8;
        border-radius: 50%;
        margin-left: 20px;
        /*padding-left: 100px;*/
    }
    .profile_photo img{
        width: 60px;
        border-radius: 50%;
        /*padding-left: 100px;*/
    }
    .login{
        padding-left: 20px;
        /*position: relative;*/
        color: #fff;
        flex: 1;
    }
    .login-words {
        /*padding-top: 15px;*/
        /*position: relative;*/
        /*margin-top: 100px;!**!*/
        font-size: 20px;
        /*line-height: 0.5;*/

        color: #fff;

    }
    .login-phone {
        display: flex;
        position: absolute;
        padding-top: 0;
        /*padding-bottom: 55px;*/

        top: 90px;
        /*left: 100px;*/

    }
    .login-phone img{
        width: 20px;
        /*padding-top: -10px;*/
    }
    .login-phone span{
        font-size: 15px;
        font-weight: 300;
        padding-top: 5px;
        color: #fff;

    }
    .arrowhead img{
        width: 25px;
        padding-top: 20px;
        right: 0;
    }
</style>