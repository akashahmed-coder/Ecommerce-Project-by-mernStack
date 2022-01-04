const router = require('express').Router()
const productsCtrl = require('../controllers/productsCtrl')
const auth = require('../middlewares/auth')
const authAdmin = require('../middlewares/authAdmin')
router.route("/product")
.get(productsCtrl.getProduct)
.post(productsCtrl.createProduct)

router.route("/product:id")
.put(productsCtrl.updateProduct)
.delete(productsCtrl.deleteProduct)


module.exports = router