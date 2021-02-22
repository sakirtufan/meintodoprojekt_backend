const express = require('express');
const { register } = require('../controllers/auth');

const router = express.Router();

// /auth

router.post('/register', register)




module.exports = router;