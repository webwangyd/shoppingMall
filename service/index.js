const Koa = require('koa')
const app = new Koa()
const mongoose = require('mongoose')
const {connect,initSchemas} = require('./database/init.js')
const Router = require('koa-router')
let user = require('./appApi/User.js')
let goods = require('./appApi/Goods.js')
//解决跨域
const cors = require('koa2-cors')
app.use(cors())
//post请求
const bodyParser = require('koa-bodyparser')
app.use(bodyParser())
//装载所有子路由
let router = new Router()
router.use('/user',user.routes())
router.use('/goods',goods.routes())
//加载路由中间件
app.use(router.routes())
app.use(router.allowedMethods())
;(async () =>{
  await connect()
  initSchemas()
  // const User = mongoose.model('User')
  // let newUser = new User({userName:'webwangyd',password:'123456'})
  // newUser.save().then(res=>{
  //   console.log('新建用户成功')
  // }).catch((err)=>{
  //   console.log('新建用户失败')
  //   console.log(err)
  // })
})()
app.use(async(ctx) => {
  ctx.body = '<h1>hello webwangd</h1>'
})
app.listen(3000,()=>{
  console.log('[Server] starting at port 3000')
})