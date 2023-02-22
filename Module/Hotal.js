const mongoose = require("mongoose")

const hotalSchems = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    title:{
        type:String,
        require:true
    },
    type: {
        type: String,
         required: true
    },
    city:{
        type: String,
         required: true
    },
    address:{
        type: String,
         required: true
    },
    distance:{
        type: String,
         required: true
    },
    photos:{
        type: Array
    },
    desc:{
        type: String,
         required: true
    },
    rating:{
        type: Number,
        min:0,
        max:5
    },
    rooms:{
        type: Array,
         required: true
    },
    Chapest:{
        type: String,
         required: true
    },
    featured:{
        type:Boolean,
        default:false
    }
})
module.exports = mongoose.model("Hotal", hotalSchems)