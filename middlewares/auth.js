const jwt = require("jsonwebtoken")
const auth = (req,res,next) =>{
    const token = req.header("Authorization")
    if(!token) return res.status(400).json({msg:"user Authentication invalid"})
       jwt.verify(token,process.env.ACCESS_TOKEN,(err,user)=>{
        if(err) return res.status(400).json({msg:"user Authentication invalid"})
        req.user = user
        next();
    })
}

module.exports = auth