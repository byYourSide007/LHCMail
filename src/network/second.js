import {request} from "@/network/request";

export function getGoods(type,page) {
  return request({
    url : "/home/data",
    params : {
      type,
      page
    }
  })
}