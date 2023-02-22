const  mongoose=require("mongoose")

module.exports=  function db (){
    mongoose.connect(process.env.database).then(()=>{
        console.log("database is connected");
    }).catch(()=>{
        console.log("data base connection errror");
    })
}