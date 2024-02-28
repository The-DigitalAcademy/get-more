const express = require('express')
const router = express.Router()
const {addProduct} = require('../Controllers/products')

// add product
router.post('/create', addProduct)

// //read
// router.get('/product/',read);

// //update
// router.put('/product/',update);

// //.delete
// router.delete('/product/',remove);



module.exports = router