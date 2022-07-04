const Users = require("./Users");
const Worklicenses = require("./WorkLicenses");
const Positions = require("./Positions");
const Teams = require("./Teams");
const Offices = require("./Offices");
const Availability = require("./Availability")
const Presentism = require("./Presentism")

Users.belongsToMany(Teams, { through: "users_teams" });
Teams.belongsToMany(Users, { through: "users_teams" });

Users.belongsToMany(Presentism, { through: "users_presentism" });
Presentism.belongsToMany(Users, { through: "users_presentism" });

Users.belongsTo(Offices);
Offices.hasMany(Users);

Worklicenses.belongsTo(Users);
Users.hasMany(Worklicenses);

Users.belongsTo(Positions);
Positions.hasMany(Users);

Users.belongsTo(Availability);
Availability.hasMany(Users);


module.exports = { Users, Worklicenses, Positions, Teams, Offices, Availability, Presentism };

