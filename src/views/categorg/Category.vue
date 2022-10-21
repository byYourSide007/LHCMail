<template>
    <div class="category">
        <searcher @historyShow="historyShow"
                  @updateInputValue = "updateInputValue"
                  @search="search"
                  @SearchResultHidden="SearchResultHidden"
                  ref="search"></searcher>
        <!--    历史搜索内容的缓入缓出     -->
        <transition name="history-scroll">
            <history-search
                    v-if="isHistoryShow"
                    :search_value="search_value"
                    @insertValue="insertValue"
                    ></history-search>
        </transition>
        <!--    热搜内容-->
<!--        <div v-if="!searchResultShow">-->
        <transition name="hot-list">
            <div class="wrapper" @click="historyGone" v-if="!searchResultShow">
                    <scroll probe-type="3" class="scroll">
                        <hot-list ></hot-list>
                    </scroll>
            </div>
        </transition>

        <!--        </div>-->
        <!--    点击搜索之后要显示的搜索结果界面-->
        <transition name="search-result">
            <search-result v-if="searchResultShow"
                           ref="showSearchResult"
                           :search_value="search_value"></search-result>
        </transition>

    </div>

</template>

<script>
import BScroll from 'better-scroll'

import Searcher from "@/views/categorg/childCategory/Searcher";
import HotList from "@/views/categorg/childCategory/HotList";
import HistorySearch from "@/views/categorg/childCategory/HistorySearch";
import Scroll from "@/components/common/scroll/Scroll";
import {result} from "@/views/search/childComps/index.js"
import SearchResult from "@/views/categorg/childCategory/SearchResult";



  export default {
    name: "CategoryView",
    data() {
      return {
        scroll : null,
        content : result,
        isHistoryShow : false,
        search_value : "",
        searchResultShow : false,
      }
    },
    components : {
      Searcher,
      HotList,
      HistorySearch,
      Scroll,
      SearchResult
    },
    methods : {
      search() {
        this.isHistoryShow = false;// 历史搜索隐藏
        this.searchResultShow = true;
      },
      SearchResultHidden() {// 点击搜索框中的 X，让搜索界面隐藏
        this.searchResultShow = false;
      },
      historyShow() {// 显示历史搜索
        /*显示历史记录*/
        this.isHistoryShow = true;
      },
      historyGone() {// 隐藏历史搜索
        this.isHistoryShow = false;
      },
      updateInputValue(value) {/* 当在输入框中输入内容的时候 */
        // console.log(value);
        if (value) { // 如果输入框内容不为空
          this.isHistoryShow = false;
          this.searchResultShow = true;
          this.$nextTick(function () {
            this.$refs.showSearchResult.updateSearchResult(value);// 将数值传递到被检索的内容文本
          })
        } else { // 如果输入框中内容为空
          this.searchResultShow = false;
        }
      },
      insertValue(value) { // 当点击历史记录中的内容
        this.isHistoryShow = false; // 历史记录中的显示被隐藏
        this.searchResultShow = true; // 将搜索结果显示在界面中
        this.$refs.search.insertValue(value);
        this.$nextTick(function () {
          this.$refs.showSearchResult.updateSearchResult(value);// 将数值传递到被检索的内容文本
        })
      }
    },
    mounted() {
      this.scroll = new BScroll('.wrapper',{
        probeType : 3,
        pullUpLoad : true,
      });
      this.scroll.on('pullingUp',() => {
        this.scroll.finishPullUp();
      });
    }
  }
</script>

<style scoped>
    .category {
        /*display: flex;*/
        position: relative;
        width: 100%;
        overflow: hidden;
        padding: 0;
        margin: 0;

    }
    .wrapper {
        height: calc(100vh - 49px);
        overflow: hidden;
    }

    /* 历史搜索消失*/
    .history-scroll-enter-active {
        transition: all .3s ease-out;
        /*animation: bounce-in 0.5s;*/

    }
    .history-scroll-leave-active {
        transition: all .8s ease-out;
        /*animation: bounce-in 0.5s reverse;*/

    }
    .history-scroll-enter-from,
    .history-scroll-leave-to {
        transform: translateY(20px);
        opacity: 0;
    }

    /* 热搜内容平滑移动 */
    @keyframes scroll-out {
        0% {
            transform: translateX(0);
        }
        100% {
            transform: translateX(-100vw);
        }
    }
    @keyframes scroll-in {
        0% {
            transform: translateX(100vw);
        }
        100% {
            transform: translateX(0);
        }
    }
    .hot-list-leave-active {
        animation: scroll-out 0.5s;
    }
    .hot-list-enter-active {
        animation: scroll-out 0.5s reverse;
    }
    .hot-list-leave-to,
    .hot-list-enter-from {
        /*transform: translateY(100px);*/
        opacity: 1;
    }

    /* 搜索内容展现 */
    .search-result-enter-active {
        animation: scroll-in .5s;
        position: absolute;
        top: 50px;left: 0;
        width: 100%;
        height: calc(100vh - 50px - 49px);
    }
    .search-result-leave-active {
        animation: scroll-in .5s reverse;
        position: absolute;
        top: 50px;left: 0;
        width: 100%;
        height: calc(100vh - 50px - 49px);
    }

</style>