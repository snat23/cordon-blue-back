const eventsRepository = require("../repositories/eventsRepository");
const logger = require('../logger.js')

exports.getEvents = () => {
  return eventsRepository.getAllEvents();
};

exports.addEvent = async (event) => {
  await eventsRepository.postEvent(event);
};

exports.findEventById = (id) => {
  logger.info("Searching for event id " + id);
  const event = eventsRepository.findById(id);
  logger.info("Found event name " + event.alertName  + " for id " + id);
  return event;
};

exports.updateEventById = (id) => {
  return eventsRepository.updateById(id);
};
