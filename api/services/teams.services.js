const Teams = require("../models/Teams")

module.exports = {
    getAll: async () => {
        try {
            const allTeams = await Teams.findAll()
            return allTeams
        } catch (error) {
            throw new Error("Error getting teams")
        }
    },

    getTeam: async (teamId) => {
        try {
            const team = await Teams.findOne({
                where: { id: teamId }
            })
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

    deleteUser: async (teamId) => {
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
    }
}