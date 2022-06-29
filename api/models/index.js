const Users = require("./Users");
const WorkLicenses = require("./WorkLicenses");
const Positions = require("./Positions");
const Teams = require("./Teams");
const Offices = require("./Offices");
const Availability = require("./Availability")
const Presentism = require("./Presentism")

Users.belongsTo(Offices, { as: "office", foreignKey: "officeId" });
Offices.hasMany(Users, { as: "users" });

Users.belongsToMany(Teams, { through: "users_teams" });
Teams.belongsToMany(Users, { through: "users_teams" });

WorkLicenses.belongsTo(Users, { as: "user", foreignKey: "userId" });
Users.hasMany(WorkLicenses, { as: "workLicenses" });

Users.belongsTo(Positions, { as: "position", foreignKey: "positionId" });
Positions.hasMany(Users, { as: "users" });

Users.belongsTo(Availability, { as: "available", foreignKey: "availableId" });
Availability.hasMany(Users, { as: "users" });

Users.belongsToMany(Presentism, { through: "users_presentism" });
Presentism.belongsToMany(Users, { through: "users_presentism" });

module.exports = { Users, WorkLicenses, Positions, Teams, Offices, Availability, Presentism };
