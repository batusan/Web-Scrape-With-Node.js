//  Product Route module.

const express = require('express');
const router = express.Router();
const productController = require('../controllers/product.controller')

//api route
router.get('/', function (req, res) {
  res.send('Product API');
})


router.get('/products/', productController.getProducts);
router.get('/products/:product_id', productController.getProductById);
router.post('/products', productController.addProduct);
//router.put('/products/:product_id', productController.update);
//router.delete('/products/:product_id', productController.remove);

module.exports = router;