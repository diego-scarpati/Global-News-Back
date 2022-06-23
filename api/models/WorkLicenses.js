const sequelize = require("sequelize");
const db = require("../db");

class WorkLicenses extends sequelize.Model {}

WorkLicenses.init(
  {
    type: {
      type: sequelize.STRING,
      allowNull: false,
    },
    startDate: {
      type: sequelize.DATE,
      allowNull: false,
    },
    endDate: {
      type: sequelize.DATE,
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
  { sequelize: db, modelName: "workLicense" }
);

module.exports = WorkLicenses;
