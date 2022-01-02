const User = require('../models/userModel')
const bycrpt = require('bcrypt')
const jwt = require('jsonwebtoken')
const userCtrl = {
    register: async(req,res)=>{
        try{
           const {name,email,password} = req.body
          const user = await User.findOne({email})
          if(user){
            return  res.status(400).json({err:"this email has already present"})
          }
     if(password.length < 6){
          return  res.status(400).json({err:"password needed atlest 6 charactor"})
            
          }
          const passwordHash = await bycrpt.hash(password,10)
          const newUser = new User({name,email,password:passwordHash})
          await newUser.save()
          res.send("registration success")
          
        }catch(err){
         res.json(err.message)
        }
    
    },
    login: async(req,res)=>{
     try{
        const {email,password} = req.body
        const user = await User.findOne({email})
   
        if(!user){
          return  res.status(400).json({erorr:"user dosenot exist"})
        }
      
        const isMatch = await bycrpt.compare(password,user.password)
   
        if(!isMatch){
            return  res.status(400).json({erorr:"password doesnot match"})
        }
           
        const accessToken = createAccessToken({id: user.id})
        const refreshToken = createRefreshToken({id: user.id})
        res.cookie('refreshToken',refreshToken,{
            httpOnly:true,
            path:"/user/refresh_token"
   
        })
        res.json({accessToken})
     
     }catch(err){
        res.status(500).send(err.message)
     }

    },
    logout: async(req,res) =>{
      try{
    res.clearCookie('refreshToken',{path:"/user/refresh_token"})
    res.status(201).json({msg:"logged out"})
      }catch(err){
        res.status(500).send(err.message)
      }
    },
    refresh_token: (req,res)=>{
       try{
        const rf_token = req.cookies.refreshToken
        if(!rf_token){
            return  res.status(400).json({err:"please Login or Register"})
        }
       jwt.verify(rf_token,process.env.REFRESS_TOKEN,(err,user)=>{
             if(err){
              return  res.status(400).json({err:"please Login or Register"})
             }
            const accessToken = createAccessToken({id: user.id})
            res.json({accessToken})
         })
       }catch(err){
           res.status(500).send(err.message)
       }

        
    },
    getUser: async (req,res) =>{
     try {
       const user = await User.findById(req.user.id).select("-password")
       if(!user) return res.status(400).json({msj:"User Does Not Exist"})
       res.json(user)
     } catch (error) {
       res.status(500).json({error})
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
 