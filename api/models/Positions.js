const sequelize = require("sequelize");
const db = require("../db");

class Positions extends sequelize.Model {}

Positions.init(
  {
    hierarchy: {
      type: sequelize.STRING,
      defaultValue: "Empleado",
      unique: true,
      validate: {
        isIn: {
          args: [["Gerente", "Jefe", "Coordinador", "Empleado"]],
          msg: "Must be a valid type",
        },
      },
    },
  },
  { sequelize: db, modelName: "position" }
);

module.exports = Positions;
