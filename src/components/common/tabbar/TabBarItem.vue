<template>
    <div class="tab-bar-item" @click="itemClick">
        <div v-if="!isActive"><slot name="item-icon"></slot></div>
        <div v-else><slot name="item-icon_active"></slot></div>
        <div :style="activeStyle"><slot name="item-text"></slot></div>
    </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    props : {
      path : String,
      activeColor : {
        type : String,
        default : 'red',
      }
    },
    data() {
        return {
          // isActive : false,
        }
    },
    computed : {
      isActive(){
        return  this.$route.path.indexOf(this.path) !== -1
      },
      activeStyle(){
        return this.isActive ? {color: this.activeColor} : {};
      },
    },
    methods : {
      itemClick(){
        // console.log('item');
        this.$router.push(this.path)
      },
  }
  }
</script>

<style>
    /*设置单个项目文件内容*/
    .tab-bar-item{
        flex: 1;
        text-align: center;
        /*  在选项点击区域设置高度一般为49px，类似于settimeout方法中的三十毫秒，这样设置点击区域不会很小，也不至于很大，能够方便使用  */
        height: 49px;
        /*字体有点大，设置小一点*/
        font-size: 14px;
    }

    /*!*设置图片的样式*!*/
    .tab-bar-item img {
        height: 26px;
        /*    将总体样式往下设置一点*/
        margin-top: 3px;
    /*    图片下面会有三个像素的富裕空间，可以设置下面的属性让其去除这三个像素的空间,让问题和图片更加的紧凑*/
        vertical-align: middle;
    }


    /*.active {*/
    /*    color: red;*/
    /*}*/

    /*.router-link-active button{*/
    /*    color: #f00;*/
    /*}*/
    /*.router-link-active{*/
    /*    color: #f00;*/
    /*}*/


</style>