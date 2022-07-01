const sequelize = require("sequelize");
const db = require("../db");

class Positions extends sequelize.Model {}

Positions.init(
  {
    hierarchy: {
      type: sequelize.STRING,
      defaultValue: "employee",
      validate: {
        isIn: {
          args: [["manager", "chief", "coordinator", "employee"]],
          msg: "Must be a valid type",
        },
      },
    },
  },
  { sequelize: db, modelName: "position" }
);

module.exports = Positions;
