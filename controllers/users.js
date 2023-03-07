const express = require('express');
const router = express.Router();
const usersService = require('../services/usersService')

router.get('', async (req, res) => {
	const events = await usersService.getUsers();

	res.send(events);
});

module.exports = router;