const express = require('express');
const categoryController = require('../controllers/categoryController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();


router.get('/categories', categoryController.getAllCategories);

router.use(protect);
router.post('/categories', categoryController.createCategory);

module.exports = router;
