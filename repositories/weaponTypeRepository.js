const db = require("../db/db");
const { ObjectId } = require('mongodb');

exports.getAllWeaponTypes = async () => {
  return db
    .get()
    .collection("weaponType")
    .find({}, {_id : false, weaponName: true})
    .toArray();
};
