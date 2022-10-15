<template>
    <div class="goods-list-item">
        <img :src="img" :alt="title">
        <div class="text-content">
            <p>{{title}}</p>
            <span class="text-price">￥{{price}}</span>
            <span class="text-collection">{{cfav}}</span>
        </div>

    </div>
</template>

<script>
  export default {
    name: "GoodsListItem",
    props : {
      img : {
        type: String,
        default : "#"
      },
      cfav : {
        type : Number,
        default: 0
      },
      price : {
        type : Number,
        default : 0,
      },
      title : {
        type : String,
        default : ""
      }
    },
    computed : {
      // extraTitle(){
      //   return
      // }
    },
  }
</script>

<style scoped>
    .goods-list-item {
        position: relative;
        width: 48%;
        /*padding-bottom: 40px;*/
    }
    .goods-list-item img {
        width: 100%;
    }
    .text-content {
        /*position: absolute;*/
        /*bottom: 5px;left: 0;right: 0;*/
        /*overflow: hidden;*/
        /*text-align: center;*/
        /*font-size: 12px;*/

        font-size: 12px;
        position: relative;
        bottom: 5px;
        left: 0;
        right: 0;
        overflow: hidden;
        text-align: center;
        height: 40px;
    }
    .text-content p {
        overflow: hidden;
        white-space: nowrap;
        /*text-overflow-ellipsis: true;*/
        text-overflow: ellipsis;
        margin-bottom: 3px;

        /*overflow: hidden;*/
        /*text-overflow: ellipsis;*/
        /*white-space: nowrap;*/
        /*margin-bottom: 3px;*/
    }
    .text-price {
        margin-right: 50px;
    }
    .text-collection::before{
        content: '';
        position: absolute;
        /*right: 50%;*/
        /*top: 5px;*/
        bottom: 0;
        /*right: 0;*/
        margin-left: -14px;
        width: 14px;
        height: 14px;
        background: url("@/assets/img/common/collect.svg") 0 0/14px 14px;
    }
</style>