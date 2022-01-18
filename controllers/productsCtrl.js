
const Products = require('../models/productsModel')

class APIfeatures {
   constructor(query,queryString){
      this.query =  query
      this.queryString = queryString
   }
   filtering(){
 const queryObj = {...this.queryString}
 const excludedFields = ['page','sort','limit']
 excludedFields.forEach(el=> delete(queryObj[el]))
 console.log(queryObj)
 let querySt = JSON.stringify(queryObj)
 console.log(querySt)
 querySt = querySt.replace(/\b(gte|gt|lt|lte|regex)\b/g , match => '$'+ match)
 console.log(querySt)
 this.query.find(JSON.parse(querySt))
 console.log(JSON.parse(querySt))
 return this;

   }
   sorting(){}
   paginating(){}
}
const productsCtrl = {
    getProduct:async(req,res)=>{
     try {
        const feature = new APIfeatures(Products.find(),req.query).filtering()
        const getProduct = await feature.query
      
        res.json({getProduct})
     } catch (err) {
         res.status(400).json(err.msg)
     }
    },
    createProduct:async(req,res)=>{
     try {
        const {product_id,title,price,description,content,images,category} = req.body
        if(!images)return res.status(400).json({msg:"please upload a photo"})
 
        const product = await Products.findOne({product_id})
        if(product)return res.status(400).json({msg:"this product is already present"})
        const newProduct = new Products({
         product_id,title:title.toLowerCase(),price,description,content,images,category
        })
        await newProduct.save()
        res.json({msg:"product is create"})
     } catch (err) {
        res.status(500).json(err.message)
         
     }

    },
    updateProduct:async(req,res)=>{
        
    },
    deleteProduct:async(req,res)=>{
       try {
        await Products.findByIdAndDelete(req.params.id)
        res.json({msg:"delete this product success"})
       } catch (err) {
           res.status(500).json(err.message)
       }
    }
    
    

}

module.exports = productsCtrl