const mogoose = require("mongoose")
const Schema = mogoose.Schema
let ObjectId = Schema.Types.ObjectId
const bcrypt = require('bcrypt');
const saltRounds = 10;
const userSchema = new Schema({
    userId:{type:ObjectId},
    userName:{unique:true,type:String},
    password:String,
    createdAt:{type:Date,default:Date.now()},
    lastLoginAt:{type:Date,default:Date.now()}
})
userSchema.pre('save',(next)=>{
    bcrypt.genSalt(saltRounds, (err, salt)=> {
        if(err) return next(err)
        bcrypt.hash(this.password,salt, (err,hash)=>{
            if(err) return next(err)
            this.password = hash
            next()
        }) 
    });
})
//发布模型
mogoose.model('User',userSchema)
