const express=require('express')
const staffs=require('./routes/staff')
const mongoose=require('mongoose')
const app=express()
mongoose.connect('mongodb://127.0.0.1:27017/staffs')
mongoose.connection.on('connected',()=>{
    console.log("mongodb is connected successfully")
})
app.get('/',(req,res)=>{
    res.send("home page")
})
app.use('/staffs',staffs)
app.listen(3001,()=>{
    console.log('server is running on port 3001')
})