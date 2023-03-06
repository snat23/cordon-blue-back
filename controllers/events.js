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

router.get('/search', async (req, res) => {
	const filteresEvents = await eventsService.getFilterEvents(req.params.body);

	res.send(filteresEvents);
});


module.exports = router;