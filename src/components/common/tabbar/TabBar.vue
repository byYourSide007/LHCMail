<template>
    <div id="tab-bar">
        <slot></slot>
    </div>
</template>

<script>
  export default {
    name: "TabBar"
  }
</script>

<style scoped>
/*<!--    设置tabBar样式    -->*/
    #tab-bar{

        /*弹性布局*/
        display: flex;

        /*固定位置*/
        position: fixed;

        /*设置背景颜色*/
        background-color: #f6f6f6;

        /*设置阴影，使得过度比较平滑*/
        box-shadow: -10px 10px rgba(100,100,100,.3);

        /*        如果不设置left和right，在position设置fixed，会导致文本也无法正常显示    */
        left: 0;
        right: 0;
        bottom: 0;
    }

</style>