const mongoose = require('mongoose')
const db = "mongodb://127.0.0.1:27017/shoppingMall-db"
const glob = require('glob')
const {resolve} = require('path')

exports.initSchemas = () =>{
  glob.sync(resolve(__dirname,'./schema/','**/*.js')).forEach(require)
}

exports.connect = ()=>{
     let opts = {
      useCreateIndex: true,
      useNewUrlParser: true
     };
    mongoose.connect(db,opts)
    let maxLinkTimes = 0
    //增加数据库连接的事件监听
    return new Promise((resolve,reject)=>{
        mongoose.connection.on('disconnected',()=>{
            //进行重连
            if(maxLinkTimes < 3){
              maxLinkTimes++
              mongoose.connect(db,opts)
            }else{
              reject()
              throw new Error("*******数据库连接断开*********")
            }
        })
        //数据库出现错误的时候
        mongoose.connection.on('error',err=>{
          if(maxLinkTimes < 3){
            maxLinkTimes++
            mongoose.connect(db,opts)
          }else{
            reject(err)
            throw new Error("*******数据库连接错误*********")
          }
        })
        //链接打开的时候
        mongoose.connection.once('open',()=>{
            console.log('MongoDB Connected successfully!')
            resolve()
        })
    })
}