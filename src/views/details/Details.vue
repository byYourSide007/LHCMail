<template>
    <div id="details">
        <detail-nav-bar
                class="detail-nav-bar"
                @titleClick="titleClick"
                ref="navBar"/>
        <Scroll
                class="content"
                ref="scroll"
                @scroll="scroll">
            <detail-swiper :top-images="topImages"></detail-swiper>
            <detail-base-info :goods="goods"></detail-base-info>
            <detail-shop-info :shop="shop"></detail-shop-info>
            <detail-goods-info :detailInfo="detailInfo" @imgLoad="imgLoad"></detail-goods-info>
            <detail-param-info :paramInfo="paramInfo" ref="params"></detail-param-info>
            <detail-comment-info :comment-info="commentInfo" ref="comment"></detail-comment-info>
            <goods-list :goods="recommends" ref="recommend"></goods-list>
        </Scroll>
        <detail-bottom-bar
                class="detail-bottom-bar"
                @addToCart="addToCart"></detail-bottom-bar>
    </div>
</template>

<script>
// <!--    导入子组件模块-->
    import DetailNavBar from "@/views/details/childDetails/DetailNavBar";
    import DetailSwiper from "@/views/details/childDetails/DetailSwiper";
    import DetailBaseInfo from "@/views/details/childDetails/DetailBaseInfo";
    import DetailShopInfo from "@/views/details/childDetails/DetailShopInfo";
    import DetailGoodsInfo from "@/views/details/childDetails/DetailGoodsInfo";
    import DetailParamInfo from "@/views/details/childDetails/DetailParamInfo";
    import DetailCommentInfo from "@/views/details/childDetails/DetailCommentInfo";
    import DetailBottomBar from "@/views/details/childDetails/DetailBottomBar";

    //导入组织内容的框架
    import Scroll from "@/components/common/scroll/Scroll";
    import GoodsList from "@/components/content/goods/GoodsList";

    //导入请求网络数据模块
    import {getDetails,Goods,Shop,GoodsParam,getRecommend} from '@/network/detail';
import {debounce} from "@/common/utils";

    export default {
    name: "DetailsView",
    data(){
      return {
        iid : null,
        topImages: null,
        goods: Object,
        shop: Object,
        detailInfo: Object,
        paramInfo: Object,
        commentInfo:Object,
        recommends: [],
        itemOffsetTop:[],
        getThemeTopY: null,
        currentIndex:0,
      }
    },
    components:{
      DetailSwiper,
      DetailNavBar,
      DetailBaseInfo,
      DetailShopInfo,
      Scroll,
      DetailGoodsInfo,
      DetailParamInfo,
      DetailCommentInfo,
      GoodsList,
      DetailBottomBar,

    },
      methods:{
        imgLoad(){
          //让滚动条重新计算高度,后面的 scroll 是定义为 scroll 别名的属性
          this.$refs.scroll.scroll.refresh();

          this.getThemeTopY();
        },
        titleClick(index){
          // console.log(index);
          this.$refs.scroll.scroll.scrollTo(0,this.itemOffsetTop[index],200);
        },
        scroll(position){
            const positionY = position.y;//确定当前滚动条所处于的 y 轴方向的位置
            // console.log(positionY);//在这里打印的 y 值本身就是负值，而教程中所编写的是需要加上负号，有待思考


          // for (const item in this.itemOffsetTop) {
          // //使用这种方式要注意 item 的数据类型是字符串类型
          //   console.log(typeof item);
          // }

        //    如果想使用 i 为数值类型的，可以使用 parseInt进行强制转换，也可以使用 i * 1 进行隐式转换，或者使用下面传统的方式
          const len = this.itemOffsetTop.length
          // for (let i = 0;i < len;i++){
          //   //有两种情况，当
          //   if ((i < len-1 && positionY < this.itemOffsetTop[i] && positionY > this.itemOffsetTop[i+1])
          //       || (i === len-1 && positionY < this.itemOffsetTop[i])){
          //     this.currentIndex = i
          //     this.refs.navBar.currentIndex = i;
          //   }
          // }

          for (let i = 0;i < len;i++){
            // 用下面的方式，可以节省更多的资源（如果上次上传过来的没有刷新位置，就不向NavBar传递信息
            if (this.currentIndex !== i && ((i < len-1 && positionY <= this.itemOffsetTop[i] && positionY >= this.itemOffsetTop[i+1])
                || (i === len-1 && positionY <= this.itemOffsetTop[i]))){
              this.currentIndex = i
              // this.$refs.navBar.currentIndex = this.currentIndex;
              this.$refs.navBar.currentIndex = i;
            }
          }

          // //使用倒叙
          // for (let i = len-1;i >= 0;i--){
          //   console.log(this.currentIndex+'-'+i);
          //   if((this.currentIndex !== i)  && (positionY <= this.itemOffsetTop[i])){
          //     this.currentIndex = i;
          //     console.log(i);
          //     this.$refs.navBar.currentIndex = i;
          //     break;
          //   }
          // //  上面这种方式会造成上面标签的闪动，存在BUG
          //原因就是: 当移动到下面的位置的时候,上面标签仍然满足判断条件,
          //因为所判断的位置是滚动位置是否在某个节点下方,而如果加上判断滚动条上方位置的条件,则与正序遍历也没有差别了
          // }

        },
        //点击  添加到购物车按钮 添加到购物车所选中的商品
        addToCart(){
          // console.log(this.goods)//查看其中的数据存放位置
          //整理购物车所需要的信息
          const product = {};
          product.image = this.topImages[0];
          product.title = this.goods.title;
          product.desc = this.goods.desc;
          product.price = this.goods.nowPrice;
          product.iid = this.iid
          this.$store.commit('addToCart',product)
        }
      },
    created() {
      // 保存传入的 iid
      this.iid = this.$route.params.id;
    //  根据 iid 请求详情的数据
      getDetails(this.iid).then(res  => {
        // console.log(res);
        const data = res.result;
        //1.获取顶部图片的轮播数据
        this.topImages = data.itemInfo.topImages;

        //2.获取商品信息
        this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services);

        // 3.获取店铺信息
        this.shop = new Shop(data.shopInfo);

      //  4.保存商品的详细数据
        this.detailInfo = data.detailInfo;

      //  5.保存商品参数信息
        this.paramInfo = new GoodsParam(data.itemParams.info,data.itemParams.rule)

      //  6. 保存评论信息
        if (data.rate.list) {//如果不存在评论信息，就不展示评论列表
          this.commentInfo = data.rate.list[0];
        }
        // this.itemOffsetTop.push(0)
        // this.itemOffsetTop.push(-this.$refs.params.$el.offsetTop)
        // this.itemOffsetTop.push(-this.$refs.comment.$el.offsetTop)
        // this.itemOffsetTop.push(-this.$refs.recommend.$el.offsetTop)

      });
      //请求推荐数据
      getRecommend().then(res => {
        // console.log(res);//测试数据是否有请求过来
        this.recommends = res.data.list;
      });

      // this.$nextTick(() =>{
      //
      // })

      //获取距离顶部的距离
        this.getThemeTopY = debounce(() => {
          this.itemOffsetTop = [];
          this.itemOffsetTop.push(0);
          this.itemOffsetTop.push(-this.$refs.params.$el.offsetTop);
          this.itemOffsetTop.push(-this.$refs.comment.$el.offsetTop);
          this.itemOffsetTop.push(-this.$refs.recommend.$el.offsetTop);
          // console.log(this.itemOffsetTop);
        },200);
    },
    }
</script>

<style scoped>
    #details{
        position: relative;
        z-index: 9;
        background-color: #fff;
        height: 100vh;
    }
    .detail-nav-bar {
        /* 不要随便使用绝对定位和fixed,能用相对定位就用相对定位,使用相对定位一般用来微调和 */
        position: relative;
        background-color: #fff;
        z-index: 9;
    }
    .content {
        position: relative;
        bottom: 70px;
        height: calc(100% - 44px);
    }
</style>