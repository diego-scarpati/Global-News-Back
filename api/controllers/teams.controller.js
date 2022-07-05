const teamServices = require("../services/teams.services");

module.exports = {
    getAll: async (req, res, next) => {
        try {
            const allTeams = await teamServices.getAll()
            if (!allTeams) return res.status(404).json({ message: "Team not found" })
            return res.json(allTeams)
        } catch (error) {
            next(error)
        }
    },

    getTeam: async (req, res, next) => {
        const teamId = req.params.teamId
        try {
            const team = await teamServices.getTeam(teamId)
            if (!team) return res.status(404).json({ message: "Team not found" })
            return res.send(team)
        } catch (error) {
            next(error)
        }
    },

    addTeam: async (req, res, next) => {
        try {
            const teamCreated = await teamServices.addTeam(req.body)
            res.status(201).json(teamCreated)
        } catch (error) {
            next(error)
        }
    },

    deleteTeam: async (req, res, next) => {
        const teamId = req.params.teamId
        try {
            await teamServices.deleteTeam(teamId)
            res.status(204).json("DELETED")
        } catch (error) {
            next(error)
        }
    },

    updateTeam: async (req, res, next) => {
        const teamId = req.params.teamId
        const data = req.body
        try {
            const updatedTeam = await teamServices.updateTeam(teamId, data)
            res.status(202).json(updatedTeam)
        } catch (error) {
            next(error)
        }

    },

    userAddTeam: async (req, res, next) => {
        const data = req.body
        try {
            console.log(data)
            const teamCreated = await teamServices.userAddTeam(data)
            res.status(201).json(teamCreated)
        } catch (error) {
            next(error)
        }
    },

}