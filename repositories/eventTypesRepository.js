const db = require("../db/db");
const { ObjectId } = require('mongodb');

exports.getAllEventTypes = async () => {
  return db
    .get()
    .collection("eventType")
    .find({}, {_id : false, name: true})
    .toArray();
};