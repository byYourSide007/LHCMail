<template>
    <div class="purchase">
        <div class="back"
            @click="toCart"> &lt;确认订单 </div>
        <location></location>
        <scroll class="content" ref="scroll" >
            <list-item v-for="(item,index) in cartList"
                       :key="index"
                       :product="item">
            </list-item>
            <div class="content_serve">
                <server></server>
            </div>
        </scroll>
        <purchase-bottom-bar></purchase-bottom-bar>
    </div>
</template>

<script>
  import {mapGetters} from "vuex";
  import Scroll from "@/components/common/scroll/Scroll";
  import ListItem from "@/views/cart/childCart/ListItem";
  import Location from "@/views/purchase/childPurchase/Location";
    import Server from "@/views/purchase/childPurchase/Server";
 import PurchaseBottomBar from "@/views/purchase/childPurchase/PurchaseBottomBar";
  export default {
    name: "Purchase_r",
    computed: {
      ...mapGetters([
        'cartList'
      ])
    },
    methods: {
      toCart(){
        this.$router.push('/cart');
      }
    },
    components: {
      Scroll,
      ListItem,
      Location,
      Server,
      PurchaseBottomBar
    }
  }
</script>

<style scoped>
    .purchase {
        position: relative;
        /*height: 100vh;*/
        background-color: #fff;
        z-index: 1;
    }
    .back {
        height: 44px;
        padding-top: 5px;
        padding-left: 5px;
        font-size: 20px;
        /*border-bottom: 1px solid;*/
    }
    /*.location {*/
    /*    height: 60px;*/
    /*    border: 1px solid #999999;*/
    /*    border-radius: 10px;*/
    /*}*/
    .content {
        /*height: calc(100vh - 166px);*/
        margin-top: 10px;
        padding: 5px 0;
        border-radius: 20px;
        background-color: #f2f5f8;
    }
</style>