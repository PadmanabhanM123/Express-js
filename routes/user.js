const express=require('express')
const router= express.Router()

let name='Dhanu'
let password=12345

router.get('/',(req,res)=>{
    res.send("Get user request")
})


router.get('/login',(req,res)=>{
    res.send("this is login page")
})

router.use(Middleware)

router.get('/profilepage',(req,res)=>{
    res.send("this is profile page")
})

router.get('/feedpage',(req,res)=>{
    res.send("this is feed page")
})


function Middleware(req,res,next){
    if(name=='Dhanu' && password==1234567){
        next()
    }else{
        res.send("unvalid user")
    }
      
}

module.exports=router
