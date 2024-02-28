
const Product = require('../model/products')

exports.addProduct = async (req, res) => {
  const { image, name, price, description,category, quantity  } = req.body


  if (!image || !name || !price || !description|| !category|| !quantity) {
    return res.status(400).json({ message: 'All fields are required' })
  }

  try {

    const existingProduct = await Product.findOne({ name })

    if (existingProduct) {
      return res.status(400).json({ message: 'product already exist' })
    }

    const newProduct = new Product({ image, name,price, description, category, quantity })
    await newProduct.save()

    res.status(201).json({
      message: `product succesfully created`,
    })


  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Please try again later' })
  }
}
