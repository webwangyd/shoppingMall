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
<<<<<<< HEAD
                    <van-button size="mini">查找2</van-button>
=======
                    <van-button size="mini">查找</van-button>
>>>>>>> 39c5a45745b4628a1601e71bbf9d85dee2dfa7bd
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
        <!--Recommend goods area-->
        <div class="recommend-area">
            <div class="recommend-title">
                商品推荐
            </div>
            <div class="recommend-body">
              <!--swiper-->
              <swiper :options="swiperOption">
                  <swiper-slide v-for=" (item ,index) in recommendGoods" :key="index">
                      <div class="recommend-item">
                              <img :src="item.image" width="80%" />
                              <div>{{item.goodsName}}</div>
                              <div>￥{{item.price | moneyFilter}} (￥{{item.mallPrice | moneyFilter}})</div>
                      </div>
                  </swiper-slide>
              </swiper>
            </div>
        </div>
        <!--floor one area-->
        <floor-component :floorData = "floor1" :floorTitle="floorTitle.floor1"></floor-component> 
        <floor-component :floorData = "floor2" :floorTitle="floorTitle.floor2"></floor-component> 
        <floor-component :floorData = "floor3" :floorTitle="floorTitle.floor3"></floor-component> 
        <!--Hot Area-->
        <div class="hot-area">
            <div class="hot-title">热卖商品</div>
            <div class="hot-goods">
              <!--这里需要一个list组件-->
              <van-list>
                 <van-row gutter = '20'>
                   <van-col span = '12' v-for="(item,index) in goodsInfo" :key="index">
                     <goods-info :goodsImage='item.image' :goodsName='item.name' :goodsPrice='item.price'></goods-info>
                   </van-col>
                 </van-row>
              </van-list>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import 'swiper/dist/css/swiper.css'
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    import floorComponent from '../component/floorComponent'
    import goodsInfo from '../component/goodsInfoComponent'
    import {toMoney} from '@/filter/moneyFilter.js'
    import url from '@/serviceAPI.config.js'
    export default {
        components: {
          swiper,
          swiperSlide,
          floorComponent,
          goodsInfo
        },
        filters:{
          moneyFilter(money){
            return toMoney(money)
          }
        },
        data() {
            return {
              swiperOption:{
                slidesPerView:3
              },
              msg: 'shopping Mall',
              bannerPicArray:[],
              category:[],
              adBanner:'',
              recommendGoods:[],
              floor1:[],
              floor2:[],
              floor3:[],
              floor1_0:{},
              floor1_1:{},
              floor1_2:{},
              floorTitle:{},
              goodsInfo:[]

            }
        },
        created(){
          axios({
            url:url.getShoppingMallData,
            method:"get"
          })
          .then(response => {
            console.log(response);
            if(response.status == 200){
              this.category = response.data.data.category;
              this.adBanner = response.data.data.advertesPicture.PICTURE_ADDRESS;
              this.bannerPicArray = response.data.data.slides;
              this.recommendGoods = response.data.data.recommend;
              this.floor1 = response.data.data.floor1;  //楼层1数据
              this.floor2 = response.data.data.floor2;
              this.floor3 = response.data.data.floor3;          
              this.floorTitle = response.data.data.floorName;
              this.goodsInfo = response.data.data.hotGoods;
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
.recommend-area{
  background-color: #fff;
  margin-top: .3rem;
}
.recommend-title{
  border-bottom:1px solid #eee;
  font-size:14px;
  padding:.2rem;
  color:#e5017d;
}
.recommend-body{
  border-bottom: 1px solid #eee;
  }
.recommend-item{
  width:99%;
  border-right: 1px solid #eee;
  font-size: 12px;
  text-align: center;
}
.hot-area{
  text-align: center;
  font-size: 14px;
  height: 1.8rem;
  line-height: 1.8rem;
}
</style>