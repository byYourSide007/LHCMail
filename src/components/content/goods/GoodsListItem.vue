<template>
    <div class="goods-item" @click="showDetails">
        <img :src="showImg" @load="imageLoad" >
        <div class="goods-info">
            <p>{{goodsItem.title}}</p>
            <span class="price">￥{{goodsItem.price}}</span>
            <span class="collect">{{goodsItem.cfav}}</span>
        </div>
    </div>
</template>

<script>

  export default {
    name: "GoodsListItem",
    props : {
      goodsItem : {
        type : Object,
        default(){
          return {};
        }
      }
    },
    computed:{
      showImg(){

        //使用这种方式，即使返回的顺序不对也会报错，下面的部分的顺序不可更改
        // return this.goodsItem.show.img || this.goodsItem.image;
        // return this.goodsItem.image || this.goodsItem.show.img;

        // return this.goodsItem.image?this.goodsItem.image:this.goodsItem.show.img;
        // return this.goodsItem?.show?.img?this.goodsItem.show.img:this.goodsItem.image;

        // 记得在不确定是否存在的属性前面加上就可以，但是现在需要加在后面连带属性上面
        return this.goodsItem?.show?.img || this.goodsItem.image;

      },
    },
    methods : {
      //当加载完成之后，调用这个函数，将这个方法传递到主页中，也就是home.vue组件中
      imageLoad(){
        //使用vuex 方式
        this.$store.commit('goodsImageLoad');
        // this.$emit('')
      },
      showDetails(){
        // console.log(this.goodsItem);
        this.$router.push('/details/' + this.goodsItem.iid);
      },
    },
  }
</script>

<style scoped>
    .goods-item {
        padding-bottom: 40px;
        position: relative;
        width: 48%;/*如果设置了这个属性，则会导致上面所有界面的定位都失效*/
    /*    上面原先失效的原因，是因为由于前面样式的调整，以至于将 style中的 scoped 进行删除掉，恢复scoped 便可以正常设置*/
    }

    /*.goods img {*/
    /*    !*width: 100%;*!*/
    /*    width: 48%;*/
    /*    border-radius: 5px;*/
    /*}*/

    .goods-item img{
        width: 100%;
    }

    .goods-info {
        font-size: 12px;
        position: absolute;
        bottom: 5px;
        left: 0;
        right: 0;
        overflow: hidden;
        text-align: center;
    }

    .goods-info p {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin-bottom: 3px;
    }

    .goods-info .price {
        color: var(--color-high-text);
        margin-right: 20px;
    }

    .goods-info .collect {
        position: relative;
    }

    .goods-info .collect::before {
        content: '';
        position: absolute;
        left: -15px;
        top: 0;
        width: 14px;
        height: 14px;
        /*background: url("~assets/img/common/collect.svg") 0 0/14px 14px;*/
        background: url("@/assets/img/common/collect.svg") 0 0/14px 14px;

    }
</style>