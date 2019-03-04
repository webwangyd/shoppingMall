const Router = require('koa-router')
const mongoose = require('mongoose')
let router = new Router()
const fs = require('fs')
router.get('/insertAllGoodsInfo',async(ctx)=>{
    fs.readFile('./data_json/newGoods.json','utf8',(err,data)=>{
       data=JSON.parse(data)
       let saveCount=0
       const Goods = mongoose.model('Goods')
       data.map((value,index)=>{
           console.log(value)
           let newGoods = new Goods(value)
           newGoods.save().then(()=>{
               saveCount++
               console.log('成功'+saveCount)
           }).catch(error=>{
                console.log('失败：'+error)
           })
       })
   })
   ctx.body="开始导入数据"
})
router.get('/insertAllCategoryInfo',async(ctx)=>{
    fs.readFile('./data_json/category.json','utf8',(err,data)=>{
       data=JSON.parse(data)
       let saveCount=0
       const GooCategory = mongoose.model('Category')
       data.RECORDS.map((value,index)=>{
           console.log(value)
           let newGooCategory = new GooCategory(value)
           newGooCategory.save().then(()=>{
               saveCount++
               console.log('成功'+saveCount)
           }).catch(error=>{
                console.log('失败：'+error)
           })
       })
   })
   ctx.body="开始导入数据"
})
router.get('/insertAllCategorySubInfo',async(ctx)=>{
    fs.readFile('./data_json/category_sub.json','utf8',(err,data)=>{
       data=JSON.parse(data)
       let saveCount=0
       const CategorySub = mongoose.model('CategorySub')
       data.RECORDS.map((value,index)=>{
           console.log(value)
           let newCategorySub = new CategorySub(value)
           newCategorySub.save().then(()=>{
               saveCount++
               console.log('成功'+saveCount)
           }).catch(error=>{
                console.log('失败：'+error)
           })
       })
   })
   ctx.body="开始导入数据"
})
module.exports = router