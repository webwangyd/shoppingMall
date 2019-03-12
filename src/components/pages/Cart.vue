<template>
    <div>
        <div class="navbar-div">
             <van-nav-bar   title="购物车" /> 
        </div>
    </div>
</template>

<script>
    export default {
        data() {
          return {
              cartInfo: [],     //购物车内的商品
              isEmpty : false , //购物车是否为空，不为空则显示true，为空显示false
          }
        },
        created(){
          this.getCartInfo()
        },
        methods: {
          getCartInfo(){
            if(localStorage.cartInfo){
              this.cartInfo = JSON.parse(localStorage.cartInfo)
            }  
            console.log("this.cartInfo"+JSON.stringify(this.cartInfo))
            this.isEmpty = this.cartInfo.length > 0 ? false : true
          }
        },
    }
</script>

<style scoped>
.navbar-div > div{
  background-color: #e5017d;
}
</style>