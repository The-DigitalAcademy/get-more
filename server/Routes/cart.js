const express = require("express") 
const router = express.Router() 


const { addToCart,  getCart} = require("../Controllers/cart")


//Create product route
router.post("/create", addToCart);


//get products added to the carts
router.get("/get/:id", getCart);


module.exports = router;