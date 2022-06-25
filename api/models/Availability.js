const sequelize = require("sequelize");
const db = require("../db");

class Availability extends sequelize.Model {}

Availability.init(
  {
    available: {
      type: sequelize.BOOLEAN,
      defaultValue: false,
    },
  },
  { sequelize: db, modelName: "availability" }
);

module.exports = Availability;