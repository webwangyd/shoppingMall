const mogoose = require("mongoose")
const Schema = mogoose.Schema
let ObjectId = Schema.Types.ObjectId
const userSchema = new Schema({
    userId:{type:ObjectId},
    userName:{unique:true,type:String},
    password:String,
    createdAt:{type:Date,default:Date.now()},
    lastLoginAt:{type:Date,default:Date.now()}
})
//发布模型
mogoose.model('User',userSchema)
