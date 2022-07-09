<template>
    <div class="bottom">
        <span class="token"></span>
        <div class="all">
            <span>合计：</span>
            <span>￥</span>
            <span><b>{{totalPrice}}</b></span>
        </div>
        <div class="submit"><b>提交订单</b></div>
    </div>
</template>

<script>
  export default {
    name: "PurchaseBottomBar",
    data(){
      return {

      }
    },
    computed : {
      totalPrice(){
        return this.$store.getters.cartList.filter(item => {
          //不要忘记return 否则是无法接收到数据内容的
          return item.checked;//被选中的商品
        }).reduce((preValue,item) => {//将商品价格算出
          return preValue + item.price * item.count
        },0).toFixed(2)

      },
    },
    methods : {

    }
  }
</script>

<style scoped>
    .bottom {
        /*border: 1px solid #ff5f3e;*/
        /*position: absolute;*/
        position: fixed;
        display: flex;
        height: 55px;
        left: 0;right: 0;bottom: 0;
        background: #f2f5f8;
        /*z-index: 999;*/
    }
    .token{
        flex: 1;
    }
    .all {

    }
    .submit {
        width: 100px;
        height: 30px;
        border-radius: 30px;
        text-align: center;
        margin-top: 3px;
        margin-right: 3px;
        padding-top: 15px;
        color: #fff;
        background-color: #ff5f3e;
    }
</style>