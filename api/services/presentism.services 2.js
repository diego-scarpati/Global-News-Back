const Presentism = require("../models/Presentism")
const Users = require("../models/Users")

module.exports = {
    getAll: async () => {
        try {
            const allAssistances = await Presentism.findAll()
            return allAssistances
        } catch (error) {
            console.log(error)
        }
    },
    addAssistance: async (data) => {
        const { userId, workDayStart } = data
        try {
            const user = await Users.findByPk(userId)
            const newAssistance = await Presentism.create({ workDayStart })
            return newAssistance.addUser(user)
        } catch (error) {
            console.log(error)
        }
    },
    getByUser: async (userId) => {
        try {
            const assistance = await Presentism.findAll({
                where: { userId }
            })
            return assistance
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