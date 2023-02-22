const express= require("express")
const cors=require("cors")
const  bodyParser=require("body-parser")
const dotenv=require("dotenv")
const db =require( "./database/db")
dotenv.config({path:"config/config.env"})
db()
const port=process.env.port

const app=express()
app.use(cors())
app.use(bodyParser.json())
app.use(express.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.urlencoded({extended:false}))

app.listen(port,()=>{
    console.log(`server is working on http://localhost:${port}`);
})