const express = require('express');
const router = express.Router();
const {addEvent, getEvent} = require('../controllers/event');
const auth = require('../middleware/authentication');

router.post('/addEvent',auth(),addEvent);
router.get('/getEvent',auth(),getEvent)

module.exports = router;
