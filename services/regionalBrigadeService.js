const regionalBrigadeRepository = require("../repositories/regionalBrigadeRepository");

exports.getRegionalBrigade = () => {
  return regionalBrigadeRepository.getAllRegionalBrigades();
};
