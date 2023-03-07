const eventsRepository = require("../repositories/eventsRepository");

exports.getEvents = () => {
  return eventsRepository.getAllEvents();
};

exports.addEvent = async (event) => {
  await eventsRepository.postEvent(event);
};

exports.findEventById = (id) => {
  return eventsRepository.findById(id);
};

exports.updateEventById = (id) => {
  return eventsRepository.updateById(id);
};
