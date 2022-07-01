const presentismServices = require("../services/presentism.services")

module.exports = {
    getAll: async (req, res, next) => {
        try {
            const allAssistances = await presentismServices.getAll()
            if (!allAssistances) return res.status(404).json({ message: "Assistance not found" })
            return res.json(allAssistances)
        } catch (error) {
            next(error)
        }
    },
    getByUser: async (req, res, next) => {
        const userId = req.params.employeeId
        try {
            const assistance = await presentismServices.getByUser(userId)
            return res.status(200).json(assistance)
        } catch (error) {
            next(error)
        }
    },

    addAssistance: async (req, res, next) => {
        const data = req.body
        try {
            const assistanceCreated = await presentismServices.addAssistance(data)
            res.status(201).json(assistanceCreated)
        } catch (error) {
            next(error)
        }
    },
    deleteAssistance: async (req, res, next) => {
        const assistanceId = req.params.assistanceId
        try {
            await presentismServices.deleteAssistance(assistanceId)
            res.status(204).json("DELETED")
        } catch (error) {
            next(error)
        }
    },
    updatePresentism: async (req, res, next) => {
        const assistanceId = req.params.assistanceId
        const data = req.body
        try {
            const presentismUpdated = await presentismServices.updatePresentism(assistanceId, data)
            res.status(202).json(presentismUpdated)
        } catch (error) {
            next(error)
        }
    },
}