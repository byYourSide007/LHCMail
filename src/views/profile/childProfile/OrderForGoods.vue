<template>
    <div class="order">
        <div class="words">
            <div class="goods">我的订单</div>
            <div class="all">全部 ></div>
        </div>
        <div class="choice">
            <tab-bar>
                <tab-bar-item class="tab-bar-item">
                    <template #item-icon>
                        <img src="@/assets/img/profile/orderForGoods/obligations.svg" alt="待付款">
                    </template>
                    <template #item-text>
                        <div>待付款</div>
                    </template>
                </tab-bar-item>
                <tab-bar-item class="tab-bar-item">
                    <template #item-icon>
                        <img src="@/assets/img/profile/orderForGoods/to_be_shipped.svg" alt="待发货">
                    </template>
                    <template #item-text>
                        <div>待发货</div>
                    </template>
                </tab-bar-item>
                <tab-bar-item class="tab-bar-item">
                    <template #item-icon>
                        <img src="@/assets/img/profile/orderForGoods/evaluate.svg" alt="待收货">
                    </template>
                    <template #item-text>
                        <div>待收货</div>
                    </template>
                </tab-bar-item>
                <tab-bar-item class="tab-bar-item">
                    <template #item-icon>
                        <img src="@/assets/img/profile/orderForGoods/to_be_receiced.svg" alt="待评价">
                    </template>
                    <template #item-text>
                        <div>待评价</div>
                    </template>
                </tab-bar-item>
                <tab-bar-item class="tab-bar-item">
                    <template #item-icon>
                        <img src="@/assets/img/profile/orderForGoods/aftermarket.svg" alt="退款/售后">
                    </template>
                    <template #item-text>
                        <div>退款/售后</div>
                    </template>
                </tab-bar-item>
            </tab-bar>
        </div>
    </div>
</template>

<script>
    import TabBar from "@/components/common/tabbar/TabBar";
    import TabBarItem from "@/components/common/tabbar/TabBarItem";
  export default {
    name: "OrderForGoods",
    components: {
      TabBar,
      TabBarItem,
    }
  }
</script>

<style scoped>
    .order{
        display: flex;
        flex-flow: column wrap;
        height: 50px;
        padding-top: 10px;
        /*padding-left: 2px;*/
        padding-bottom: 40px;

        background-color: #a3a3a5;
        border-radius: 5%;
    }
    .words {
        display: flex;
    }
    .all {
        right: 0;
    }
    .choice {
        padding-top: 15px;
        /*padding-bottom: 15px;*/
    }
    .choice >>> div {
        background-color: #a3a3a5;
    }
    .goods {
        flex: 1;
    }
    .tab-bar-item >>> img {
        width: 30px;

    }
</style>