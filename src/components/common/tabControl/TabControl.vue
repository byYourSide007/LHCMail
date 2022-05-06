<template>
    <div class="tab-control">
        <div v-for="(item,index) in title"
             :key="index" class="tab-control-item"
             @click="itemClick(index)"
            >

            <span   :class="{active : index === currentIndex}">{{item}}</span>
        </div>
    </div>
</template>

<script>
  export default {
    name: "TabControl",
    data(){
      return {
        currentIndex : 0,
      }
    },
    props : {
      title : {
        type : Array,
        default(){
          return [];
        }
      },
    },
    computed : {

      // itemClick(index) {
      //   this.currentIndex = index;
      // }

    },
    methods : {
        itemClick(index) {
          this.currentIndex = index;
        }
    }
  }
</script>

<style scoped>
    .tab-control {
        display: flex;
        text-align: center;
        font-size: 15px;
        height: 40px;
        line-height: 40px;
        background-color: #fff;
    }
    .tab-control-item {
        flex: 1;
    }

    .active {
        color: #ff5777;
        border-bottom: 3px solid red;
    }
/*
    也可以将上面的语法分成两个部分
            首先，是将动态绑定的active类放到div中
            然后，active类中的样式为：
                        .active {
                            color: #ff5777;
                        }
            接着，新增一个设置样式 ：
                            .active span {
                                border-bottom: 3px solid red;
                            }
            和下面的设置内容一样的效果：
                    .active {
                        color: #ff5777;
                        border-bottom: 3px solid red;
                    }


            <span :class="{active : index === currentIndex}">{{item}}</span>
*/

</style>