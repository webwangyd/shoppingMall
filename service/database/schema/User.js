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
//发布模型
mogoose.model('User',userSchema)
