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
                    <img :src="banner.imageUrl" width="100%"/>
                </van-swipe-item>
            </van-swipe>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                msg: 'shopping Mall',
                bannerPicArray:[
                    {imageUrl:require('@/assets/shoppingmallSwipper1.png')},
                    {imageUrl:require('@/assets/shoppingmallSwipper2.png')},
                    {imageUrl:require('@/assets/shoppingmallSwipper3.png')}
                ]
            }
        },
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
    height: 12rem;
    overflow: hidden;
}

</style>