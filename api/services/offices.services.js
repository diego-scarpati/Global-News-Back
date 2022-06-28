const Offices = require("../models/Offices")

module.exports = {
    getAll: async () => {
        try {
            const allOffices = await Offices.findAll()
            return allOffices
        } catch (error) {
            console.log(error)
        }
    },

    addOffice: async (data) => {
        try {
            const officeCreated = await Offices.create(data)
            return officeCreated
        } catch (error) {
            console.log(error)
        }
    },

    deleteOffice: async (officeId) => {
        try {
            const officeDeleted = await Offices.destroy({
                where: { id: officeId }
            })
            return officeDeleted
        } catch (error) {
            console.log(error)
        }
    },

    updateOffice: async (officeId, data) => {
        try {
            const updatedOffice = await Offices.update(data, {
                where: { id: officeId },
                returning: true,
                plain: true
            })
            return updatedOffice[1]
        } catch (error) {
            console.log(error)
        }
    }
}