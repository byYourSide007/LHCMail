<template>
    <div class="bottom">
<!--        全选操作-->
        <div class="check" @click="chooseAll" >
            <check-button
                    class="check-button"
                    :value="isChecked"></check-button>
            <div class="check-word">全选</div>
        </div>
        <!--显示当前被选中的商品的-->
        <div class="totalPrice">
            总价格：{{totalPrice}}
        </div>
<!--        去结算-->
        <div class="calculate"
            @click="toCalculate">
            去结算({{calculate}})
        </div>
    </div>
</template>

<script>
  import CheckButton from "@/views/cart/childCart/CheckButton";
  export default {
    name: "BottomBar",
    data(){
      return {
        checked: false,
      }
    },
    computed: {
      //计算总价格
      totalPrice(){
        // console.log(this.$store.state.cartList.filter(item => {
        //   item.checked;//被选中的商品
        // }))
        // let a = this.$store.state.cartList.filter(item => {
        //     item.checked;//被选中的商品
        //   })
        // console.log(a);
       return this.$store.getters.cartList.filter(item => {
           //不要忘记return 否则是无法接收到数据内容的
           return item.checked;//被选中的商品
         }).reduce((preValue,item) => {//将商品价格算出
           return preValue + item.price * item.count
         },0).toFixed(2)

      },
      calculate(){
        return this.$store.state.cartList.filter(item => {
          return item.checked
        }).length
      },
      isChecked(){
        // 在没添加购物车商品的时候，全选按钮便被选中状态，
        //为了防止这种状态产生,需要加上下面这句,也就是当购物车中商品数量为空的时候,让全选按钮为false状态
        if(this.$store.state.cartList.length === 0) {return false}

        //1.使用 filter 过滤函数
        //  !item.checked 表示是未选中的商品
        //  .length 表示表示未选中的商品的长度
        //  如果长度为零，则表示全部选中，而此时的计算的值为假性值
        //  当取反的时候，就是会转换成布尔值，真值
        //也可以转换成
        // return !this.$store.state.cartList.filter(item => !item.checked).length

        //2.使用 find 函数
        // return !this.$store.state.cartList.find(item => !item.checked);

        //3.使用every,遍历所有元素，如果所有元素都被选中
        return this.$store.state.cartList.every(item => item.checked);

        //4.

      }
    },
    methods: {
      chooseAll(){
        if(this.isChecked){
          this.$store.state.cartList.forEach(item => item.checked = false);
        }else {
          this.$store.state.cartList.forEach(item => item.checked = true);
        }

        // 尝试 简化代码
        // this.$store.state.cartList.forEach(item => item.checked = !this.isChecked);
        // this.$store.state.cartList.every(item => item.checked = !this.isChecked);
      //  这种方式是不可以的,因为两者的值是相互影响的,当其中一个值取反之后,其他的值会随之发生改变,最后会发生无法意料的问题

      },
      toCalculate(){
        // console.log('去结算')
        if (this.$store.state.cartList.length === 0){
          return;
        }
        this.$emit('show')
      }
    },
    components: {CheckButton},
    watch: {

    }

  }
</script>

<style scoped>
    .bottom {
        position: relative;
        display: flex;
        height: 40px;
        background-color: #eee;
    }
    .check {
        display: flex;
        align-items: center;
        padding-top: 10px;
    }
    .check-button {
        width: 20px;
        height: 20px;
        padding-left: 5px;
        line-height: 20px;
    }
    .check-word{
        padding-left: 5px;
    }
    .totalPrice {
        padding-top: 15px;
        padding-left: 30px;
        flex: 1;
    }
    .calculate {
        padding-top: 15px;
        /*padding-left: 10px;*/
        /*align-self: end;*/
        text-align: center;

        width: 100px;

        background-color: #ff5777;
        color: #fff;
    }
    .active{
        background-color: #ff5777;
    }
</style>