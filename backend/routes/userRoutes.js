const express = require('express');
const { getUser } = require('../controllers/userController');
const auth = require('../middleware/auth');

const router = express.Router();

// Get user data
router.get('/', auth, getUser);

module.exports = router;
