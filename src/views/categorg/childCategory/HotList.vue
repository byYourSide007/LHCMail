<template>
    <div class="hot">
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
    </div>
</template>

<script>
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
  }
</script>

<style scoped>
    .hot{
        margin-top: 10px;
        margin-left: 15px;
        margin-right: 15px;
        border: 1px solid goldenrod;
        border-radius: 10px;
    }
    .title {
        display: flex;
        height: 50px;
        color: darkgoldenrod;
    }
    .topImg {
        width: 30px;
    }
    .hotSearch{
        flex: 1;
    }
    .allKnow {
        padding-right: 5px;
        /*right: 0;*/
        /*padding-right: 0;*/
        /*text-align: right;*/
    }
    .list {
        margin-top: 5px;
        /*border-bottom: 1px solid #a3a3a5;*/

    }
    .listItem {
        display: flex;
        flex-flow: row wrap;
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
</style>