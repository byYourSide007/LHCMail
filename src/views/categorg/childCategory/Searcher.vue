<template>
    <div class="searcher">
       <img src="@/assets/img/category/searcher.svg"
            alt="搜索"
            class="img1">
        <input type="text"
               placeholder="趣味中性风"
               @click="historyShow"
               ref="search_value"
               @input="updateInputValue(this.value)">
        <img src="@/assets/img/category/x.svg"
             alt="X"
             class="img2"
             v-if="wrongImgShow"
             @click="clearInput">
        <span @click="search">搜索</span>
    </div>
</template>

<script>
  export default {
    name: "SearcherIn",
    data() {
      return {
        inputValue : '',
        wrongImgShow : false,
      }
    },
    computed : {
      // inputValue() {
      //   return this.inputValue?this.inputValue:'';
      // }
    },
    methods : {
      historyShow() {// 当搜索框被点击，就让历史记录被显示
        this.$emit("historyShow");
      },
      search() { // 当点击搜索的时候
        if (!this.$refs.search_value.value ) {// 如果搜索框中没有内容
          this.$refs.search_value.value = '趣味中性风';
        }
        let value = this.$refs.search_value.value;// 让搜索框中的值为设定的值
        this.wrongImgShow = true; // 显示删除按钮
        this.$emit("search",value);
      },
      insertValue(value) { // 当历史记录中的某个内容被点击，则将该被点击的 value 键入到 input 项目中
        this.$refs.search_value.value = value;
        this.wrongImgShow = true;
      },
      clearInput() { /* 当点击输入框中的X ，则清空输入框内容和去除 X 的显示*/
        this.$refs.search_value.value = ''; // 清空搜索框内容
        this.wrongImgShow = false; // 让X 标志消失
        this.$emit("SearchResultHidden"); // 使得搜索界面隐藏
      },
      updateInputValue() { // 当input 中的值发生变化的时候
        let value = this.$refs.search_value.value;
        // let isNull = !!this.inputValue;// 将其转化为布尔值
        // this.wrongImgShow =  isNull? true : false; /* 有内容就显示，没有没有就让 X 不显示*/
        if(value) { // 如果输入框中存在值
          this.wrongImgShow = true;
        }else {
          this.wrongImgShow = false;
        }
        this.$emit("updateInputValue",value);  // 改变显示列表中文本的颜色
      }
    },
    watch : {
      // inputValue(newValue) { // 上面的方法直接修改 input 中的值，即使检测该数据，也无法捕获事件，需要检测input的值的变化
      //   if (!newValue) {
      //     alert("update");
      //     this.updateInputValue();
      //   }
      //   alert("not")
      // },

    }
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
        /*border-bottom: 3px solid red;*/
    }
    .searcher input:focus {
        outline: none; /* 获取焦点之后，不显示输入框中的外边框，而不是用 border 属性*/
        /*border: none;*/
    }
    .img1 {
        width: 49px;
        /*width: 30px;*/
        border-right: 3px solid #999999;
        -webkit-border-top-right-radius: 1px;
        /*border-right-width: 1px;*/
    }
    .img2{
        width: 20px;
        margin-right: 3px;
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