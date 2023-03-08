const { MongoClient } = require('mongodb');

const dbName = 'cordonblue';
const mongodbUrl =
'mongodb://mongo:mongo123@192.168.0.114:30340';

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
