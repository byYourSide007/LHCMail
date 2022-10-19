<template>
    <div class="order">
        <div class="title" >
            <div class="item" v-for="(item,index) in titleItem" :key="index">
                <div :class="{active:index === currentIndex}" @click="getActive(index)">{{item}}</div>
            </div>
        </div>
        <scroll class="scroll">
            <div class="laji">
                <b>万盛运动衣装专卖店 > </b>
            </div>
            <list-item v-for="(item,index) in cartList"
                       :key="index"
                       :product="item">
            </list-item>
            <div class="text">
                <span>更多</span>
                <div>加入购物车</div>
                <div>查看物流</div>
                <div>评价</div>
            </div>
            <div class="cou" v-for="(item,index) in list" :key="index">
                <cou-shu v-for="(value,key) in item" :key="key">
                    <template #left>
                        <div>{{key}}:</div>
                    </template>
                    <template #right>
                        <div>{{value}}</div>
                    </template>
                </cou-shu>
            </div>
        </scroll>
    </div>
</template>

<script>
    import Scroll from "@/components/common/scroll/Scroll";
    import ListItem from "@/views/cart/childCart/ListItem";
    import CouShu from "@/views/order/childOrder/CouShu";

    export default {
    name: "ProfileOrder",
    data(){
      return {
        titleItem : ['全部','待付款','代发货','待收货','待评价'],
        cartList : this.$store.state.cartList,
        list : [
          {
            '收货信息' : '刘先森，86-127.0.0.1，河南省 XX市 XX市 XX乡 ',
            '订单编号' : '2725408801582608465',
            '交易快照' : '发生交易争议的时候，可以作为判断依据',
            '订单状态' : '已退货',
            '下单时间' : '2022/7/8'
          },
          // {
          //   '收货信息' : '刘先森，86-127.0.0.1，河南省 XX市 XX市 XX乡 ',
          //   '订单编号' : '2725408801582608465',
          //   '交易快照' : '发生交易争议的时候，可以作为判断依据',
          //   '订单状态' : '已退货',
          //   '下单时间' : '2022/7/8'
          // },
        ],
        currentIndex : 0,

      }
    },
    components: {
      Scroll,
      ListItem,
      CouShu
    },
      methods : {
        getActive(index) {
          this.currentIndex = index;
        }
      }
  }
</script>

<style scoped>
    .order {
        position: relative;
        /*width: 100vw;*/
        height: 100vh;
        background-color: #f2f5f8;
        z-index: 1;
    }
    .scroll{
        width: 350px;
        border: 1px solid #999999;
        border-radius: 20px;
        margin: 0 auto;
        /*margin-top: 30px;*/
        padding: 10px;
    }
    >>> #shop-item{
        border-bottom : none;
    }
    .title {
        display: flex;
        height: 34px;
        padding-top: 15px;
        background-color: #f2f5f8;
    }
    .item {
        text-align: center;
        flex: 1;
    }
    /*.item:nth-child(1){*/
    /*    font-weight: 600;*/
    /*    color: #ff5f3e;*/
    /*}*/
    .active {
        font-weight: 600;
        color: #ff5f3e;
    }

    >>> .item-selector {
        display: none;
    }
    .text {
        display: flex;
    }
    /*.text:nth-child(1){*/
    /*    flex: 1;*/
    /*}*/
    .text span {
        margin-top: 15px;
        flex: 1;
    }
    .text div{
        height: 30px;
        margin: 3px;
        padding: 2px 3px;
        border: 1px solid #999999;
        border-radius: 15px;
        background-color: #f2f5f8;
    }
    .text div:nth-child(4){
        color: #eb4868;
    }
    .laji {
        color: #eb4868;
        padding-bottom: 20px;
    }
</style>