const express = require('express');
const router = express.Router();
const weaponTypeService = require('../services/weaponTypeService')

router.get('', async (req, res) => {
	const weapons = await weaponTypeService.getWeaponType();

	res.send(weapons);
});

module.exports = router;