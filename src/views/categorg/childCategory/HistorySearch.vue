<template>
    <div class="history">
        <div class="title">
            <p><b>历史搜索</b></p>
            <img src="@/assets/img/category/trash_can.svg" alt="垃圾桶">
        </div>
        <div class="content">
            <div  v-for="(item,index) in historyItem" :key="index">
                <div class="item">{{item}}</div>
            </div>
        </div>

    </div>
</template>

<script>
  export default {
    name: "HistorySearch",
    data(){
      return {
        historyItem: [
            '源窝子',
            '复古美式polo栅男',
            '瑜伽垫男士健身',
            '水杯',
            '桌面收纳盒'
        ]
      }
    },
  }
</script>

<style scoped>
    .title {
        display: flex;
    }
    .title img {
        width: 30px;
        padding-right: 20px;
    }
    .title p{
        flex: 1;
        padding-left: 20px;
        color: #222222;
    }
    .content {
        display: flex;
        flex-flow: row wrap;
    }
    .item {
        height: 20px;
        margin: 5px;
        padding: 3px;
        border-radius: 5px;
        background-color: #999999;
    }
</style>