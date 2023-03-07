const db = require('../db/db');
const { ObjectId } = require('mongodb');

exports.getAllRegionalBrigades = async () => {
  return db
    .get()
    .collection('sector')
    .find({}, { projection: { _id: 0, name: 1 } })
    .toArray();
};

exports.getSectorsTypeByName = async (sectorName) => {
    return db
      .get()
      .collection("sector")
      .findOne(
        {
          name: {
            $eq: sectorName,
          },
        },
        { projection: { _id: 0, id: 1 } }
      );
  };
