<template>
    <div class="history" >
        <div class="title" >
            <p><b>历史搜索</b></p>
                <img src="@/assets/img/category/trash_can.svg"
                      alt="垃圾桶" @click="clearHistory"></div>
        <div class="content">
            <div  v-for="(item,index) in historyItem"
                  :key="index">
                <div class="item">{{item}}</div>
            </div>
            <div v-if="!historyItem.length" class="history-null">历史记录为空</div>
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
    props : {
      search_value : {
        type : String,
      }
    },
    methods : {
      clearHistory() {
        this.historyItem = [];
      }
    },
    watch : {
      search_value() {
        this.historyItem.push(this.search_value)
      }
    }
  }
</script>

<style scoped>
    .history {
        position: absolute;
        /*height: calc(100vh-49px);*//*CSS 中的计算属性*/
        z-index: 99;
        width: 96%;
        left: 0;right: 0;
        margin: 0 auto;
        background-color: #EEE;
    }
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
    .history-null {
        /*margin-left: 20px;*/
        margin: 0 25px 10px;
        font-size: 13px;
        /*color: ;*/
    }
</style>