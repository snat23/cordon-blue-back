const db = require("../db/db");
const { ObjectId } = require("mongodb");

exports.getAllWeaponTypes = async () => {
  return db
    .get()
    .collection("weaponType")
    .find({}, { projection: {_id: 0, weaponName: 1 } })
    .toArray();
};
