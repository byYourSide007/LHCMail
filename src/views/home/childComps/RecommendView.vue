<template>
    <div class="recommend">
        <div class="recommend-item" v-for="(item,index) in recommends" :key="index" >
            <a :href="item.link">
                <img :src="item.image" alt="...">
                <div>{{item.title}}</div>
            </a>
        </div>
    </div>
</template>

<script>
  export default {
    name: "RecommendView",
    props : {
      recommends : {
        type : Array,
        default() {
          return [];
        }
      }
    },
  }
</script>

<style scoped>
    .recommend {
        display: flex;
        text-align: center;
        width: 100%;
        padding: 10px 0 30px;
        border-bottom: 8px solid #eee;
        font-size: 16px;
    }
    .recommend-item{
        flex: 1;
    }
    .recommend-item img{
        width: 100px;
        align-content: center;
    }



</style>