const eventsRepository = require("../repositories/eventsRepository");
const logger = require("../logger.js");

exports.getEvents = () => {
  return eventsRepository.getAllEvents();
};

exports.addEvent = async (event) => {
  logger.info("Adding event with name:" + event.alertName);
  await eventsRepository.postEvent(event);
};

exports.findEventById = (id) => {
  logger.info("Searching for event id " + id);
  const event = eventsRepository.findById(id);
  logger.info("Found event name " + event.alertName + " for id " + id);
  return event;
};

exports.updateEventById = (id) => {
  logger.info("Updating for event id " + id);
  const eventToUpdate = eventsRepository.updateById(id);
  logger.info("Found event name " + eventToUpdate.alertName + " for id " + id);
  return eventToUpdate;
};
