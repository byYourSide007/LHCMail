<template>
        <SwiperComps class="swiperComps">
            <swiper-item v-for="(item,index) in topImages" :key="index" >
                    <img :src="item" alt="图片">
            </swiper-item>
        </SwiperComps>
</template>

<script>
    import {SwiperComps,SwiperItem} from '@/components/common/swiper'

  export default {
    name: "DetailSwiper",
    data(){
      return {

      }
    },
    props: {
      topImages: {
        type: Array,
        default() {
          return [];
        }
      }
    },
    components: {
      SwiperComps,
      SwiperItem,
    },

  }
</script>

<style scoped>
    .swiperComps{
        height: 450px;
        overflow: hidden;
    }
    .swiperComps img{
        width: 100%;
        height: 100%;
    }
</style>