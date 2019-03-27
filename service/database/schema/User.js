//mongoose建立注册用户的数据模型
const mogoose = require("mongoose")
const Schema = mogoose.Schema
let ObjectId = Schema.Types.ObjectId
const bcrypt = require('bcrypt');
const saltRounds = 10;
const userSchema = new Schema({
    userId:{type:ObjectId},
    userName:{unique:true,type:String},
    password:{type:String},
    createdAt:{type:Date,default:Date.now()},
    lastLoginAt:{type:Date,default:Date.now()}
})
userSchema.pre('save',function(next){
    let that = this
    bcrypt.genSalt(saltRounds,function(err, salt) {
        if(err) return next(err)
        bcrypt.hash(that.password,salt, function(err,hash){
            if(err) return next(err)
            that.password = hash
            next()
        }) 
    });
})
userSchema.methods = {
    //密码比对的方法
    comparePassword:(_password,password)=>{
        return new Promise((resolve,reject)=>{
            bcrypt.compare(_password,password,(err,isMatch)=>{
                if(!err) resolve(isMatch)
                else reject(err)
            })
        })
    }
}
//发布模型
mogoose.model('User',userSchema)
