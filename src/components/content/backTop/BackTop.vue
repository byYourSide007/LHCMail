<template>
    <div class="back-top">
        <img src="@/assets/img/home/top.svg" alt="">
    </div>
</template>

<script>
  export default {
    name: "BackTop",
    methods : {
      /* 因为如果要返回顶部，肯定要获取界面中的深度，而如果在组件中获取父组件中的高度，并且在子组件中处理，
      * 就需要将子组件向父组件，发送一个事件，该事件再获得父组件中的的滚动条的深度，然后再将该属性传递到子组件
      * 在子组件中再进行处理，
      * 就不如直接在父组件中进行处理
      *  */
      // scrollTo(x,y,time){
      //   this.scroll.scrollTo(x,y,time);
      // },

    }
  }
</script>

<style scoped>
    .back-top {
        position: fixed;
        right: 10px;
        bottom: 55px;
    }
    .back-top img {
        width: 50px;
    }
</style>