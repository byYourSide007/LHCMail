<template>
    <div id="mine">
<!--        导航栏-->
        <nav-bar>
            <nav-bar-item class="nav-bar-item"><template #center> <div>ByYourSide</div></template></nav-bar-item>
        </nav-bar>
<!--        个人信息-->
        <personal-data :personalData="personalData[user]"
                       ></personal-data>
<!-- collection and  shop footer -->
        <choose-item></choose-item>
<!--        我的订单 order for goods -->
        <order-for-goods></order-for-goods>
<!--    展示列表信息-->
        <list-item :orderList="orderList"></list-item>
<!--    服务信息-->
        <list-item :orderList="serverList"></list-item>
    </div>
</template>

<script>
    import NavBar from "@/components/common/navbar/NavBar";
    import NavBarItem from "@/components/common/navbar/NavBarItem";

    import PersonalData from "@/views/profile/childProfile/PersonalData";
    import ChooseItem from "@/views/profile/childProfile/ChooseItem";
    import OrderForGoods from "@/views/profile/childProfile/OrderForGoods";
    import ListItem from "@/views/profile/childProfile/ListItem";
  export default {
    name: "ProfileView",
    data() {
      return {
        personalData: this.$store.state.personalData,
        orderList: [
          {
            img: require('@/assets/img/profile/order/message.svg'),
            message: '我的消息'
          },
          {
            img: require('@/assets/img/profile/order/add_up.svg'),
            message: '积分商城'
          },
          {
            img: require('@/assets/img/profile/order/vip.svg'),
            message: '会员服务'
          },
        ],
        serverList: [
          {
            img: require('@/assets/img/profile/set.svg'),
            message: '设置'
          },
          {
            img: require('@/assets/img/profile/more.svg'),
            message: '更多'
          }
        ],
        user: Number(0),
      }
    },
    methods: {
        // jumpToLogin(){
        //     this.$router.push('/login')
        // },
    },
    components: {
      NavBar,
      NavBarItem,
      PersonalData,
      ChooseItem,
      OrderForGoods,
      ListItem
    },
    activated() {
      this.user = this.$store.state.user
    },
    mounted() {
      this.user = this.$store.state.user

    }
    // unmounted() {
    //   console.log('destroyed');
    // },
  }
</script>

<style scoped>
    #mine{
        /*background-color: #006666;*/
    }
    .nav-bar-item {
        background-color: #ff5777;
        color: #fff;
        font-size: 20px;
    }
</style>