const express = require('express');
const router = express.Router();
const regionalBrigadeService = require('../services/regionalBrigadeService');

router.get('', async (req, res) => {
  const regionalBrigade = await regionalBrigadeService.getRegionalBrigade();

  res.send(regionalBrigade);
});

router.get("/name/:name", async (req, res) => {
	const sector = await regionalBrigadeService.getSectorByName(req.params.name);
  
	res.send(sector);
});
module.exports = router;
