const Mongoose = require('mongoose');

const cartSchema = new Mongoose.Schema({
    user: {
        type: Mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    productId: {
        type: Mongoose.Schema.Types.ObjectId,
        ref:'Product'
    },
    quantity: {
        type: String,
        require: true
    },
    price: {
        type: String,
        require: true
    },
    total: {
        type: String,
        require: true
    },

})




const cart = Mongoose.model("cart", cartSchema);
module.exports = cart;
