<template>
    <div class="purchase">
        <div class="back"
            @click="toCart"> &lt; 确认订单 </div>
        <div class="wrapper">
            <scroll class="content"
                    ref="scroll"
                    probeType="3">
                <location></location>
                <list-item v-for="(item,index) in cartList.filter(item => item.checked)"
                           :key="index"
                           :product="item">
                </list-item>
                <div class="content_serve">
                    <server></server>
                </div>

            </scroll>
        </div>
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
    },
    activated() {
      console.log(this.cartList)
      this.$refs.scroll.scroll.refresh();
    }
  }
</script>

<style scoped>
    .purchase {
        position: relative;
        height: 100vh;
        width: 100vw;
        background-color: #eee;
        z-index: 1;
    }
    .back {
        height: 44px;
        padding-top: 5px;
        padding-left: 5px;
        font-size: 20px;
        /*border-bottom: 1px solid;*/
    }
    .content {
        position: absolute;
        top: 44px;bottom: 70px;
        left: 0;right: 0;
        overflow: hidden;
        background-color: #f2f5f8;
    }
</style>