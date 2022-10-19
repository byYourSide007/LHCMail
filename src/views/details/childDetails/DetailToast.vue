<template>
    <div class="detail-toast">
<!--        如果是点加入购物车-->
<!--        <toast-show class="img-content">-->
<!--            <template #img-content >-->
<!--                <img src="@/assets/img/toast/check_mark.svg"-->
<!--                     alt=""-->
<!--                     v-if="showType === 'cart'">-->
<!--                <img src="@/assets/img/toast/wrong.svg"-->
<!--                     alt=""-->
<!--                     v-if="showType === 'purchase'">-->
<!--            </template>-->
<!--            <template #text-content >-->
<!--                <span class="text-content"-->
<!--                      v-if="showType === 'cart'">添加成功，在购物车等亲~</span>-->
<!--                <span class="text-content"-->
<!--                      v-if="showType === 'purchase'">不能购买，请添加购物车~</span>-->
<!--            </template>-->
<!--        </toast-show>-->

        <toast-show class="img-content">
            <template #img-content >
                <img src="@/assets/img/toast/check_mark.svg"
                     alt=""
                     v-if="showType === 'cart'">
                <img src="@/assets/img/toast/wrong.svg"
                     alt=""
                     v-else-if="showType === 'purchase'">
            </template>
            <template #text-content >
                <span class="text-content"
                      v-if="showType === 'cart'">添加成功，在购物车等亲~</span>
                <span class="text-content"
                      v-else-if="showType === 'purchase'">不能购买，请添加购物车~</span>
            </template>
        </toast-show>
    </div>
</template>

<script>
    import ToastShow from "@/components/common/toast/ToastShow";
  export default {
    name: "DetailToast",
    props : {
      showType : {
        type : String
      }
    },
    components : {
      ToastShow
    },
    updated() {
    }
  }
</script>

<style scoped>



</style>