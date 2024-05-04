const express = require('express');
const router = express.Router();
const { register,logIn,logout,profile } = require('../controllers/auth');

router.post('/signin', register);
router.post('/login', logIn);
router.get('/profile',profile);
router.post('/logout',logout);

module.exports = router;