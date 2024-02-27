const express = require('express')
const router = express.Router()
const {addProduct} = require('../Controllers/products')

// add product
router.post('/create', addProduct)

module.exports = router