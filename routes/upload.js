const router = require('express').Router()
const cloudinary = require('cloudinary')


cloudinary.config({
    cloud_name:process.env.CLOUD_NAME,
    api_key:process.env.API_KEY,
    api_secret:process.env.API_SECRET
})

 router.post("/upload",(req,res)=>{
   console.log(Object.keys(req.files).length)
 })

 module.exports = router