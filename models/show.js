"use strict";

const Sequelize = require("sequelize");

const sequelize = require("../config/config.js");

const Show = sequelize.define('show', {
  info: {
    type: Sequelize.JSON
  }
}, {
  timestamps: false
});

module.exports = Show;
