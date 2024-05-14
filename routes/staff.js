const express=require('express')
const bodyparaser=require('body-parser')
const staffmodel=require('../modelsfloder/staff-model')

const router=express.Router()
router.use(bodyparaser.json())
router.get('/',(req,res)=>{
res.send("staff page")
})
router.post('/post',(req,res)=>{
    console.log(req.body)
    const newstaff=new staffmodel(req.body)
    newstaff.save()
    .then(response=>console.log(response))
    .catch(err=>console.log(err))
    res.send("staff posting page")
    })
    router.get('/get',(req,res)=>{

        staffmodel.find()
        .then(response=>res.send(response))
        .catch(err=>console.log(err))
        res.send("mongodb datas")
    })
    router.get('/get/:id',(res,req)=>{
        staffmodel.findById(req.params.id)
        .then(response=>res.send(response))
        .catch(err=>console.log(err))
 
    })
    router.put('/update/:id',(res,req)=>{
        console.log(req.params.id,req.body)
        staffmodel.findByIdAndUpdate(req.params.id,req.body)
        .then(response=>console.log(response))
        .catch(err=>console.log(err))
        res.send("staffs update page")
    })
    router.delete('./delete/:id',(req,res)=>{
        console.log(req.params.id)
        staffmodel.findByIdAndDelete(req.params.id)
        .then(response=>console.log(response))
        .catch(err=>console.log(err))
        res.send("delet page")
    })
    module.exports=router