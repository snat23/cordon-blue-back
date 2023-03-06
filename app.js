const express = require("express");
const cors = require("cors");
const path = require("path");
const fileUpload = require("express-fileupload");
const db = require('./db/db');

var weaponTypesRouter = require('./controllers/weaponType');

const app = express();

app.use(
  cors({
    exposedHeaders: ["access_token", "Access-Token"],
  })
);

app.use(express.json());
app.use(fileUpload());

app.use('/weaponTypes', weaponTypesRouter);

const port = 3000;

db.connect(() => {
  app.listen(port, () => { 
    console.log(`app is listening on port ${port}`); 
  });
})

module.exports = app;
