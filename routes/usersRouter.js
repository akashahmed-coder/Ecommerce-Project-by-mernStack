const router = require("express").Router()
const userCtrl = require('../controllers/userCtrl')
const auth = require('../middlewares/auth')
<<<<<<< HEAD
router.post("/register", userCtrl.register)
router.post("/login", userCtrl.login)
router.get("/logout",userCtrl.logout)
router.get("/refresh_token", userCtrl.refresh_token)
router.get("/info", auth ,userCtrl.getUser)
=======

router.post("/register", userCtrl.register)
router.post("/login",userCtrl.login)
router.get("/logout",userCtrl.logout)
router.get("/refresh_token", userCtrl.refresh_token)
router.get("/info", auth, userCtrl.getUser)
>>>>>>> 1eb56b314e189c431efe0907e8f34acec83ebd97

module.exports = router