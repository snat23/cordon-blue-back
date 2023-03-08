const regionalBrigadeRepository = require('../repositories/regionalBrigadeRepository');

exports.getRegionalBrigade = () => {
  return regionalBrigadeRepository.getAllRegionalBrigades();
};

exports.getSectorOfEventById = (id) => {
  return regionalBrigadeRepository.getSectorById(id);
};

exports.getSectorByName = (name) => {
    return regionalBrigadeRepository.getSectorsTypeByName(name);
  };
  