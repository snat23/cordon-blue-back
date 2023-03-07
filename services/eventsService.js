const eventsRepository = require("../repositories/eventsRepository");

exports.getEvents = () => {
  return eventsRepository.getAllEvents();
};

exports.addEvent = async (event) => {

    await eventsRepository.postEvent(event);

}

exports.getFilterEvents = async (filterConditions) => {

  await eventsRepository.getFilteredEvents(filterConditions);

}

