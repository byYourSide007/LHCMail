<template>
    <div class="goodslist">
        {{GoodsListItem}}
        <goods-list-item v-for="(item,index) in goods" :key="index" :goodsItem="item" />
    </div>
</template>

<script>
import GoodsListItem from "@/components/content/goods/GoodsListItem";
  export default {
    name: "GoodsList",
    props : {
      goods : {
        type : Array,
        default(){
          return [];
        },
      }
    },
    components : {
      GoodsListItem
    },
    created() {
      console.log(this.goods)
    }

  }
</script>

<style scoped>
    .goodslist{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        padding: 3px;
    }
</style>