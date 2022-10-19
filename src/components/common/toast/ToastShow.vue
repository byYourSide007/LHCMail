<template>
    <div class="toast">
        <div class="toast-img-content">
<!--            <img src="@/assets/img/toast/check_mark.svg" alt="">-->
            <slot name="img-content"></slot>
        </div>
<!--        <span class="text-content">{{textContent}}</span>-->
        <span class="toast-text-content">
            <slot name="text-content"></slot>
        </span>
    </div>
</template>

<script>
  export default {
    name: "ToastShow",
    props : {
      textContent : {
        type : String,
        default() {
          return  "添加成功，在购物车等亲~";
        }
      },
    }
  }
</script>

<style scoped>
    .toast >>>{
        position: absolute;
        width: 150px;
        height: 70px;
        top: 50vh;left: 0;right: 0;
        margin: 0 auto;
        padding: 3px 10px;
        border-radius: 5px;
        /*opacity: .6;*/
        z-index: 990;
        /*background-color: #000;*/
        background-color: rgba(0,0,0,.6);/* 这样能够使得背景设置该透明度，但是盒子中的内容不会被影响*/
    }
    .toast-img-content {
        position: relative;
        width: 30px;
        margin: 0 auto;
    }
    .toast-img-content >>> img {
        width: 30px;
    }
    .toast-text-content {
        line-height: 20px;
        text-align: center;
        font-size: 10px;
        /*bottom: 5px;*/
        top: -5px;
        color: #FFF;
        z-index: 999;
    }
</style>