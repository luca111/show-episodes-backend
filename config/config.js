"use strict";

const Sequelize = require("sequelize");

const sequelize = new Sequelize('postgres://user:password@localhost:5432/dbnameyouwantu');

module.exports = sequelize;
