const Teams = require("../models/Teams");
const Users = require("../models/Users");

module.exports = {
  getAll: async () => {
    try {
      const allTeams = await Teams.findAll({ include: { model: Users } });
      return allTeams;
    } catch (error) {
      throw new Error("Error getting teams");
    }
  },

  getAllbyUser: async (userId) => {
    try {
      const teamsByUser = await Teams.findAll({
        include: [{ model: Users, where: { id: userId }, required: true }],
      });
      return teamsByUser;
    } catch (error) {
      throw new Error("Error getting teams");
    }
  },

  getTeam: async (id) => {
    try {
      const team = await Teams.findByPk(id, { include: { model: Users } });
      return team;
    } catch (error) {
      console.log(error);
    }
  },

  addTeam: async (name) => {
    try {
      const teamCreated = await Teams.create(name);
      return teamCreated;
    } catch (error) {
      console.log(error);
    }
  },

  deleteTeam: async (teamId) => {
    try {
      const teamDeleted = await Teams.destroy({
        where: { id: teamId },
      });
      return teamDeleted;
    } catch (error) {
      console.log(error);
    }
  },

  updateTeam: async (teamId, data) => {
    try {
      const updatedTeam = await Teams.update(data, {
        where: { id: teamId },
        returning: true,
        plain: true,
      });
      return updatedTeam[1];
    } catch (error) {
      console.log(error);
    }
  },

  userAddTeam: async (data) => {
    const { id, name } = data;
    try {
      const user = await Users.findByPk(id);
      const teams = await Teams.findOne({
        where: { name },
        include: { model: Users },
      });
      return user.addTeams(teams);
    } catch (error) {
      console.log(error);
    }
  },
};
