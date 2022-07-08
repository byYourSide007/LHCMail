<template>
<!--  <swiper-comps  v-if="banners.length" class="swiper-comps">-->
  <swiper-comps  v-if="banners.length">
    <swiper-item  v-for="(item,index) in banners" :key="index">
       <a :href="item.link">
           <img :src="item.image"
                :alt="item.title"
                @load="imgLoad">
       </a>
    </swiper-item>
    </swiper-comps>
</template>

<script>
  import {SwiperComps,SwiperItem} from '@/components/common/swiper'
  export default {
    name: "HomeSwiper",
    data(){
      return {
        isLoad : false,
      }
    },
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
      },
      imgLoad(){
        if (!this.isLoad){
          this.$emit("swiperImageLoad");
          this.isLoad = true;
        }
      },
    },
    components : {
      SwiperComps,
      SwiperItem,
    }
  }
</script>

<style scoped>
    /*.swiper-comps {*/
    /*    padding-top: 44px;*/
    /*}*/
</style>