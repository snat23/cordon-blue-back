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

router.get('/search/:condition', async (req, res) => {
	console.log(JSON.parse(req.params.condition) + " condition ");
	console.log(typeof JSON.parse(req.params.condition));
	const filteresEvents = await eventsService.getFilterEvents(JSON.parse(req.params.condition));

	res.send(filteresEvents);
});


module.exports = router;