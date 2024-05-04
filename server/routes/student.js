const express = require('express');
const {
    addStudent,
    verifyStudent,
    resetAllowed } = require('../controllers/student');

const router = express.Router();
const auth = require('../middleware/authentication');


router.post('/register',auth(), addStudent);
router.post('/verify',auth(), verifyStudent);
router.patch('/reset',auth(), resetAllowed);

module.exports = router;