const Licenses = require("../models/WorkLicenses")

module.exports = {
    getAll: async () => {
        try {
            const allLicenses = await Licenses.findAll()
            return allLicenses
        } catch (error) {
            console.log(error)
        }
    },
    addLicense: async (data) => {
        try {
            const licenseCreated = await Licenses.create(data)
            return licenseCreated
        } catch (error) {
            console.log(error)
        }
    },
    deleteLicence: async (licenceId) => {
        try {
            const licenseDeleted = await Licenses.destroy({
                where: { id: licenceId }
            })
            return licenseDeleted
        } catch (error) {
            console.log(error)
        }
    },
    updateLicense: async (licenseId, data) => {
        try {
            const updatedLicense = await Licenses.update(data, {
                where: { id: licenseId },
                returning: true,
                plain: true,
            })
            return updatedLicense[1]
        } catch (error) {
            console.log(error)
        }
    },

    getLicence: async (licenseId) => {
        try {
            const license = await Licenses.findByPk(licenseId)
            return license
        } catch (error) {
            console.log(error);
        }
    },

    getByType: async () => {
        try {

        } catch (error) {
            console.log(error)
        }
    }
}