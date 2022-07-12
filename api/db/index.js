if (process.env.NODE_ENV !== "production"){
  require("dotenv").config()
}

const sequelize = require("sequelize");
const db = new sequelize(process.env.DATABASE, null, null, {
  dialect: "postgres",
  host: process.env.HOST,
  logging: false,
});

module.exports = db;
