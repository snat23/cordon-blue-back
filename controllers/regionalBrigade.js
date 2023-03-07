const express = require('express');
const router = express.Router();
const regionalBrigadeService = require('../services/regionalBrigadeService');

router.get('', async (req, res) => {
  const regionalBrigade = await regionalBrigadeService.getRegionalBrigade();

  res.send(regionalBrigade);
});

module.exports = router;
