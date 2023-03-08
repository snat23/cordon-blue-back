const weaponTypeRepository = require("../repositories/weaponTypeRepository");

exports.getWeaponType = () => {
  return weaponTypeRepository.getAllWeaponTypes();
};

exports.getWeaponByName = (name) => {
  return weaponTypeRepository.getWeaponTypeByName(name)
};

