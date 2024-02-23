const PRODUCTS_MOCK = require('../mock_products')

// returns list of all categories
const getCategories = (req, res) => {
  let categories = PRODUCTS_MOCK.map((product) => product.category)
  categories = [...new Set(categories)]

  return res.json({data: categories})
}

// export all functions
module.exports = {getCategories}
