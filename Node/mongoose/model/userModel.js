import mongoose from "mongoose";


const userSchema = new mongoose.Schema({

    name:{type:String,required:true,trim:true},
    email:{type:String,required:true,unique:true},
    age:{type:Number,max:60},
    status:{type:Boolean,default:true},
    role:{enum:["Admin","Sdutent"]},

    createBy:{type:String,default:"Admin"},
    updatedby:{type:String}




},{timestamps:true})


const Users = mongoose.model("UserTable",userSchema)

export default Users;