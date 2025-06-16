//IMPORTS
require(`dotenv`).config();
const express = require("express");
const { notFound, handlerError } = require("./middlewares/errors.js");

//CONFIGURES
app = express();
const { APP_URL, APP_PORT } = process.env;
const host = `${APP_URL}:${APP_PORT}`;

// MIDDLEWARES
app.use(express.static("pubblic"));
app.use(express.json()); // per body parcel per trasformare le risposte dei form in json

// ROUTES
app.get("/", (req, res) => {
  console.log(abc);
  res.json("benvenuto sul backend");
});

//ERRORS
app.use(handlerError);
app.use(notFound);

//LISTEN
app.listen(APP_PORT, () => {
  console.log(`serve in ascolto su ${host}`);
});
