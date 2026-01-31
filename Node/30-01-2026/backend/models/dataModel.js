import mongoose from "mongoose";


const datascheme = new mongoose.Schema({

    data_id:{type:Number,unique:true},
    dataName:{type:String},
    dataEmail:{type:String,unique:true},
    dataAge:{type:Number,min:18},
    created_by:String,
    updated_by:{type:String}
  
},{timestamps:true})


const dataModel = mongoose.model("datausers",datascheme)


export default dataModel;