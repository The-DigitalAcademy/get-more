const express = require('express')
const router = express.Router()
const {addProduct, getAllProducts, getSingle } = require('../Controllers/products')


// add product
router.post('/create', addProduct)

// //read
// router.get('/product/',read);

//get all product
router.get("/all", getAllProducts);

//get one prouduct
router.get('/single/:id', getSingle);

// //update
// router.put('/product/',update);

// //.delete
// router.delete('/product/',remove);




module.exports = router