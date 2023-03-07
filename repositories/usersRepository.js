const db = require('../db/db');
const { ObjectId } = require('mongodb');

exports.getAllUsers = async () => {
  return db
    .get()
    .collection('users')
    .find({}, { projection: { _id: 0} })
    .toArray();
};

