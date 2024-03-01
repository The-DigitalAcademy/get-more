const Product = require("../model/products");

exports.addProduct = async (req, res) => {
  const { image, name, price, description, category, quantity } = req.body;

  if (!image || !name || !price || !description || !category || !quantity) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const existingProduct = await Product.findOne({ name });

    if (existingProduct) {
      return res.status(400).json({ message: "product already exist" });
    }

    const newProduct = new Product({
      image,
      name,
      price,
      description,
      category,
      quantity,
    });
    await newProduct.save();

    res.status(201).json({
      message: `product succesfully created`,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Please try again later" });
  }
};



exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();

    res.status(200).json(products);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Couldn't retrieve all product", error });
  }
};



// get single
exports.getSingle = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.json({ message: "Product does not exits" });
  }

  try {
    const oneprod = await Product.findById(id);
    res.json(oneprod);
  } catch (error) {
    res.json({ message: "Something went wrong, try again later" });
  }
};
