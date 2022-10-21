<template>
    <div class="search-result">
        <scroll class="searchResult-scroll"
                ref="scroll">
            <div class="search-result-item">
                <ul>
<!--                    <li v-for="(item,index) in forSearchContentFilter"-->
                    <li v-for="(item,index) in preFoundContent"
                        :key="index">
                        <img src="@/assets/img/category/search_magnifier.svg" alt="搜索">
                        <span>{{preFoundContent[index]}}</span>
                        <span class="changeColor">{{searchContent[index]}}</span>
                        <span>{{afterFoundContent[index]}}</span>
                    </li>
                </ul>
            </div>
        </scroll>
    </div>
</template>

<script>
  // import { getGoodsTitle } from "@/network/category";

  import Scroll from "@/components/common/scroll/Scroll";

  export default {
    name: "SearchResult",
    data() {
      return {
        preFoundContent : [],
        searchContent : [],
        afterFoundContent : [],
        forFoundData : [
            "趣味中性风怎么穿","趣味中性风怎么穿秋天","趣味中性风怎么穿裤子","趣味中性风怎么穿衣服","趣味中性风怎么穿短款秋衣",
            "趣味中性风怎么穿牛仔裤","趣味中性风怎么穿运动套装","趣味中性风卫衣加绒","趣味中性风女冬","趣味中性风怎么穿牛仔裤",

            "那不勒斯男士西裤秋冬","那不勒斯西裤","那不勒斯西裤男冬季","那不勒斯西裤秋冬","那不勒斯西裤冬季","那不勒斯西裤秋季","那不勒斯西裤男",
            "意式那不勒斯西裤女","那不勒斯西裤男高腰","那不勒斯西裤直筒","那不勒斯西裤男黑色","那不勒斯西裤白","那不勒斯男士西裤九分"

        ]
      };
    },
    props : {
      search_value : {
        type : String
      }
    },
    computed : {
      // searchResultDataSet() {  /* 过滤从网络请求过来的数据
      // */
      //   return [...new Set(this.searchResultData)]; // 去重
      // },
      // forSearchContentFilter() {  /* 过滤现有请求到的数据是否有符合要求的 */
      //   const arr = [];
      //   for (const item of this.searchResultDataSet) {
      //     console.log(item);
      //     if (item.indexOf(this.search_value)) {
      //       arr.push(item);
      //     }
      //   }
      //   if (!arr.length) { // 如果没有遍历到元素
      //     return "未搜索到结果~"
      //   }
      //   return arr;
      // },
    },
    methods: {

      // getGoodsTitle() {
      //   getGoodsTitle("pop", 1).then(res => {   /*  请求三十条 pop 商品标题   */
      //     for (const item of res.data.list) {
      //       this.searchResultData.push(item.title);
      //     }
      //   });
      //   getGoodsTitle("new", 1).then(res => {   /*  请求三十条 new 商品标题   */
      //     for (const item of res.data.list) {
      //       this.searchResultData.push(item.title);
      //     }
      //   });
      //   getGoodsTitle("sell", 1).then(res => {   /*  请求三十条 sell 商品标题   */
      //     for (const item of res.data.list) {
      //       this.searchResultData.push(item.title);
      //     }
      //   });
      // },

      updateSearchResult(value) { // 当输入框中的内容不为空的时候
      //  分解被检索匹配到的内容，搜索内容显示红色，相联系的文本显示灰色
        this.preFoundContent = [];
        this.searchContent = [];
        this.afterFoundContent = [];
        const valueLen = value.length;// 输入内容的字符串长度
        for (let item of this.forFoundData) {
          const index = item.indexOf(value);// 检索到字符串的首位的下标
          if (index !== -1) { // 如果被检索的内容存在该该部分内容
            this.preFoundContent.push(item.slice(0,index));
            this.searchContent.push(value);
            this.afterFoundContent.push(item.slice(index+valueLen));
          }
        }

      }
    },
    components : {
      Scroll
    },
  }
</script>

<style scoped>
    .search-result {
        position: relative;
        width: 100%;
        height: calc(100vh - 50px - 49px);
        top: 3px;
        left: 0;right: 0;
        margin: 0 auto;
        overflow: hidden;
        background-color: #eee;
        /*background-color: #eb4868;*/
        border-radius: 15px;
        z-index: 999;
    }
    .searchResult-scroll {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;right: 0;top: 10px;bottom: 0;
    }
    .search-result-item ul{
        display: flex;
        flex-flow: row wrap;
        margin: 0;padding: 0;
    }
    .search-result-item li {
        width: 90%;
        height: 23px;
        margin: 5px 0;padding:  0;
        border-bottom: 1px solid #999999 ;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 15px;
        list-style: none;
    }
    .search-result-item img {
        width: 20px;
    }
    .changeColor {
        color: #eb4868;
    }
</style>