<template>
    <tab-bar class="tab-bar">
        <tab-bar-item path="/home" activeColor="red" class="tab-bar-item">
            <template #item-icon ><div><img src="@/assets/img/tabbar/home.svg" alt="主页"></div></template>
            <template #item-icon_active><div ><img src="@/assets/img/tabbar/home_active.svg" alt="主页"></div></template>
            <template #item-text ><div >主页</div></template>
        </tab-bar-item>
        <tab-bar-item path="/category" activeColor="red" class="tab-bar-item">
            <template #item-icon><div ><img src="@/assets/img/tabbar/category.svg" alt="类别"></div></template>
            <template #item-icon_active ><div><img src="@/assets/img/tabbar/category_active.svg" alt="类别"></div></template>
            <template #item-text><div>类别</div></template>
        </tab-bar-item>
        <tab-bar-item path="/cart" activeColor="red" class="tab-bar-item">
            <template #item-icon><div ><img src="@/assets/img/tabbar/cart.svg" alt="购物车"></div></template>
            <template #item-icon_active ><div><img src="@/assets/img/tabbar/cart_active.svg" alt="购物车"></div></template>
            <template #item-text><div>购物车</div></template>
        </tab-bar-item>
        <tab-bar-item path="/profile" activeColor="red" class="tab-bar-item">
            <template #item-icon><div ><img src="@/assets/img/tabbar/mine.svg" alt="我的"></div></template>
            <template #item-icon_active ><div><img src="@/assets/img/tabbar/mine_active.svg" alt="我的"></div></template>
            <template #item-text><div>我的</div></template>
        </tab-bar-item>
        <div class="filing"><a href="https://beian.miit.gov.cn/">豫ICP备2022018477号</a></div>
    </tab-bar>
</template>

<script>
  import TabBar from "@/components/common/tabbar/TabBar";
  import TabBarItem from "@/components/common/tabbar/TabBarItem";

  export default {
    name: "MainTabBar",
    data(){
      return {
        activeColor : [],
      }
    },
    components : {
      TabBar,
      TabBarItem,
    }
  }
</script>

<style scoped>
    .tab-bar{
        bottom: 0;

    }
 .tab-bar-item >>> img{
     height: 26px;
     /*    将总体样式往下设置一点*/
     margin-top: 3px;
     /*    图片下面会有三个像素的富裕空间，可以设置下面的属性让其去除这三个像素的空间,让问题和图片更加的紧凑*/
     vertical-align: middle;
 }
 .filing {
     line-height: 49px;
    color: #000;
 }
</style>