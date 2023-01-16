const eventController = require('../controllers/eventController');
const express = require('express');
const router = express.Router()

router.get('/api', eventController.getEvents);
router.post('/api', eventController.postEvents);
router.put('/api', eventController.updateScore);
router.delete('/api', eventController.deleteEvent);

module.exports = router