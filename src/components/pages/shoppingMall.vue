<template>
    <div>
        <div class="search-bar">
            <van-row>
                <van-col span='3'>
                    <div class="iconfont icon-position">&#xe720;</div>
                </van-col>
                <van-col span='16'>
                    <input type="text" class="search-input" placeholder="查找">
                </van-col>
                <van-col span='5' class='search-btn'>
                    <van-button size="mini">查找</van-button>
                </van-col>
            </van-row>
        </div>
        <div class="swiper-area">
            <van-swipe :autoplay="1000">
                <van-swipe-item v-for="(banner,index) in bannerPicArray" :key="index">
                    <img :src="banner.image" width="100%"/>
                </van-swipe-item>
            </van-swipe>
        </div>
        <!--type-bar-->
        <div class="type-bar">
          <div v-for="(cate,index) in category" :key="index">
            <img v-lazy="cate.image" width="90%"/>
            <span>{{cate.mallCategoryName}}</span>
          </div>
        </div>
        <!-- adbanner -->
        <div>
          <img v-lazy="adBanner" width="100%"/>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        data() {
            return {
                msg: 'shopping Mall',
                bannerPicArray:[],
                category:[],
                adBanner:''
            }
        },
        created(){
          axios({
            url:"https://www.easy-mock.com/mock/5c6ab2b0d8bc8b31033c3605/shoppingMall/index",
            method:"get"
          })
          .then(response => {
            console.log(response);
            if(response.status == 200){
              this.category = response.data.data.category;
              this.adBanner = response.data.data.advertesPicture.PICTURE_ADDRESS;
              this.bannerPicArray = response.data.data.slides;
            }
          })
          .catch(error => {
            console.log(error)
          })
        }
    }
</script>

<style scoped>
.search-bar{
    height: 2.2rem;
    background-color: #e5017d;
    line-height: 2.2rem;
    overflow: hidden;
}
.icon-position{
    text-align: center;
    font-size:1.8rem;
    padding-top: 0.2rem;
    color: #fff;
}
.search-input{
    width: 100%;
    height: 1.3rem;
    border-top: 0px;
    border-right: 0px;
    border-left: 0px;
    border-bottom: 1px solid #fff;
    background-color: #e5017d;
    color:#fff;
}
.search-btn{
    text-align: center;
}
.swiper-area{
    clear: both;
    height: 9rem;
    overflow: hidden;
}
.type-bar{
  background-color: #fff;
  margin: 0 .2rem .2rem .2rem;
  font-size: 14px;
  border-radius: .3rem;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}
.type-bar div{
  padding: .3rem;
  font-size: 12px;
  text-align: center;
}
</style>