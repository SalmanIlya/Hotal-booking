const express=require("express")
const User=require("../Module/User")

const app=express.Router()

app.post("/create",async(req,res)=>{
try{
const createUser=await User.create(req.body)
res.send(createUser)
}catch(err){
    res.send("error")
}
})







module.exports=app