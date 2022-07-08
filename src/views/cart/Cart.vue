<template>
    <div id="cart">
<!--        导航栏-->
            <nav-bar>
                <nav-bar-item class="tab-bar-item">
                    <template #center><div>购物车({{cartListLen}})</div> </template>
                </nav-bar-item>
            </nav-bar>
<!--        商品列表-->
        <cart-list></cart-list>

<!--        底部汇总-->

    </div>
</template>

<script>
// <!--    外部组件-->
    import NavBar from "@/components/common/navbar/NavBar";
    import NavBarItem from "@/components/common/navbar/NavBarItem";

    //内部组件
    import CartList from "@/views/cart/childCart/CartList";

    import { mapGetters} from 'vuex'
  export default {
    name: "CartView",
    data(){

    },
    computed: {
      //官方提供的一种解构 getters 的一种方式
      // ...mapGetters({
      //   // cartListLen,  不能用这种方式调取，会显示undefined
      //   cartListLen:'cartListLen',
      // }),

      //另一种展现方式,使用数组
      ...mapGetters([
          'cartListLen',
      ]),


      // cartListLen(){
      //   return this.$store.state.cartList.length;
      // }
    },
    components: {
      NavBar,
      NavBarItem,
      CartList
    },

  }
</script>

<style scoped>
    #cart{
        /*height: 100vh;*/
    }
    .tab-bar-item{
        background-color: #ff5777;
        color: #fff;
        font-weight: 600;
    }
</style>