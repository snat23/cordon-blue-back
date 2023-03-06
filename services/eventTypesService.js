const eventTypeRepository = require('../repositories/eventTypesRepository');

exports.getEventType = () => {
  return eventTypeRepository.getAllEventTypes();
};

exports.getTypeOfEventById = (id) => {
  return eventTypeRepository.getEventTypeById(id);
};
