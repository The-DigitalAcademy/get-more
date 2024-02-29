const Mongoose = require("mongoose");

const ProductsSchema = new Mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number, 
    required: true,
}
});




const Products = Mongoose.model("Products", ProductsSchema);
module.exports = Products;