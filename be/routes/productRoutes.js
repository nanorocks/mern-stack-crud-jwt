const express = require('express');
const productController = require('../controllers/productController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/products', productController.getAllProducts);

router.use(protect);
router.post('/products', productController.createProduct);

module.exports = router;
