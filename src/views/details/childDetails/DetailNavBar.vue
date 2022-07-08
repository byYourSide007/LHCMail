<template>
    <div id="detailNavBar">
        <nav-bar>
            <nav-bar-item>
                <template #left>
                    <div class="back" @click="backClick">
                        <div><img src="@/assets/img/common/back.svg" alt="返回"></div>
                    </div>
                </template>
                <template #center >
                    <div class="title">
                        <div  v-for="(item,index) in title"
                              :key="item"
                              class="title-item"
                              :class="{active:index === currentIndex}"
                              @click="titleClick(index)">{{item}}</div>
                    </div>
                </template>
            </nav-bar-item>
        </nav-bar>
    </div>
</template>

<script>
  import NavBar from "@/components/common/navbar/NavBar";
  import NavBarItem from "@/components/common/navbar/NavBarItem";
  export default {
    name: "DetailNavBar",
    data(){
      return{
        title : ["商品","参数","评论","推荐"],
        currentIndex:0,
      }
    },
    components: {
      NavBar,
      NavBarItem,
    },
    methods:{
      titleClick(index){
        this.currentIndex = index;
        this.$emit('titleClick',index);
      },
      backClick(){
        // this.$router.go(-1);
        this.$router.back();
      }
    }
  }
</script>

<style scoped>
    .title{
        display: flex;
        font-size: 17px;
    }
    .title-item {
        flex: 1;
    }
    .active{
        color: deeppink;
        /*color: #880000;*/
    }
    .back img{
        width: 40px;
        margin-top: 5px;
        margin-left: 8px;
    }
</style>