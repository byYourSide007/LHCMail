export default {
  //将上传的商品信息添加到购物车
  addToCart(state,payload){
    //默认商品不选中
    payload.checked = false;

    // payload 为新添加的商品
    // console.log(payload)
    let oldProduct = null;//先默认购物车中不存在该上传的商品
    for (const item of state.cartList) {//遍历购物车中存在的元素，查看其中是否已经存在该商品信息
      if (item.iid === payload.iid){//如果新上传的项目就是购物车中已经存在的元素
        oldProduct = item;//将 item 浅拷贝一份 赋值给oldProduct，后面就对其进行处理
      //  一方面，oldProduct 用来判断购物车中是否存在该商品
      //  另一方面，oldProduct 当浅拷贝一份之后，当改变对象中的数据，指针指向的数据内容也会跟着改变（在此处要注意，所使用的 item 是一个商品对象
      }
    }

    if (oldProduct){//如果 oldProduct 不是假性值，也就说明该商品已经存在
      oldProduct.count += 1;//只需要将已经存在的商品的数量加一，因为 oldProduct 的指针仍然指向购物车中的指定商品
    }else {
      payload.count = 1;
      state.cartList.push(payload);
    }
    // state.cartList.push(payload)
  },


//  登录用户的状态
  user(state,payload){
    state.user = payload
  }
}