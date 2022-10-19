<template>
    <div class="another_way">
        <tab-bar>
            <tab-bar-item class="tab-bar-item">
                <template #item-icon>
                    <img src="@/assets/img/login/another_method/qq.svg" alt="qq">
                </template>
                <template #item-text>
                    <div>QQ</div>
                </template>
            </tab-bar-item>
            <tab-bar-item class="tab-bar-item">
                <template #item-icon>
                    <img src="@/assets/img/login/another_method/blog.svg" alt="qq">
                </template>
                <template #item-text>
                    <div>微博</div>
                </template>
            </tab-bar-item>
            <tab-bar-item class="tab-bar-item">
                <template #item-icon>
                    <img src="@/assets/img/login/another_method/wechat.svg" alt="qq">
                </template>
                <template #item-text>
                    <div>微信</div>
                </template>
            </tab-bar-item>
            <tab-bar-item class="tab-bar-item">
                <template #item-icon>
                    <img src="@/assets/img/login/another_method/phone.svg" alt="qq">
                </template>
                <template #item-text>
                    <div>电话</div>
                </template>
            </tab-bar-item>
        </tab-bar>
    </div>
</template>

<script>
  import TabBar from "@/components/common/tabbar/TabBar";
  import TabBarItem from "@/components/common/tabbar/TabBarItem";
  export default {
    name: "AnotherWay",
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style scoped>
    .another_way {
        position: relative;
    }
     >>> .tab-bar-item{
        /*padding-top: 50px;*/
        /*margin-top: 50px;*/
         height: 0;
         width: 50vw;
         color: #fff;
        /*background: none;*/
    }
    .tab-bar-item img{
        /*padding: 50px 20px 50px;*/
        padding-top: 50px;
        width: 40px;
        /*height: 50px;*/
    }
</style>