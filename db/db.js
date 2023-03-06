const { MongoClient } = require('mongodb'); 

const dbName = 'medori'
const mongodbUrl = 'mongodb+srv://Sampan96:Rc5ZhVmSRYUZFs94@cluster0.gjr1yzm.mongodb.net/medori?retryWrites=true&w=majority';  

let mongodb;

// Connect method to connect to the server 
const connect = callback => {
    console.log("trying connect to: " + dbName);
    MongoClient.connect(mongodbUrl, { useUnifiedTopology: true },  
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