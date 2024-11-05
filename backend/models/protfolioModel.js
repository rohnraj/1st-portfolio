const mongoose=require('mongoose')

const visitorData=new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:true
    },
    email:{
        type:String,
        trim:true,
        required:true
    },
    message:{
        type:String
    }
})

let UserData=mongoose.model('UserData', visitorData)
module.exports=UserData