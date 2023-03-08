const express = require("express");
const router = express.Router();
const eventsService = require("../services/eventsService");

router.get("", async (req, res) => {
  const events = await eventsService.getEvents();

  res.send(events);
});

router.patch("/:id", async (req, res) => {
  const event = await eventsService.findEventById(req.params.id);
  if (!event) return res.status(404).send("Event not found...");
  try {
    await eventsService.updateEventById(req.params.id);
    res.status(200).send(`Event ${req.params.id} closed`);
  } catch (error) {
    res.status(500).send(error.message + "ERROR");
  }
});

router.get('/search/:condition', async (req, res) => {
	const filteresEvents = await eventsService.getFilterEvents(JSON.parse(req.params.condition));
	res.send(filteresEvents);
});

router.post("/add", async (req, res) => {
  await eventsService.addEvent(req.body);

  res.status(201).json({
    id: req.body.id,
  });
});

module.exports = router;

