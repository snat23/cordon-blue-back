const express = require('express');
const router = express.Router();
const weaponTypeService = require('../services/weaponTypeService')

router.get('', async (req, res) => {
	const weapons = await weaponTypeService.getWeaponType();

	res.send(weapons);
});

router.get("/id/:id", async (req, res) => {
  const sector = await weaponTypeService.getWeaponById(req.params.id);

  res.send(sector);
});

router.get("/name/:name", async (req, res) => {
	const weapon = await weaponTypeService.getWeaponByName(req.params.name);
  
	res.send(weapon);
  });

module.exports = router;