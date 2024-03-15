const Cart = require("../model/cart")
const User = require("../model/user")


exports.addToCart = async (req, res) => {
    let { user, productId, quantity, price } = req.body

    if (!(user,  productId,  quantity || price)) {
        return res.status(401).json({
            message: "All fields are required"
        });
    }

    total = await (parseInt(quantity) * parseInt(price))

    try {
        await Cart.create({
            user,
            productId,
            quantity,
            price,
            total
        }).then(Cart =>
            res.status(200).json({
                message: "Product added to card ",
                Cart
            }

            ))
    } catch (err) {
        res.status(401).json({
            message: "Cart successfully not created"
        })

    }


}


exports.getCart = async (req, res) => {

    const id = await User.findById(req.params.id)

    try{
        if(!id){
            return res.status(401).json({
                message: "You have not added anything to the cart"
            }) 
        }else{
            const cart = await Cart.find({user: id});

            return res.status(200).json(cart) 
        }
    } catch (err) {
        res.status(401).json({
            message: "Cart successfully not created"
        })

    }

}