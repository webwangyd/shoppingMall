const Koa = require('koa')
const app = new Koa()
const mongoose = require('mongoose')
const {connect,initSchemas} = require('./database/init.js')
const Router = require('koa-router')
let user = require('./appApi/User.js')
//解决跨域
const cors = require('koa2-cors')
app.use(cors())
//post请求
const bodyParser = require('koa-bodyparser')
app.use(bodyParser())
//装载所有子路由
let router = new Router()
router.use('/user',user.routes())
//加载路由中间件
app.use(router.routes())
app.use(router.allowedMethods())
;(async () =>{
  await connect()
  initSchemas()
})()
app.use(async(ctx) => {
  ctx.body = '<h1>hello webwangd</h1>'
})
app.listen(3000,()=>{
  console.log('[Server] starting at port 3000')
})