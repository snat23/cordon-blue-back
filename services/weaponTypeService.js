const weaponTypeRepository = require("../repositories/weaponTypeRepository");

exports.getWeaponType = () => {
  return weaponTypeRepository.getAllWeaponTypes();
};
