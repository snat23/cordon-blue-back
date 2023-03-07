const db = require("../db/db");
const { ObjectId } = require("mongodb");

exports.getAllEvents = async () => {
  return db.get().collection("events").find({}).toArray();
};

exports.postEvent = async (event) => {
  await db.get().collection("events").insertOne({
    _id: event._id,
    id: event.id,
    eventType: event.eventType,
    time: event.time,
    weapon: event.weapon,
    sector: event.sector,
    alertName: event.alertName,
    Injuries: event.Injuries,
    coordinates: event.coordinates,
  });
};

exports.findById = async (id) => {
  return await db
    .get()
    .collection("events")
    .findOne({
      _id: ObjectId(id),
    });
};

exports.updateById = async (id) => {
  return db
    .get()
    .collection("events")
    .findOneAndUpdate({ _id: ObjectId(id) }, { $set: { isOpen: false } });
};
