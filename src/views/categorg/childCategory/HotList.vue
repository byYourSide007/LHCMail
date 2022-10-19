<template>
    <div class="hot">
        <scroll probe-type="3"
                class="scroll">
            <div class="title">
                <img src="@/assets/img/category/hot.svg" alt="热搜" class="topImg">
                <p class="hotSearch"><b>万盛热搜</b></p>
                <p class="allKnow">今日热搜全知道 ></p>
            </div>
            <div class="list"
                 v-for="(item,index) in hotList"
                 :key="index">
                <div class="listItem">
                    <div class="listItemCount"><span >{{index + 1}}</span></div>
                    <div class="listItemElement">{{item}}</div>
                    <hr>
                </div>
            </div>
        </scroll>
    </div>
</template>

<script>
    import Scroll from "@/components/common/scroll/Scroll";
  export default {
    name: "HotList",
    data(){
        return {
          hotList : [
            '敏感鸡也能用',
            '周杰伦2022新专辑',
            '黄桃党真的会谢',
            '真相只有一个',
            '周玉坤少女心布艺',
            '刘锡山用了都说好的男生保护套',
            '噗噗叽叽',
            '今夏要有骗子连衣裙',
            '消暑小窍门',
            '蹬蹬蹬'
          ]
        }
    },
    components : {
      Scroll
    }
  }
</script>

<style scoped>
    .hot{
        position: relative;
        width: 96vw;
        min-width: 230px;
        height: 60vh;
        margin: 15px auto;
        border: 1px solid goldenrod;
        border-radius: 10px;
        text-overflow: ellipsis;
    }
    .title {
        position: relative;
        display: flex;
        width: 100%;
        height: 50px;
        color: darkgoldenrod;
    }
    .topImg { width: 30px;}
    .allKnow {margin-left: 130px}
    .list {
        display: flex;
        flex-flow: column nowrap;
        margin-top: 8px;
        margin-left: 10px;
        max-lines: 1;
        text-overflow: ellipsis;
    }
    .listItem {
        display: flex;
        width: 600px;
        height: 20px;
        flex-flow: row nowrap;
    }
    .listItem hr {
        /*height: ;*/
        width: 80vw;
        opacity: .1;
    }
    .listItemCount {
        width: 20px;
        height: 20px;
        text-align: center;
        background-color: #ff5f3e;
        color: #fff;
    }
    .listItemElement {
        padding-left: 5px;
    }
    .scroll {
        position: absolute;
    }
</style>