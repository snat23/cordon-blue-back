const db = require("../db/db");
const { ObjectId } = require("mongodb");

exports.getAllWeaponTypes = async () => {
  return db
    .get()
    .collection("weaponType")
    .find({}, { projection: {_id: 0, weaponName: 1 } })
    .toArray();
};

exports.getWeaponTypeById = async (id) => {
  return db
    .get()
    .collection("weaponType")
    .findOne(
      {
        weaponId: {
          $eq: parseInt(id),
        },
      },
      { projection: { _id: 0, weaponName: 1 } }
    );
};

exports.getWeaponTypeByName = async (typeName) => {
  return db
    .get()
    .collection("weaponType")
    .findOne(
      {
        weaponName: {
          $eq: typeName,
        },
      },
      { projection: { _id: 0, weaponId: 1 } }
    );
};
