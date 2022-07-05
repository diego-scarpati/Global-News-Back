const Teams = require("../models/Teams")
const Users = require("../models/Users")

module.exports = {
    getAll: async () => {
        try {
            const allTeams = await Teams.findAll({include: {model: Users}})
            return allTeams
        } catch (error) {
            throw new Error("Error getting teams")
        }
    },

    getTeam: async (teamId) => {
        try {
            const team = await Teams.findOne(teamId)
            return team
        } catch (error) {
            console.log(error)
        }
    },

    addTeam: async (data) => {
        try {
            const teamCreated = await Teams.create(data)
            return teamCreated
        } catch (error) {
            console.log(error)
        }
    },

    deleteTeam: async (teamId) => {
        try {
            const teamDeleted = await Teams.destroy({
                where: { id: teamId }
            })
            return teamDeleted
        } catch (error) {
            console.log(error)
        }
    },

    updateTeam: async (teamId, data) => {
        try {
            const updatedTeam = await Teams.update(data, {
                where: { id: teamId},
                returning: true,
                plain: true,
            })
            return updatedTeam[1]
        } catch (error) {
            console.log(error)
        }
    },

    userAddTeam: async (data) => {
        const {id, name} = data
        try {
            const user = await Users.findByPk(id)
            const teams = await Teams.findOne({where: {name}})
            return user.setTeams(teams)
        } catch (error) {
            console.log(error)
        }
    },
}