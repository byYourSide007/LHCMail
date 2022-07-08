<template>
    <div class="searcher">
       <img src="@/assets/img/category/searcher.svg" alt="搜索">
        <input type="text" placeholder="请输入商品名称">
        <span>搜索</span>
    </div>
</template>

<script>
  export default {
    name: "SearcherIn"
  }
</script>

<style scoped>

    .searcher{
        position: relative;
        display: flex;
        height: 40px;
        width: 100vw;

        margin-top: 10px;

        border-radius: 20px;
        /*margin: 0;*/
        /*padding: 0;*/

        background-color: #F4F4F4;
    }
    .searcher img {
        width: 49px;
        border-right: 3px solid #999999;
        -webkit-border-top-right-radius: 1px;
        /*border-right-width: 1px;*/
    }
    .searcher input {
        /*height: 49px;*/
        flex: 1;
        /*width: 70vw;*/
        /*使得输入框不显示外边框*/
        border: none;
        /*top: 0;*/
        background-color: #F4F4F4;

        /*background-image: url("@/assets/img/category/searcher.svg");*/
        /*background-size: 20px;*/
        /*background-position-x: left;*/
        /*background-repeat: no-repeat;*/
    }
    .searcher span {
        width: 58px;
        border: 3px solid red;
        text-align: center;
        padding-top: 8px;
        background-color: #ff5f3e;
        border-radius: 10px;
        color: #fff;
    }
</style>