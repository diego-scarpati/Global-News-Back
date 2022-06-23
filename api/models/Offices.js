const sequelize = require("sequelize");
const db = require("../db");

class Offices extends sequelize.Model {}

Offices.init(
  {
    name: {
      type: sequelize.STRING,
      allowNull: false,
    },
    city: {
      type: sequelize.STRING,
      allowNull: false,
    },
    country: {
      type: sequelize.STRING,
      allowNull: false,
    },
  },
  { sequelize: db, modelName: "office" }
);

module.exports = Offices;
