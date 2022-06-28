const licenseServices = require("../services/workLicenses.services")

module.exports = {
    getAll: async (req, res, next) => {
        try {
            const allLicences = await licenseServices.getAll()
            if (!allLicences) return res.status(404).json({ message: "Licence not found" })
            return res.status(200).json(allLicences)
        } catch (error) {
            next(error)
        }
    },

    addLicense: async (req, res, next) => {
        try {
            const licenceCreated = await licenseServices.addLicense(req.body)
            return res.status(201).json(licenceCreated)
        } catch (error) {
            next(error)
        }
    },

    deleteLicence: async (req, res, next) => {
        const licenceId = req.params.licenseId
        try {
            await licenseServices.deleteLicence(licenceId)
            return res.status(204).json("DELETED")
        } catch (error) {
            next(error)
        }
    },

    updateLicense: async (req, res, next) => {
        const licenseId = req.params.licenseId
        const data = req.body
        try {
            const updatedLicense = await licenseServices.updateLicense(licenseId, data)
            return res.status(202).json(updatedLicense)
        } catch (error) {
            next(error)
        }
    },

    getLicence: async (req, res, next) => {
        const licenseId = req.params.licenseId
        try {
            const license = await licenseServices.getLicence(licenseId)
            return res.status(200).json(license)
        } catch (error) {
            next(error)
        }
    },

    getByType: async (req, res, next) => {
        console.log("REQ.PARAMSSSSSSSSSSSSSS",req.params);
        try {

        } catch (error) {
            next(error)
        }
    }
}