const express = require('express');
const { createOrder, getOrders } = require('../controllers/orderController');
const auth = require('../middleware/auth');

const router = express.Router();

// Create a new order
router.post('/', auth, createOrder);

// Get all orders for a user
router.get('/', auth, getOrders);

module.exports = router;
