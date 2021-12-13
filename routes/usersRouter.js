const router = require("express").Router()

router.post("/register",(req,res)=>{
    res.json({message:"test router"})
})

module.exports = router