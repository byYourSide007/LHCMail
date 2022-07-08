import { createStore } from 'vuex'
import home from "@/store/modules/home";
import mutations from "@/store/modules/mutations";
import getters from "@/store/modules/getters";
import actions from "@/store/modules/actions";
// import path from 'path'
// const path = require('path')


export default createStore({
  state: {
    cartList:[],
    //存储用户登录的信息
    personalData: [
      {
        id : 0,
        arrowhead : require('@/assets/img/profile/profile_photo.svg'),
        username : '登录/注册',
        password:123456,
        phone: '暂无手机绑定'
      },
      {
        id : 1,
        // arrowhead :'@/assets/img/profile/arrowhead/lhc.jpg',
        // arrowhead :'src/assets/img/profile/arrowhead/lhc.jpg',
        // arrowhead :'src/assets/img/profile/arrowhead/lhc.jpg',
        // arrowhead :path.join(__dirname,'src/assets/img/profile/arrowhead/lhc.jpg'),
        arrowhead : require('@/assets/img/profile/arrowhead/lhc.jpg'),
        username : 'lhc',
        password:'123456',
        phone: '1762338539'
      },
      {
        id : 2,
        arrowhead : require('@/assets/img/profile/arrowhead/lxs.jpg'),
        username : 'lxs',
        password:'123456',
        phone: '17538398043'
      },
      {
        id : 3,
        arrowhead : require('@/assets/img/profile/arrowhead/zyk.jpg'),
        username : 'zyk',
        password:'123456',
        phone: '18639000704'
      },
    ],
    user: Number(0)
  },
  getters,
  mutations,
  actions,
  modules: {
    home,
  }
})
