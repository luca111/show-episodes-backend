"use strict";

const express = require("express");

const sequelize = require("./config/config.js");

const Show = require("./models/show.js");

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

const app = express();

app.get("/shows-api", (req, res) => {
    let offsetEntries = req.query.offset;
    let entriesToGet = req.query.entries;
    Show.findAll({order: sequelize.json("info.airstamp"), offset: offsetEntries, limit: entriesToGet })
        .then((dbEntries) => {res.json(dbEntries);});
});

const port = 3000;

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

module.exports = app;
