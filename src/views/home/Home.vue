<template>
  <div class="home">
      <!--    导航栏   -->
          <nav-bar class="home-nav">
              <nav-bar-item><template #center><div>购物街</div></template></nav-bar-item>
          </nav-bar>
<!--      滚动条   -->
      <b-scroll class="content"
                ref="scroll"
                @scroll="contentScroll"
                :pull-up-load="true"
                @pullingUp="loadMore"
                :probe-type="3">
          <!--    轮播图     -->
          <home-swiper :banners="banners" ref="hSwiper"/>
          <!--    推荐商品展示    -->
          <recommend-view :recommends="recommend"></recommend-view>
          <!--    商品特色  -->
          <feature-view></feature-view>
          <!--    显示栏  -->
          <tab-control :title="['流行','新款','精选']" class="tab-control-position" @tabClick="tabClick"></tab-control>

          <!--    商品展示    -->
          <goods-list :goods="showGoods"></goods-list>

      </b-scroll>
<!--      返回顶部  -->
      <back-top @click="backToTop" v-show="showBackTop" />
  </div>
</template>

<script>
// <!-- 可以将导入的组件分成几个部分，（1）导入的方法。（2）子组件。（3）公共组件。（4）导入的数据。-->
import NavBar from "@/components/common/navbar/NavBar";
import NavBarItem from "@/components/common/navbar/NavBarItem";
import TabControl from "@/components/common/tabControl/TabControl";
import GoodsList from "@/components/content/goods/GoodsList";
import BScroll from "@/components/common/scroll/Scroll";
import BackTop from "@/components/content/backTop/BackTop";

import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "@/views/home/childComps/RecommendView";
import FeatureView from "@/views/home/childComps/FeatureView";

import {getHomeMUltidata,getHomeGoods} from "@/network/home";

export default {
  name: 'HomeView',
  data(){
    //暴露获取的数据
    return {
      banners : [],
      recommend : [],
      goods : {
        "pop" : {page : 0, list: []},
        "new" : {page : 0, list: []},
        "sell" : {page : 0, list: []},
      },
      currentType : 'pop',/*第一次展示的数据是流行类别*/
      showBackTop : false,
    };
  },
  components: {
    NavBar,
    NavBarItem,
    TabControl,
    GoodsList,
    HomeSwiper,
    RecommendView,
    FeatureView,
    BScroll,
    BackTop,
  },
  computed : {
    showGoods(){
      return this.goods[this.currentType].list
    }
  },
  methods : {
    /**
     * 事件监听相关的方法
     * */
    tabClick(index){
      switch (index) {
        case 0 :
          this.currentType = 'pop' ;
          break;
        case 1 :
          this.currentType = 'new';
          break;
        case 2 :
          this.currentType = 'sell';
          break;
      }
    },
    backToTop(){
      // //没有封装的方法：先去拿这个组件（到this.$refs.scroll），然后拿到这个组件的属性（到this.$refs.scroll.scroll），然后调用所对应的方法（到this.$refs.scroll.scroll.scrollTo）
      this.$refs.scroll.scroll.scrollTo(0,0,520);/*传入的参数 （x，y，time） */
      //封装方法，减少在这个地方看到的代码量：
      // this.$refs.scroll.scrollTo(0,0,520);/*没有实现*/

    },//backToTop
    contentScroll(position){
      this.showBackTop = (position.y < -1000);/*在此处应该注意是y值，而不是直接使用position*/
    },
    loadMore(){
      this.getHomeGoods(this.currentType);

    },
    /**
     * 网络请求相关的方法
     * */
    getHomeMUltidata(){
      //获取轮播图和推荐信息的数据
      getHomeMUltidata().then(res => {
        this.banners = res.data.banner.list;
        this.recommend = res.data.recommend.list;
      });
    },//getHomeMUltidata
    getHomeGoods(type){
      const page = this.goods[type].page + 1;//创建一个变量存储页数，才能动态请求数据
      //请求商品数据
      getHomeGoods(type,page).then(res => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;

        this.$refs.scroll.scroll.finishPullUp();
      });
    },//getHomeGoods

  },//methods
  //当组件被成功创建之后
  created() {
    //1.获取多个数据
    this.getHomeMUltidata();//要记得使用this调用，如果不使用this，则使用的是上面import中的内容，而使用了this，调用的是本组件中的这个方法
    //2.获取展示商品的数据
    this.getHomeGoods('pop');
    this.getHomeGoods('new');
    this.getHomeGoods('sell');
  },//created
  mounted() {

    },//mounted
}
</script>

<style scoped>

    .home {
        position: relative;
        height: 100vh;/*view height，也就是视口高度*/
        padding-top: 44px;
    }
    .home-nav {
      position: fixed;
      background-color: #fb7299;
      color: #fff;
      left: 0;
      right: 0;
      top: 0;
      z-index: 999;
  }
    /*如果直接命名为tab-control的类，会导致相同类名的嵌套*/
    .tab-control-position {
        position: sticky;
        top: 44px;
        z-index: 9;/*当上拉商品列表的时候，防止标题会被挡住*/
    }


    .content {
        position: absolute;
        top: 44px;
        bottom: 49px;
        left: 0;
        right: 0;
        overflow: hidden;
    }
    /*使用计算属性的策略*/
    /*.content {*/
    /*    height: calc(100% - 93px);*/
    /*    overflow: hidden;*/
    /*}*/


</style>
