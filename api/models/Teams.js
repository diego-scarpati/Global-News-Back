const sequelize = require("sequelize");
const db = require("../db");

class Teams extends sequelize.Model {}

Teams.init(
  {
    name: {
      type: sequelize.STRING,
      allowNull: false,
    },
  },
  { sequelize: db, modelName: "team" }
);

module.exports = Teams;
