<template>
  <div class="home">
      <!--    导航栏   -->
          <nav-bar class="home-nav">
              <nav-bar-item><template #center><div>购物街</div></template></nav-bar-item>
          </nav-bar>
      <!--    轮播图     -->
          <home-swiper :banners="banners" ref="hSwiper"/>
      <!--    推荐商品展示    -->
          <recommend-view :recommends="recommend"></recommend-view>
      <!--    商品特色  -->
          <feature-view></feature-view>

  </div>
</template>

<script>

import NavBar from "@/components/common/navbar/NavBar";
import NavBarItem from "@/components/common/navbar/NavBarItem";
import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "@/views/home/childComps/RecommendView";
import FeatureView from "@/views/home/childComps/FeatureView";

import {getHomeMUltidata} from "@/network/home";

export default {
  name: 'HomeView',
  data(){
    //暴露获取的数据
    return {
      banners : [],
      recommend : [],
    };
  },
  components: {
    NavBar,
    NavBarItem,
    HomeSwiper,
    RecommendView,
    FeatureView,
  },
  //当组件被成功创建之后
  created() {
    getHomeMUltidata().then(res => {
      console.log(res);

      this.banners = res.data.banner.list;
      this.recommend = res.data.recommend.list;
    });
  }
}
</script>

<style scoped>
    /*.home {*/
    /*    !*padding-top: 44px;*!*/
    /*}*/
  .home-nav {
    background-color: #fb7299;
    color: #fff;
      /*position: fixed;*/
      /*left: 0;*/
      /*right: 0;*/
      /*top: 0;*/
      /*z-index: 999;*/
  }
</style>
