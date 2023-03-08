const { MongoClient } = require('mongodb');

const dbName = "bluecordon";
const mongodbUrl = "mongodb://admin:tavas@10.252.30.6:27017/?authSource=admin";

let mongodb;

// Connect method to connect to the server
const connect = (callback) => {
  console.log("trying connect to: " + dbName);
  MongoClient.connect(
    mongodbUrl,
    { useUnifiedTopology: true },
    (err, client) => {
      mongodb = client.db(dbName);
      console.log("connected to: " + dbName);
      callback();
    }
  );
};

// Get method
const get = () => mongodb;

// Close method
const close = () => mongodb.close();

module.exports = {
  connect,
  get,
  close,
};
