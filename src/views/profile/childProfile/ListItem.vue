<template>
    <div class="list">
        <div class="listItem" v-for="(item,index) in orderList" :key="index">
            <div class="image"><img :src="item.img" alt="图片"></div>
            <div class="message">{{item.message}}</div>
        </div>
    </div>

</template>

<script>
  export default {
    name: "ListItem",
    props: {
      orderList:{
        type:Object,
        default(){
          return {}
        }
      }
    }
  }
</script>

<style scoped>
    .list{
        margin-top: 10px;
        padding-top: 10px;
        padding-left: 10px;
        /*background-color: #999999;*/
        border: 1px solid #999999;
        border-radius: 5%;
        /*color: #fff;*/
    }
    .listItem {
        display: flex;
        padding-top: 8px;
        border-bottom: 1px solid #999999;
    }
    .listItem img{
        width: 20px;
    }
    .message{
        padding-left: 9px;
    }
</style>