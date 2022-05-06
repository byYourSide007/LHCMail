<template>
<!--  <swiper-comps  v-if="banners.length" class="swiper-comps">-->
  <swiper-comps  v-if="banners.length">
    <swiper-item  v-for="(item,index) in banners" :key="index">
       <a :href="item.link"><img :src="item.image" :alt="item.title"></a>
    </swiper-item>
    </swiper-comps>
</template>

<script>
  import {SwiperComps,SwiperItem} from '@/components/common/swiper'
  export default {
    name: "HomeSwiper",
    props : {
      banners : {
        type : Array,
        default() {
          return [];
        }
      },
    },
    methods: {
      stopTimer() {
        this.$refs.swiper.stopTimer()
      },
      startTimer() {
        if (this.$refs.swiper) {
          this.$refs.swiper.startTimer()
        }
      }
    },
    components : {
      SwiperComps,
      SwiperItem
    }
  }
</script>

<style scoped>
    /*.swiper-comps {*/
    /*    padding-top: 44px;*/
    /*}*/
</style>