const officesServices = require("../services/offices.services")

module.exports = {
    getAll: async (req, res, next) => {
        try {
            const allOffices = await officesServices.getAll()
            if (!allOffices) return res.status(404).json({ message: "Office not found" })
            return res.json(allOffices)
        } catch (error) {
            next(error)
        }
    },

    addOffice: async (req, res, next) => {
        const data = req.body
        try {
            const officeCreated = await officesServices.addOffice(data)
            res.status(201).json(officeCreated)
        } catch (error) {
            next(error)
        }
    },

    deleteOffice: async (req, res, next) => {
        const officeId = req.params.officeId
        try {
            await officesServices.deleteOffice(officeId)
            res.json("DELETED")
        } catch (error) {
            next(error)
        }
    },

    updateOffice: async (req, res, next) => {
        const officeId = req.params.officeId
        const data = req.body
        try {
            const updatedOffice = await officesServices.updateOffice(officeId, data)
            res.status(202).json(updatedOffice)
        } catch (error) {
            next(error)
        }
    }
}