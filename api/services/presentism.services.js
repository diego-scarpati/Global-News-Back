const Presentism = require("../models/Presentism")

module.exports = {
    getAll: async () => {
        try {
            const allAssistances = await Presentism.findAll()
            return allAssistances
        } catch (error) {
            throw new Error("Error getting presentism")
        }
    },
    addAssistance: async (data) => {
        try {
            const assistanceCreated = await Presentism.create(data)
            return assistanceCreated
        } catch (error) {
            console.log(error)
        }
    },
    deleteAssistance: async (assistanceId) => {
        try {
            const assistanceDeleted = await Presentism.destroy({
                where: { id: assistanceId }
            })
            return assistanceDeleted
        } catch (error) {
            console.log(error)
        }
    },
    updatePresentism: async (assistanceId, data) => {
        try {
            const presentismUpdated = await Presentism.update(data, {
                where: { id: assistanceId },
                returning: true,
                plain: true
            })
            return presentismUpdated[1]
        } catch (error) {
            console.log(error)
        }
    },
}