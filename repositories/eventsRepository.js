const db = require("../db/db");
const { ObjectId } = require("mongodb");

exports.getAllEvents = async () => {
  return db.get().collection("events").find({}).sort({ _id: -1 }).toArray();
};

exports.postEvent = async (event) => {
  await db.get().collection("events").insertOne({
    _id: event._id,
    alertName: event.alertName,
    time: event.time,
    weapon: event.weapon,
    eventType: event.eventType,
    coordinates: event.coordinates,
    sector: event.sector,
    Injuries: event.Injuries,
    isOpen: event.isOpen,
    description: event.description,
    terrorists: event.terrorists
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
