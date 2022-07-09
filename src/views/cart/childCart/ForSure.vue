<template>
    <div class="sure">
        <div class="content">
            确认支付吗？
        </div>
        <div class="button">
<!--            <div class="item" @click="cancel">取消</div>-->
<!--            <div class="item" @click="cancel">取消</div>-->

            <button class="item" @click="cancel">取消</button>
            <button class="item" @click="sure">确认</button>

<!--            <div class="sure" >确认</div>-->
<!--            <button class="sure">确认</button>-->
        </div>
    </div>
</template>

<script>
  export default {
    name: "ForSure",
    methods: {
      cancel(){
        this.$emit('cancel')
      },
      sure(){
        this.$router.push('purchase');
        this.$emit('cancel')
      }
    }
  }
</script>

<style scoped>
    .sure {
        display: flex;
        flex-flow: column wrap;
        position: absolute;
        width: 50vw;
        height: 10vh;
        margin-left: 25vw;
        margin-top: 10vh;
        top: 100px;
        border: 1px solid #ff5f3e;
        border-radius: 10px;
        color: #fff;
        background-color: #ff5f3e;
    }
    .content {
        /*text-align: center;*/
        flex: 1;
        padding-left: 50px;
        padding-top: 10px;

    }
    .button {
        /*bottom: 0;*/
        display: flex;

    }
    .item {
        flex: 1;
    }
</style>