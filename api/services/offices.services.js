const Offices = require("../models/Offices")
const Users = require("../models/Users")

module.exports = {
    getAll: async (country) => {
        try {
            const allOffices = await Offices.findAll({where:{country}})
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
    },

    getByCountry: async (country) => {
        try {
            const offices = await Offices.findAll({
                where: {country}
            })
            return offices
        } catch (error) {
            console.log(error)
        }
    },

    getByCity: async (city) => {
        try {
            const offices = await Offices.findAll({
                where: {city}
            })
            return offices
        } catch (error) {
            console.log(error)
        }
    },

    search: async (search) => {
        try {

        } catch (error) {
            console.log(error)
        }
    },

    userAddOffice: async (data) => {
        const {id, name} = data
        try {
            const user = await Users.findByPk(id)
            const office = await Offices.findOne({where: {name}})
            return office.addUsers(user)
        } catch (error) {
            console.log(error)
        }
    },
}