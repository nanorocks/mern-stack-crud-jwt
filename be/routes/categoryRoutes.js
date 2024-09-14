const express = require('express');
const categoryController = require('../controllers/categoryController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/categories', categoryController.getAllCategories);
router.get('/categories/:idOrSlug', categoryController.getCategoryByIdOrSlug);

router.post('/categories', protect, categoryController.createCategory);

module.exports = router;
