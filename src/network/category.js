import { request } from "./request.js";

export function getGoodsTitle(type,page) {
  return request({
    url : "/home/data",
    params : {
      type,
      page
    }
  })
}