const sequelize = require("sequelize");
const db = require("../db");

class Attendance extends sequelize.Model {}

Attendance.init(
  {
    workDayStart: {
      type: sequelize.STRING,
      allowNull: false,
    },
    workDayEnd: {
      type: sequelize.STRING,
    },
  },
  { sequelize: db, modelName: "attendance" }
);

module.exports = Attendance;

// Agregar los virtuals para desgranar lo que es dia de entrada y salida