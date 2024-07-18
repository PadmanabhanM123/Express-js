const express=require('express')
const router= express.Router()


router.get('/',(req,res)=>{
    res.send("Get product")
})

router.get('/pdetails/:rate',(req,res)=>{
    res.send("Product rate" + req.params.rate)
})

router.get('/pdetails',(req,res)=>{
    res.send("get product details")
})

module.exports=router