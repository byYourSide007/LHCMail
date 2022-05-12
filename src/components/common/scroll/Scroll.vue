<template>
    <div class="wrapper" ref="wrapper"><!--这个盒子是根，ref一般绑定到子组件-->
        <div class="content"><!--这个盒子中存放的才是内容-->
            <slot ></slot>
        </div>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'

  export default {
    name: "BScroll",
    data(){
      return {
        scroll : null,
      }
    },
    props : {
      probeType : {/*设定上拉加载类型*/
        type : Number,
        default : 3,
      },
      pullUpLoad : {
        type: Boolean,
        default: true,
      },
    },
    components : {

    },
    methods : {

    },
    mounted() {
      this.scroll = new BScroll(this.$refs.wrapper,{/*不能直接使用querySelect选中对应的类，因为这个组件是很多地方都会用到，而这个方法是只能选择第一个类名为指定类名的元素*/
        probeType : this.probeType, /*只要是滚动，都检测*/
        pullUpLoad : this.pullUpLoad,/*可以设定上拉加载更多的事件*/
        click : true,
      });
      this.scroll.on('scroll',position => {
        this.$emit('scroll',position);
      });
      this.scroll.on('pullingUp',() => {
        this.$emit("pullingUp");
      })
    }
  }
</script>

<style scoped>

</style>