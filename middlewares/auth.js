<<<<<<< HEAD
const jwt = require('jsonwebtoken')

const auth = (req,res,next) =>{
    const token = req.header("Authorization")
    if(!token)return res.status(400).json({msj:"Invalid Authentication"})

    jwt.verify(token,process.env.ACCESS_TOKEN,(err,user)=>{
        if(err)return res.status(400).json({msj:"Invalid Authentication"})
=======
const jwt = require("jsonwebtoken")
const auth = (req,res,next) =>{
    const token = req.header("Authorization")
    if(!token) return res.status(400).json({msg:"user Authentication invalid"})
       jwt.verify(token,process.env.ACCESS_TOKEN,(err,user)=>{
        if(err) return res.status(400).json({msg:"user Authentication invalid"})
>>>>>>> 1eb56b314e189c431efe0907e8f34acec83ebd97
        req.user = user
        next();
    })
}

module.exports = auth