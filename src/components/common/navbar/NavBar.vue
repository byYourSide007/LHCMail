<template>
    <div class="nav-bar">
        <slot></slot>
    </div>
</template>

<script>

  export default {
    name: "NavBar",
    components : {
    }
  }
</script>

<style scoped>
    .nav-bar {
        /*如果使用这个属性，则会导致与下面的属性重复使用弹性布局，也就随之会导致弹性布局失效*/
        /*display: flex;*/

        /*
            如果设置这个属性，则下面的组件会占用本组件中的内容显示
        */
        /*position: fixed;*/

        /*一般导航的高度都是四十四px*/
        line-height: 44px;
        text-align: center;
        box-shadow: 0 1px 1px rgba(100,100,100,.1);
        left: 0;
        right: 0;
        top: 0;
    }
</style>