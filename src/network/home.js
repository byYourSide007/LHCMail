import {request} from "@/network/request";

export function getHomeMUltidata() {
  return request({
    url : '/home/multidata',
  })
}

//我们需要参数，来确定所要请求的数据类型（这个数据类型就比如是流行的商品类型，还是新款的商品类型或是其他）
//          page就是确定所要请求的是第几页内容
export function getHomeGoods(type,page) {
  return request({
    url : '/home/data',
    //这个部分是query内容，
    params : {
      type,
      page,
    }
  });
}