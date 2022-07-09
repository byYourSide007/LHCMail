<template>
    <div id="cartList">
        <scroll class="content" ref="scroll">
            <list-item v-for="(item,index) in cartList"
                        :key="index"
                        :product="item"></list-item>
        </scroll>
        <for-sure v-if="IsShow"
                  @cancel="cancel"
                  ></for-sure>
        <bottom-bar @show="show"></bottom-bar>
    </div>
</template>

<script>
// <!--    不能少去外面的大括号，否则会出现错误，提示 it is  not  a function -->
    import { mapGetters } from 'vuex'
    import ForSure from "@/views/cart/childCart/ForSure";

  //位置定位
    import Scroll from "@/components/common/scroll/Scroll";

  //  内容元素
    import ListItem from "@/views/cart/childCart/ListItem";
    import BottomBar from "@/views/cart/childCart/BottomBar";
  export default {
    name: "CartList",
    data(){
      return {
        IsShow: false
      }
    },
    computed: {
      ...mapGetters([
        'cartList'
      ])
    },
    methods: {
      cancel(){
        this.IsShow = false;
      },
      show(){
        // console.log('show')
        this.IsShow = true
      }
    },
    components: {
      Scroll,
      ListItem,
      BottomBar,
      ForSure

    },
    //如果不刷新这个滚动条的高度，则当添加完商品之后，滚动条还是为初始值为零
    activated() {
      this.$refs.scroll.scroll.refresh()
    }

  }
</script>

<style scoped>
    cartList {
        /*height: 100vh;*/
        height: 100%;
    }
    .content {
        /*如果使用百分之百，则滚动条是无法滚动的，而使用 100vh 则能够正常的滚动*/
        /*height: calc(100% - 44px - 49px);*/
        height: calc(100vh - 44px - 49px - 40px);
        overflow: hidden;
    }
</style>