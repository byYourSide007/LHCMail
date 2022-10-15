<template>
    <div class="goods-list">
        <goods-list-item v-for="(item,index) of goods"
                         :cfav="item.cfav"
                         :img="item.img"
                         :title="item.title"
                         :price="item.price"
                         :key="index"></goods-list-item>
    </div>
</template>

<script>
    import GoodsListItem from "@/components/content/good/GoodsListItem";
  export default {
    name: "GoodsList",
    props : {
      goods : {
        type : Array,
      }
    },
    components : {
      GoodsListItem
    }
  }
</script>

<style scoped>
    .goods-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        /*position: relative;*/
        width: 100%;
        /*margin: 5px;*/
        /*padding: 3px;*/
    }
</style>