const Koa = require('koa')
const app = new Koa()
const mongoose = require('mongoose')
const {connect,initSchemas} = require('./database/init.js')
//立即执行函数
;(async () =>{
  await connect()
  initSchemas()
  const User = mongoose.model('User')
  let oneUser = new User({userName:'webwangyd15',password:'1234567'})
  oneUser.save().then(()=>{
      console.log('插入成功')
  })
  let  users = await  User.findOne({})
  console.log('------------------')
  console.log(users)
  console.log('------------------')  
})()
app.use(async(ctx) => {
  ctx.body = '<h1>hello webwangd</h1>'
})
app.listen(3000,()=>{
  console.log('[Server] starting at port 3000')
})