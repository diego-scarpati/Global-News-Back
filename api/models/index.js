const Users = require("./Users");
const Worklicenses = require("./WorkLicenses");
const Positions = require("./Positions");
const Teams = require("./Teams");
const Offices = require("./Offices");

Users.belongsToMany(Teams, { through: "users_teams" });
Teams.belongsToMany(Users, { through: "users_teams" });

Users.belongsTo(Offices);
Offices.hasMany(Users);

Worklicenses.belongsTo(Users);
Users.hasMany(Worklicenses);

Users.belongsTo(Positions);
Positions.hasMany(Users);

module.exports = { Users, Worklicenses, Positions, Teams, Offices };
