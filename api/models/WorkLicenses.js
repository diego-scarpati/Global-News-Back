const sequelize = require("sequelize");
const db = require("../db");

class Worklicenses extends sequelize.Model {}

Worklicenses.init(
  {
    type: {
      type: sequelize.STRING,
      allowNull: false,
    },
    startDate: {
      type: sequelize.STRING,
      allowNull: false,
    },
    endDate: {
      type: sequelize.STRING,
      allowNull: false,
    },
    bossApproval: {
      type: sequelize.STRING,
      defaultValue: "pending",
      validate: {
        isIn: {
          args: [["pending", "approved", "rejected"]],
          msg: "Must be a valid type",
        },
      },
    },
    HRApproval: {
      type: sequelize.STRING,
      defaultValue: "pending",
      validate: {
        isIn: {
          args: [["pending", "approved", "rejected"]],
          msg: "Must be a valid type",
        },
      },
    },
    attachment: {
      type: sequelize.TEXT,
    },
    observations: {
      type: sequelize.TEXT,
    },
  },
  { sequelize: db, modelName: "worklicense" }
);

module.exports = Worklicenses;
