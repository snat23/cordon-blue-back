const regionalBrigadeRepository = require('../repositories/regionalBrigadeRepository');

exports.getRegionalBrigade = () => {
  return regionalBrigadeRepository.getAllRegionalBrigades();
};

exports.getSectorByName = (name) => {
    return regionalBrigadeRepository.getSectorsTypeByName(name);
  };
  