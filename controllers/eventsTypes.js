const express = require('express');
const router = express.Router();
const eventTypeService = require('../services/eventTypesService');

router.get('', async (req, res) => {
  const eventTypes = await eventTypeService.getEventType();

  res.send(eventTypes);
});

module.exports = router;
