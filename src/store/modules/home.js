export default {
  state : {
    // loadImg : Object,
    // 用于组件通信的时候触发目标组件的事件
    isLoad : false,
  },
  getters : {

  },
  mutations : {
    //修复上拉加载商品的时候无法正常上拉的BUG
    goodsImageLoad(state){/*刷新现有商品的高度*/

      //这种方式是在vuex中处理组件中所发生的事件
      // state.loadImg.refresh();

      state.isLoad = !state.isLoad;
    },
  }

}