const weaponTypeRepository = require("../repositories/weaponTypeRepository");

exports.getWeaponType = () => {
  return weaponTypeRepository.getAllWeaponTypes();
};

exports.getWeaponById = (id) => {
  return weaponTypeRepository.getWeaponTypeById(id);
};

exports.getWeaponByName = (name) => {
  return weaponTypeRepository.getWeaponTypeByName(name)
};

