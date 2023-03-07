const eventTypeRepository = require('../repositories/eventTypesRepository');
const logger = require('../logger.js')

exports.getEventType = () => {
  return eventTypeRepository.getAllEventTypes();
};

exports.getTypeOfEventById = (id) => {
  logger.info("Searching for eventType id " + id);
  const eventType = eventTypeRepository.getEventTypeById(id);
  logger.info("Found eventType name " + eventType.name  + " for id " + id);
  return eventType;
};
