const db = require("../db/db");
const { ObjectId } = require('mongodb');

exports.getAllEvents = async () => {
  return db
    .get()
    .collection("events")
    .find({}, { projection: {_id: 0 } })
    .toArray();
};

exports.postEvent = async (event) => {

    await db
    .get()
    .collection('files')
    .insertOne({
        id: event.id,
        eventType: event.eventType,
        time: event.time,
        weapon: event.weapon,
        sector: event.sector,
        alertName: event.alertName,
        Injuries: event.Injuries,
        coordinates: event.coordinates
    });
};

exports.getFilteredEvents = async (filterConditions) => {
    return db
      .get()
      .collection("events")
      .find({
           $and: [
           { $cond: [ { $ne: ["$filterConditions.time", null ]},  {$eq: ["$time",filterConditions.time]}]},
           { $cond: [ { $ne: ["$filterConditions.coordinates", null ]},  {$eq: ["$coordinates",filterConditions.coordinates]}]},
           { $cond: [ { $ne: ["$filterConditions.eventType", null ]},  {$eq: ["$eventType",filterConditions.eventType]}]},
           { $cond: [ { $ne: ["$filterConditions.weapon", null ]},  {$eq: ["$weapon",filterConditions.weapon]}]},
           { $cond: [ { $ne: ["$filterConditions.sector", null ]},  {$eq: ["$sector",filterConditions.sector]}]},        ]
      }, {projection: {_id: 0 }})
      .toArray();
  };

