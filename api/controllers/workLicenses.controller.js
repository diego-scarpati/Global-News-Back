const licenseServices = require("../services/workLicenses.services")

module.exports = {
    getAll: async (req, res, next) => {
        try {
            const allLicences = await licenseServices.getAll()
            if(!allLicences) return res.status(404).json({message: "Licence not found"})
            return res.json(allLicences)
        } catch (error) {
            next(error)
        }
    },

    addLicense: async (req, res, next) => {
        try {
            const licenceCreated = await licenseServices.addLicense(req.body)
            res.status(201).json(licenceCreated)
        } catch (error) {
            next(error)
        }
    },

    deleteLicence: async (req, res, next) => {
        const licenceId = req.params.licenseId
        try {
            await licenseServices.deleteLicence(licenceId)
            res.json("DELETED")
        } catch (error) {
            next(error)
        }
    },

    updateLicense: async (req, res, next) => {
        const licenseId = req.params.licenseId
        const data = req.body
        try {
            const updatedLicense = await licenseServices.updateLicense(licenseId, data)
            res.status(202).json(updatedLicense)
        } catch (error) {
            next(error)
        }
    }
}