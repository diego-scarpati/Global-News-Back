const Availability = require("../models/Availability")
const Users = require("../models/Users")

module.exports = {
    getAll: async () => {
        try {
            const allOffices = await Availability.findAll()
            return allOffices
        } catch (error) {
            console.log(error)
        }
    },
    updateAvailability: async (info) => {
        const {id, available} = info
        try {
            const user = await Users.findByPk(id)
            const updateAvailability = await Availability.findOne({where:{available},include: { model: Users }});
             return updateAvailability.setUsers(user)
        } catch (error) {
            console.log(error)
        }
    },
}