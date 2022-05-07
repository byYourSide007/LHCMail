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
      <!--    显示栏  -->
          <tab-control :title="['流行','新款','精选']" class="tab-control-position" @tabClick="tabClick"></tab-control>
      <!--    商品展示    -->
          <goods-list :goods="showGoods"></goods-list>

      <ul>
          <li>列表1</li>
          <li>列表2</li>
          <li>列表3</li>
          <li>列表4</li>
          <li>列表5</li>
          <li>列表6</li>
          <li>列表7</li>
          <li>列表8</li>
          <li>列表9</li>
          <li>列表10</li>
          <li>列表11</li>
          <li>列表12</li>
          <li>列表13</li>
          <li>列表14</li>
          <li>列表15</li>
          <li>列表16</li>
          <li>列表17</li>
          <li>列表18</li>
          <li>列表19</li>
          <li>列表20</li>
          <li>列表21</li>
          <li>列表22</li>
          <li>列表23</li>
          <li>列表24</li>
          <li>列表25</li>
          <li>列表26</li>
          <li>列表27</li>
          <li>列表28</li>
          <li>列表29</li>
          <li>列表30</li>
          <li>列表31</li>
          <li>列表32</li>
          <li>列表33</li>
          <li>列表34</li>
          <li>列表35</li>
          <li>列表36</li>
          <li>列表37</li>
          <li>列表38</li>
          <li>列表39</li>
          <li>列表40</li>
          <li>列表41</li>
          <li>列表42</li>
          <li>列表43</li>
          <li>列表44</li>
          <li>列表45</li>
          <li>列表46</li>
          <li>列表47</li>
          <li>列表48</li>
          <li>列表49</li>
          <li>列表50</li>
          <li>列表51</li>
          <li>列表52</li>
          <li>列表53</li>
          <li>列表54</li>
          <li>列表55</li>
          <li>列表56</li>
          <li>列表57</li>
          <li>列表58</li>
          <li>列表59</li>
          <li>列表60</li>
          <li>列表61</li>
          <li>列表62</li>
          <li>列表63</li>
          <li>列表64</li>
          <li>列表65</li>
          <li>列表66</li>
          <li>列表67</li>
          <li>列表68</li>
          <li>列表69</li>
          <li>列表70</li>
          <li>列表71</li>
          <li>列表72</li>
          <li>列表73</li>
          <li>列表74</li>
          <li>列表75</li>
          <li>列表76</li>
          <li>列表77</li>
          <li>列表78</li>
          <li>列表79</li>
          <li>列表80</li>
          <li>列表81</li>
          <li>列表82</li>
          <li>列表83</li>
          <li>列表84</li>
          <li>列表85</li>
          <li>列表86</li>
          <li>列表87</li>
          <li>列表88</li>
          <li>列表89</li>
          <li>列表90</li>
          <li>列表91</li>
          <li>列表92</li>
          <li>列表93</li>
          <li>列表94</li>
          <li>列表95</li>
          <li>列表96</li>
          <li>列表97</li>
          <li>列表98</li>
          <li>列表99</li>
          <li>列表100</li>
      </ul>
  </div>
</template>

<script>
// <!-- 可以将导入的组件分成几个部分，（1）导入的方法。（2）子组件。（3）公共组件。（4）导入的数据。-->
import NavBar from "@/components/common/navbar/NavBar";
import NavBarItem from "@/components/common/navbar/NavBarItem";
import TabControl from "@/components/common/tabControl/TabControl";
import GoodsList from "@/components/content/goods/GoodsList";

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
      })
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

}
</script>

<style scoped>

    .home {
        padding-top: 44px;
    }
  .home-nav {
    background-color: #fb7299;
    color: #fff;
      position: fixed;
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
</style>
