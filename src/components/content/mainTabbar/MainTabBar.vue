<template>
    <tab-bar>
        <tab-bar-item path="/home" activeColor="red">
            <template #item-icon ><div><img src="@/assets/img/tabbar/home.svg" alt="主页"></div></template>
            <template #item-icon_active><div ><img src="@/assets/img/tabbar/home_active.svg" alt="主页"></div></template>
            <template #item-text ><div >主页</div></template>
        </tab-bar-item>
        <tab-bar-item path="/category" activeColor="red">
            <template #item-icon><div ><img src="@/assets/img/tabbar/category.svg" alt="类别"></div></template>
            <template #item-icon_active ><div><img src="@/assets/img/tabbar/category_active.svg" alt="类别"></div></template>
            <template #item-text><div>类别</div></template>
        </tab-bar-item>
        <tab-bar-item path="/cart" activeColor="red">
            <template #item-icon><div ><img src="@/assets/img/tabbar/cart.svg" alt="购物车"></div></template>
            <template #item-icon_active ><div><img src="@/assets/img/tabbar/cart_active.svg" alt="购物车"></div></template>
            <template #item-text><div>购物车</div></template>
        </tab-bar-item>
        <tab-bar-item path="/profile" activeColor="red">
            <template #item-icon><div ><img src="@/assets/img/tabbar/mine.svg" alt="我的"></div></template>
            <template #item-icon_active ><div><img src="@/assets/img/tabbar/mine_active.svg" alt="我的"></div></template>
            <template #item-text><div>我的</div></template>
        </tab-bar-item>
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

</style>