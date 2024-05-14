const mongoose=require('mongoose')
const staffSchema=new mongoose.Schema({
    name:String,
    age:Number,
    role:String,
    salary:Number,
    location:String
})
const staffmodel=mongoose.model("staffs",staffSchema)
module.exports=staffmodel