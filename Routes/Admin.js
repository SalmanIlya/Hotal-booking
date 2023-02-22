const express=require("express")
const auth=require("./auth")
const user=require("./User")
const Hotal=require("./hotal")
const app=express.Router()

app.use("/auth",auth)
app.use("/user",user)
app.use("/hotal",Hotal)









module.exports=app