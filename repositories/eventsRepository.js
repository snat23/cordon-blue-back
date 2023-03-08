const db = require("../db/db");
const { ObjectId } = require("mongodb");

exports.getAllEvents = async () => {
  return db.get().collection("events").find({}).toArray();
};

exports.postEvent = async (event) => {
  await db.get().collection("events").insertOne({
    _id: event._id,
    id: event.id,
    alertName: event.alertName,
    time: event.time,
    weapon: event.weapon,
    eventType: event.eventType,
    coordinates: event.coordinates,
    sector: event.sector,
    Injuries: event.Injuries,
    isOpen: event.isOpen
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

exports.getFilteredEvents = async (filterConditions) => {
    console.log(typeof filterConditions + " TYPE");
    console.log(filterConditions.eventType + " HELLO");
    return db
      .get()
      .collection("events")
      .find({
           $and: [
           { $cond: [ { $ne: ["$filterConditions.time", null ]},  {$eq: ["$time",filterConditions.time]}]},
           { $cond: [ { $ne: ["$filterConditions.coordinates", null ]},  {$eq: ["$coordinates",filterConditions.coordinates]}]},
           { $cond: [ { $ne: ["$filterConditions.eventType", null ]},  {$eq: ["$eventType",filterConditions.eventType]}]},
           { $cond: [ { $ne: ["$filterConditions.weapon", null ]},  {$eq: ["$weapon",filterConditions.weapon]}]},
      ]}, {projection: {_id: 0 }})
      .toArray();
  };

exports.updateById = async (id) => {
  return db
    .get()
    .collection("events")
    .findOneAndUpdate({ _id: ObjectId(id) }, { $set: { isOpen: false } });
};

