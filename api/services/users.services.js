const User = require("../models/Users")



module.exports = {
    getAll: async () => {
        try {
            const allUsers = await User.findAll()
            return allUsers
        } catch (error) {
            throw new Error("Error getting users")
        }
    },

    register: async (userData) => {
        const userCreated = await User.create(userData);
        return userCreated;
    },

    deleteUser: async (id) => {
        try {
            const userDeleted = await User.destroy({ where: { employeeId: id } })
            return userDeleted
        } catch (error) {
            console.log(error)
        }updatePosition
    },

    getUser: async (id) => {
        try {
            const userId = await User.findOne({
                where: { employeeId: id }
            })
            return userId
        } catch (error) {
            console.log(error)
        }
    },

    updateUser: async (id, data) => {
        try {
            const updatedUser = await User.update(data, {
                where: { employeeId: id },
                returning: true,
                plain: true,
            })
            return updatedUser[1]

        } catch (error) {
            console.log(error)
        }
    },

}
