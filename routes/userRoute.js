const express = require('express');

const router = express.Router();
const user = require('../controller/userController');
router.post('/register', user.register);

module.exports = router;
