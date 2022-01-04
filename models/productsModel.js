const mongoose = require('mongoose')

const productsSchema = new mongoose.Schema({
    product_id:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    title:{
        type:String,
        required:true,
        trim:true
    },
    price:{
        type:Number,
        required:true,
        trim:true
    },
    description:{
        type:String,
        required:true,
        trim:true
    },
    content:{
        type:String,
        required:true,
        trim:true
    },
    images:{
        type:Object,
        required:true,
    },
    category:{
        type:String,
        required:true,
        unique:true
        
    },
    cheked:{
        type:Boolean,
        default:false
       
    },
    sold:{
        type:Number,
        default:0
    }
})

const Products = mongoose.model("Products",productsSchema)
module.exports = Products