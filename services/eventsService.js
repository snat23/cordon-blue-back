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

exports.getFilterEvents = async (filterConditions) => {
  await eventsRepository.getFilteredEvents(filterConditions);

}

exports.updateEventById = (id) => {
  return eventsRepository.updateById(id);
};