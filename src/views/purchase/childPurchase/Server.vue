<template>
    <div class="serve">
        <div class="serve_text">
            <div class="serve_text_f">配送服务</div>
            <div><b>快递 免邮</b></div>
        </div>
        <div class="serve_text">
            <div class="serve_text_f">运费险</div>
            <div><b>退换货可赔付10元</b></div>
        </div>
        <div class="serve_text">
            <div class="serve_text_f">订单备注</div>
            <div><b>无备注 ></b></div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "Server_er"
  }
</script>

<style scoped>
    .serve {
        display: flex;
        flex-flow: column wrap;
    }
    .serve_text {
        display: flex;
        height: 50px;
        padding-top: 5px;
    }
    .serve_text_f {
        flex: 1;
    }
</style>