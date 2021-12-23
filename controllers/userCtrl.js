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
                res.status(400).json({error:"Email has already present"})
            }
           if(password.length < 6 ){
            res.status(400).json({error:"password need atleast 6 charactor"})
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
               res.status(201).json({message:"registration successfull"})
        
           
          
        }catch(err){
          console.log(err)
        }
    
    },
    refresh_token: (req,res)=>{
        const rf_token = req.cookies.refreshToken
        res.json({rf_token})
        
    }
}

const createAccessToken = (user) =>{
 const token =  jwt.sign(user,process.env.ACCESS_TOKEN,{expiresIn:'1d'})
 return(token)
}

const createRefreshToken = (user) =>{
    const token =  jwt.sign(user,process.env.REFRESS_TOKEN,{expiresIn:'1d'})
    return(token)
   }

module.exports = userCtrl
 