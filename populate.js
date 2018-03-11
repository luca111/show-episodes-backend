"use strict";

const http = require("http");

const Sequelize = require("sequelize");

const sequelize = new Sequelize('postgres://user:password@localhost:5432/dbnameyouwantu');

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

sequelize.queryInterface.createTable('shows', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    info: {
        type: Sequelize.JSON
    }
});

const Show = sequelize.define('show', {
    info: {
      type: Sequelize.JSON
    }
}, {
    timestamps: false
});

const url = "http://api.tvmaze.com/singlesearch/shows?q=Futurama&embed=episodes";

http.get(url, (res) => {
    let body = "";
    res.on("data", (chunk) => {
        body += chunk;
    });
    res.on("end", () => {
        let apiResponse = JSON.parse(body);
        console.log("Data fetched from the external api.");

        let recordsToInsert = [];
        for (let i = 0; i < apiResponse._embedded.episodes.length; i++) {
            recordsToInsert.push({
                info: apiResponse._embedded.episodes[i]
            });
        }

        Show.bulkCreate(
            // insert array of objects
            recordsToInsert, {validate: false}
        )
        .catch(errors => {console.log(errors)});

    });
}).on("error", (e) => {
    console.log("Error: " + e);
});
