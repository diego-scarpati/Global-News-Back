const sequelize = require("sequelize");
const db = require("../db");

class Presentism extends sequelize.Model {}

Presentism.init(
  {
    workDayStart: {
      type: sequelize.DATE,
      allowNull: false,
    },
    workDayEnd: {
      type: sequelize.DATE,
    },
  },
  { sequelize: db, modelName: "presentism" }
);

module.exports = Presentism;

// Agregar los virtuals para desgranar lo que es dia de entrada y salida