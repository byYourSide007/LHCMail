<template>
  <div id="app">
    <keep-alive exclude="DetailsView">
      <component :is="currentRoute"/>
    </keep-alive>
    <main-tab-bar></main-tab-bar>
  </div>
</template>
<script>
  import MainTabBar from "@/components/content/mainTabbar/MainTabBar";

  //保存的路由界面
  import Home from "@/views/home/Home";
  import Category from "@/views/categorg/Category";
  import Cart from "@/views/cart/Cart";
  import profile from "@/views/profile/profile";
  import details from '@/views/details/Details';
  import login from '@/views/login/Login'
  import Register from "@/views/register/Register";
  import Purchase from "@/views/purchase/Purchase";
  import Order from "@/views/order/Order";
  export default {
    name : 'App',
    components : {
      MainTabBar,
      Home,
      Category,
      Cart,
      profile,
      details,
      login,
      Register,
      Purchase,
      Order
    },
    data(){
      return {
        // current : this.$route.name,
      }
    },
    computed : {
      currentRoute(){
        switch (this.$route.name) {
            case 'home' : return 'Home';
            case 'category' : return 'Category';
            case 'cart' : return 'Cart';
            case 'profile' : return 'profile';
            case 'login' : return 'login';
            case 'Register' : return 'register';
            case 'Purchase' : return 'purchase';
            case  'Order' : return 'purchase'
            default : return this.$route.name;
        }
      },
    },
    watch : {
      current(){

      }
    },


  }
</script>
<style>
  @import "assets/css/base.css";
  @import "~normalize.css";
#app {

}

</style>
