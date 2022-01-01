const User = require('../models/userModel')
const bycrpt = require('bcrypt')
const jwt = require('jsonwebtoken')
const userCtrl = {
    register: async(req,res)=>{
        try{
            const {name,email,password} = req.body
            if( !name || !email || !password){
                return res.status(422).json({error:"please filled the input field properly"})
            }
            const userExist = await User.findOne({email:email})
            if(userExist){
               return res.status(400).json({error:"Email has already present"})
            }
           if(password.length < 6 ){
            return res.status(400).json({error:"password need atleast 6 charactor"})
           }
           const passHass = await bycrpt.hash(password,10)
           const newUser = new User({name,email,password:passHass})
           await newUser.save();
          
               const accessToken = createAccessToken({id: newUser._id})
               const refreshToken = createRefreshToken({id: newUser._id})
               res.cookie('refreshToken',refreshToken,{
                   httpOnly:true,
                   path:"/user/refresh_token"

               })
               res.status(201).json({accessToken})
        
           
          
        }catch(err){
            res.status(500).json(err.message)
        }
    
    },
    login: async(req,res)=>{
        try{
            const {email,password} = req.body
            const user = await User.findOne({email})
            if(!user) return res.status(400).json({msg:"user doesnot exist"})
             const isMatch = await  bycrpt.compare(password,user.password)
             if(!isMatch) return res.status(400).json({msg:"password doesnot match"})

             const accessToken = createAccessToken({id: user._id})
             const refreshToken = createRefreshToken({id: user._id})
             res.cookie('refreshToken',refreshToken,{
                 httpOnly:true,
                 path:"/user/refresh_token"

             })
             res.status(201).json({accessToken})

        }catch(err){
            res.status(500).json({msg:err.message})
        }
    },
    logout:async(req,res) =>{
        try{
            res.clearCookie("refreshToken",{  path:"/user/refresh_token"})
            res.status(200).json({msg:"logged out"})
        }catch(err){
            res.status(500).json(err.message)
        }
    },
    getUser:async(req,res)=>{
       try{
     const userMatch = await User.findById({_id:req.user.id}).select("-password")
     res.status(200).json({userMatch})
       }catch(err) {
        res.status(500).json({msg:err.message})
       }
    },
    refresh_token: (req,res)=>{
       try{
        const rf_token = req.cookies.refreshToken
        if(!rf_token) return res.status(400).json({msg:"please log in or register"})
        jwt.verify(rf_token,process.env.REFRESS_TOKEN,(err,user)=>{
            if(err) return res.status(400).json({msg:"please log in or register"})
            const accessToken = createAccessToken({id: user.id})
            res.status(200).json({accessToken})
        })
       }catch(err){
           res.status(500).json(err.message)
       }
    }
}

const createAccessToken = (user) =>{
 const token =  jwt.sign(user,process.env.ACCESS_TOKEN,{expiresIn:'1d'})
 return(token)
}

const createRefreshToken = (user) =>{
    const token =  jwt.sign(user,process.env.REFRESS_TOKEN,{expiresIn:'7d'})
    return(token)
   }

module.exports = userCtrl
 