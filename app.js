const express = require("express");
const cors = require("cors");
const path = require("path");
const fileUpload = require("express-fileupload");
const db = require('./db/db');

var weaponTypesRouter = require('./controllers/weaponType');
var eventsTypesRouter = require('./controllers/eventsTypes');
var eventsRouter = require('./controllers/events');
var regionalBrigadeRouter = require('./controllers/regionalBrigade');

const app = express();

app.use(
  cors({
    exposedHeaders: ["access_token", "Access-Token"],
  })
);

app.use(express.json());
app.use(fileUpload());

app.use('/weaponTypes', weaponTypesRouter);
app.use('/eventTypes', eventsTypesRouter);
app.use('/events', eventsRouter);
app.use('/regionalBrigade', regionalBrigadeRouter);

const port = 3000;

db.connect(() => {
  app.listen(port, () => { 
    console.log(`app is listening on port ${port}`); 
  });
})

module.exports = app;
