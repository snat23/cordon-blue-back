const express = require('express');
const router = express.Router();
const eventsService = require('../services/eventsService')

router.get('', async (req, res) => {
	const events = await eventsService.getEvents();

	res.send(events);
});

router.post('/add', async (req, res) => {
	await eventsService.addEvent(req.body);

	res.send();
});

module.exports = router;