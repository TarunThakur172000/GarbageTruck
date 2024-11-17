const express = require('express');
const router = express.Router();
const { login } = require('../controllers/authController');

// POST /api/auth/login - Login a candidate
router.post('/login', login);

module.exports = router;
