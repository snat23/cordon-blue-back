const db = require('../db/db');
const { ObjectId } = require('mongodb');

exports.getAllEventTypes = async () => {
  return db
    .get()
    .collection('eventType')
    .find({}, { projection: { _id: 0, eventId: 1, name: 1 } })
    .toArray();
};

exports.getEventTypeById = async (id) => {
  return db
    .get()
    .collection('eventType')
    .findOne(
      {
        eventId: {
          $eq: parseInt(id),
        },
      },
      { projection: { _id: 0, name: 1 } }
    );
};

exports.getEventTypeByName = async (typeName) => {
  return db
    .get()
    .collection("eventType")
    .findOne(
      {
        name: {
          $eq: typeName,
        },
      },
      { projection: { _id: 0, eventId: 1 } }
    );
};
