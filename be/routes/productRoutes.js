const express = require('express');
const productController = require('../controllers/productController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/products', productController.getAllProducts);
router.get('/products/:idOrSlug', productController.getProductByIdOrSlug);

router.post('/products', protect, productController.createProduct);

module.exports = router;
