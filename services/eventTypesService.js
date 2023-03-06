const eventTypeRepository = require("../repositories/eventTypesRepository");

exports.getEventType = () => {
  return eventTypeRepository.getAllEventTypes();
};
