const express = require('express');
const router = express.Router();
const eventTypeService = require('../services/eventTypesService');

router.get('', async (req, res) => {
  const eventTypes = await eventTypeService.getEventType();

  res.send(eventTypes);
});

router.get('/id/:id', async (req, res) => {
  const eventType = await eventTypeService.getTypeOfEventById(req.params.id)

  res.send(eventType);
});

router.get("/name/:name", async (req, res) => {
  const eventType = await eventTypeService.getTypeOfEventByName(req.params.name);

  res.send(eventType);
});

module.exports = router;
