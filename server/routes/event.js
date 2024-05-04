const express = require('express');
const router = express.Router();
const {addEvent} = require('../controllers/event');
const auth = require('../middleware/authentication');

router.post('/addEvent',auth(),addEvent);

module.exports = router;
