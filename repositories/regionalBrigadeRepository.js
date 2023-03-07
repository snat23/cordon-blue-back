const db = require('../db/db');
const { ObjectId } = require('mongodb');

exports.getAllRegionalBrigades = async () => {
  return db
    .get()
    .collection('regionalBrigade')
    .find({}, { projection: { _id: 0, name: 1 } })
    .toArray();
};
