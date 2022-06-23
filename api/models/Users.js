const sequelize = require("sequelize");
const db = require("../db");

class Users extends sequelize.Model {}

Users.init(
  {
    employeeId: {
      type: sequelize.STRING,
      allowNull: false,
    },
    name: {
      type: sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    lastName: {
      type: sequelize.STRING,
      allowNull: false,
    },
    nationalId: {
      type: sequelize.BIGINT,
      allowNull: false,
      unique: true,
    },
    address: {
      type: sequelize.STRING,
    },
    phoneNumber: {
      type: sequelize.STRING,
    },
    birhtday: {
      type: sequelize.DATE,
    },
    startDate: {
      type: sequelize.DATE,
      allowNull: false,
    },
    endDate: {
      type: sequelize.DATE,
    },
    countryOfResidence: {
      type: sequelize.STRING,
    },
    shift: {
      type: sequelize.STRING,
    },
    workingDays: {
      type: sequelize.STRING,
    },
    workingHours: {
      type: sequelize.STRING,
    },
    available: {
      type: sequelize.BOOLEAN,
      defaultValue: true,
    },
    observations: {
      type: sequelize.TEXT,
    },
  },
  { sequelize: db, modelName: "user" }
);

module.exports = Users;
