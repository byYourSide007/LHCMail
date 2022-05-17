export default {
  state : {
    loadImg : Object,
  },
  getters : {

  },
  mutations : {
    //修复上拉加载商品的时候无法正常上拉的BUG
    goodsImageLoad(state){/*刷新现有商品的高度*/
      state.loadImg.refresh();
    },
  }

}