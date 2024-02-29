const express = require('express')
const router = express.Router()
const {addProduct, getAllProducts } = require('../Controllers/products')


// add product
router.post('/create', addProduct)

// //read
// router.get('/product/',read);
router.get("/all", getAllProducts);

// //update
// router.put('/product/',update);

// //.delete
// router.delete('/product/',remove);




module.exports = router