<template>
  <div class="home">
      <!--    导航栏   -->
          <nav-bar class="home-nav">
              <nav-bar-item><template #center><div>购物街</div></template></nav-bar-item>
          </nav-bar>
      <!--    显示栏  -->
      <tab-control :title="['流行','新款','精选']"
                   @tabClick="tabClick"
                   ref="tabControl1"
                   class="tabControl"
                   v-show="isFixed"/>
<!--      滚动条   -->
      <b-scroll class="content"
                ref="scroll"
                @scroll="contentScroll"
                :pull-up-load="true"
                @pullingUp="loadMore"
                :probe-type="3">
          <!--    轮播图     -->
          <home-swiper :banners="banners" ref="hSwiper" @swiperImageLoad="swiperImageLoad"/>
          <!--    推荐商品展示    -->
          <recommend-view :recommends="recommend"></recommend-view>
          <!--    商品特色  -->
          <feature-view></feature-view>
          <!--    显示栏  -->
          <tab-control :title="['流行','新款','精选']"
                       @tabClick="tabClick"
                       ref="tabControl2"/>

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

import {debounce} from '@/common/utils'

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
      offsetTop : 0,
      isFixed : false,
      saveY: 0,//当切换界面的时候保存界面信息
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
      // const goods = [];
      // const originGoods = this.goods[this.currentType].list;
      // for (let el of originGoods) {
      //   const obj = {};
      //   obj.cfav = el.cfav;
      //   obj.price = el.price;
      //   obj.img = el.show.img;
      //   obj.title = el.title;
      //   // console.log(obj);
      //   goods.push(obj);
      // }
      // return goods;
      return this.goods[this.currentType].list
    },
    //用于触发加载图片刷新列表高度
    loadMoreImg(){
      return this.$store.state.home.isLoad;
    }
  },
  methods : {
    /**
     * 事件监听相关的方法
     * */
    tabClick(index){
      switch (index) {
        case 0 :
          this.currentType = 'pop';
          break;
        case 1 :
          this.currentType = 'new';
          break;
        case 2 :
          this.currentType = 'sell';
          break;
      }
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },
    backToTop(){
      // //没有封装的方法：先去拿这个组件（到this.$refs.scroll），然后拿到这个组件的属性（到this.$refs.scroll.scroll），然后调用所对应的方法（到this.$refs.scroll.scroll.scrollTo）
      this.$refs.scroll.scroll.scrollTo(0,0,520);/*传入的参数 （x，y，time） */
      //封装方法，减少在这个地方看到的代码量：
      // this.$refs.scroll.scrollTo(0,0,520);/*没有实现*/

    },//backToTop
    contentScroll(position){
      /*确定回到顶部在什么位置开始显示*/
      this.showBackTop = (position.y < -1000);/*在此处应该注意是y值，而不是直接使用position*/
        //  确定是否让tabbar固定
      this.isFixed = -position.y > this.offsetTop;
    },
    loadMore(){
      //继续加载首页中的商品数据
      this.getHomeGoods(this.currentType);
    },
    swiperImageLoad(){
      this.offsetTop = this.$refs.tabControl2.$el.offsetTop;
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
      // 数据是从第一页开始的，因此要先将参数加一才能正确请求，否则显示 400 状态码
      const page = this.goods[type].page + 1;//创建一个变量存储页数，才能动态请求数据
      //请求商品数据
      getHomeGoods(type,page).then(res => {
        // console.log(res);
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
        this.$refs.scroll.scroll.finishPullUp();
      });
    },//getHomeGoods
  },//methods
  //当组件被成功创建之后
  created() {
    // console.log(this.goods[this.currentType].list);
    //1.获取多个数据
    this.getHomeMUltidata();//要记得使用this调用，如果不使用this，则使用的是上面import中的内容，而使用了this，调用的是本组件中的这个方法
    //2.获取展示商品的数据
    this.getHomeGoods('pop');
    this.getHomeGoods('new');
    this.getHomeGoods('sell');

    // 3.监听item中图片加载完成,下面的方法事vue2中的方法
    // this.$bus.on('imageLoad',() => {
    //   console.log('图片加载完成');
    // });
  },//created
  unmounted() {
    console.log("销毁");
  },
  mounted() {
    // setTimeout(console.log(this.$refs.tabControl.$el.offsetTop),1000);
    // setInterval(console.log(this.$refs.tabControl.$el.offsetTop),5000)

  },//mounted
  //监听全局事件
  watch : {
    //如果上拉加载更多
    loadMoreImg(){
      //使用防抖函数,因为将这个方法抽离到common中的utils中。因此不用使用this调用
      // const refresh = this.debounce(this.$refs.scroll.scroll.refresh,200);/* 该组件有问题，更换调用其他的方法能够正常输出内容，不显示报错 */
      // const refresh = this.debounce(this.getHomeMUltidata,200);/* 传入这个函数的时候，能够正常的运行 */
      // const refresh = debounce(this,200);/* 先满足这个防抖需求 */

      // console.log(this.$refs.scroll.scroll.refresh);
      const refresh = debounce(this.$refs.scroll.scroll.refresh,200,this.$refs.scroll.scroll);
      refresh();
      //如果不使用防抖函数
      // this.$refs.scroll.scroll.refresh();
    },
  },
  activated() {
    //跳转到刚才离开的位置
    this.$refs.scroll.scroll.scrollTo(0,this.saveY,0);// x,y,time
  },
  deactivated() {
    //保存当前滚动条的位置
    this.saveY = this.$refs.scroll.scroll.y;
  }

}
</script>

<style scoped>

    .home {
        position: relative;
        height: 100vh;/*view height，也就是视口高度*/
        /*padding-top: 44px;*/
    }
    .home-nav {
      background-color: #fb7299;
      color: #fff;

      /*position: fixed;*/
      /*left: 0;*/
      /*right: 0;*/
      /*top: 0;*/
      /*z-index: 999;*/
  }

    .tabControl {
        position: relative;
        z-index: 9;
    }


    /*如果直接命名为tab-control的类，会导致相同类名的嵌套*/
    /*.fixed {*/
    /*    position: fixed;*/
    /*    left: 0;*/
    /*    right: 0;*/
    /*    top: 44px;*/
    /*    z-index: 9;!*当上拉商品列表的时候，防止标题会被挡住*!*/
    /*}*/


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
