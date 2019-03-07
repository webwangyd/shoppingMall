const BASEURL = 'https://www.easy-mock.com/mock/5c6ab2b0d8bc8b31033c3605/shoppingMall/';
const LOCALURL = 'http://localhost:3000/';
const url = {
    getShoppingMallData : BASEURL + 'index',
    registerUser : LOCALURL + 'user/registry',
    loginUser : LOCALURL + 'user/login',
    getDetailGoodsInfo: LOCALURL + 'goods/getDetailGoodsInfo',
    getCategoryList:LOCALURL + 'goods/getCategoryList'

}
module.exports = url;