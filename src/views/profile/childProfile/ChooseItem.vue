<template>
    <div class="choose">
        <tab-bar>
            <tab-bar-item class="tab-bar-item">
                <template #item-icon>
                    <img src="@/assets/img/profile/collect.svg" alt="收藏">
                </template>
                <template #item-text>
                    <div>收藏</div>
                </template>
            </tab-bar-item>
            <tab-bar-item class="tab-bar-item">
                <template #item-icon>
                    <img src="@/assets/img/profile/shop.svg" alt="收藏">
                </template>
                <template #item-text>
                    <div>订阅店铺</div>
                </template>
            </tab-bar-item>
            <tab-bar-item class="tab-bar-item">
                <template #item-icon>
                    <img src="@/assets/img/profile/footmark.svg" alt="收藏">
                </template>
                <template #item-text>
                    <div>足迹</div>
                </template>
            </tab-bar-item>
            <tab-bar-item class="tab-bar-item">
                <template #item-icon>
                    <img src="@/assets/img/profile/small_change.svg" alt="收藏">
                </template>
                <template #item-text>
                    <div>零钱</div>
                </template>
            </tab-bar-item>
        </tab-bar>
    </div>
</template>

<script>
    import TabBar from "@/components/common/tabbar/TabBar";
    import TabBarItem from "@/components/common/tabbar/TabBarItem";
  export default {
    name: "ChooseItem",
    components: {
      TabBar,
      TabBarItem,
    },
  }
</script>

<style scoped>
    .choose{
        height: 50px;
        padding-top: 10px;
        padding-bottom: 10px;
        /*top: 200px;*/
    }
    .tab-bar-item img{
        width: 30px;
    }
</style>