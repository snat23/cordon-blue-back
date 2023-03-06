const eventsRepository = require("../repositories/eventsRepository");

exports.getEvents = () => {
  return eventsRepository.getAllEvents();
};

exports.addEvent = async (event) => {

    await eventsRepository.postEvent(event);

}

