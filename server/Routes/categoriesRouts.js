const express = require('express')
const router = express.Router()
const {getCategories} = require('../controllers/categoriesCtrl')

router.get('/', getCategories)

module.exports = router
