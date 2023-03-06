const { MongoClient } = require('mongodb'); 

const dbName = 'medori'
const mongodbUrl = `mongodb://127.0.0.1:27017`;  

let mongodb;

// Connect method to connect to the server 
const connect = callback => {
    console.log("trying connect to: " + dbName);
    MongoClient.connect(mongodbUrl, { useUnifiedTopology: true }, 
    (err, client) => {
        mongodb = client.db(dbName); 
        console.log("connected to: " + dbName);
    callback(); 
    });
};

// Get method  
const get = () => mongodb;

// Close method 
const close = () => mongodb.close(); 

module.exports = { 
    connect, 
    get, 
    close 
};