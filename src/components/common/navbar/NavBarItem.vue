<template>
<!--    <div id="NavBarItem">-->
<!--        <div class="left"><slot name="left"></slot></div>-->
<!--        <div class="center"><slot name="center"></slot></div>-->
<!--        <div class="right"><slot name="right"></slot></div>-->
<!--    </div>-->
    <div class="NavBarItem">
        <div class="left"><slot name="left"></slot></div>
        <div class="center"><slot name="center"></slot></div>
        <div class="right"><slot name="right"></slot></div>
    </div>
</template>

<script>
  export default {
    name: "NavBarItem"
  }
</script>

<style scoped>
    .NavBarItem {
        display: flex;
        line-height: 44px;
        text-align: center;
        left: 0;
        right: 0;
    }
    .left,.right {
        width: 60px;
    }
    .center {
        flex: 1;
    }
</style>