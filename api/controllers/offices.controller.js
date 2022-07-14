const officesServices = require("../services/offices.services")

module.exports = {
    getAll: async (req, res, next) => {
        const { country } = req.query
        try {
            const allOffices = await officesServices.getAll(country)
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
            res.status(204).json("DELETED")
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
    },

    getByCountry: async (req, res, next) => {
        const country = req.params.country
        try {
            const offices = await officesServices.getByCountry(country)
            res.status(200).send(offices)
        } catch (error) {
            next(error)
        }
    },

    getByCity: async (req, res, next) => {
        const city = req.params.city
        try {
            const offices = await officesServices.getByCity(city)
            res.status(200).send(offices)
        } catch (error) {
            next(error)
        }
    },

    search: async (req, res, next) => {
        const search = req.params.search
        try {
            const countries = await officesServices.search(search)
        } catch (error) {
            next(error)
        }
    },

    userAddOffice: async (req, res, next) => {
        const data = req.body
        try {
            const officeCreated = await officesServices.userAddOffice(data)
            res.status(201).json(officeCreated)
        } catch (error) {
            next(error)
        }
    },
}