<template>
    <div class="category">
        <searcher></searcher>
        <div class="wrapper">
            <history-search></history-search>
            <hot-list></hot-list>
        </div>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'

    import Searcher from "@/views/categorg/childCategory/Searcher";
    import HotList from "@/views/categorg/childCategory/HotList";
    import HistorySearch from "@/views/categorg/childCategory/HistorySearch";
  export default {
    name: "CategoryView",
    data() {
      return {
        scroll : null,
      }
    },
    components : {
      Searcher,
      HotList,
      HistorySearch
    },
    created() {
      // new BScroll('.wrapper',{
      //
      // });
    },
    mounted() {
      this.scroll = new BScroll('.wrapper',{
        probeType : 3,
        pullUpLoad : true,
      });
      // this.scroll.on('scroll',position => {
      //   // console.log(position);
      // });
      this.scroll.on('pullingUp',() => {
        // console.log("上拉加载更多");
        this.scroll.finishPullUp();
      })
    }
  }
</script>

<style scoped>
    .wrapper {
        /*height: 250px;*/
        /*position: relative;*/
        height: calc(100vh - 49px);
        /*background-color: #ff5777;*/

        /*不溢出，且在父组件中产生滚动条，原生写法*/
        /*overflow-y: scroll;!*超出部分隐藏，且产生一个滚动条 *!*/

        /*为了配合better-scroll的滚动条使用，则需要使用下面属性*/
        overflow: hidden;

    }
</style>