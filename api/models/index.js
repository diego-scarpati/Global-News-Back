const Users = require("./Users");
const WorkLicenses = require("./WorkLicenses");
const Positions = require("./Positions");
const Teams = require("./Teams");
const Offices = require("./Offices");

Users.belongsTo(Offices, { as: "office", foreignKey: "officeId" });
Offices.hasMany(Users, { as: "users" });

Users.belongsToMany(Teams, { through: "users_teams" });
Teams.belongsToMany(Users, { through: "users_teams" });

WorkLicenses.belongsTo(Users, { as: "user", foreignKey: "userId" });
Users.hasMany(WorkLicenses, { as: "workLicenses" });

Users.belongsTo(Positions, { as: "position", foreignKey: "positionId" });
Positions.hasMany(Users, { as: "users" });

module.exports = { Users, WorkLicenses, Positions, Teams, Offices };
