const express=require("express")
// const auth=require("")
const user=require("./User")
const auth=require("./auth")
const Hotal=require("./hotal")
const app=express.Router()

// app.use("/auth",auth)
app.use("/user",user)
app.use("/user",auth)
app.use("/hotal",Hotal)









module.exports=app