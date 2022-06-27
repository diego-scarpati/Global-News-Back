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
        try {
            const userCreated = await User.create(userData);
            return userCreated;
        } catch (error) {
            console.log(error)
        }
    },

    deleteUser: async (id) => {
        try {
            const userDeleted = await User.destroy({ where: { employeeId: id } })
            return userDeleted
        } catch (error) {
            console.log(error)
        }
    },

    getUser: async (id) => {
        try {
            const user = await User.findOne({
                where: { employeeId: id }
            })
            return user
        } catch (error) {
            console.log(error)
        }
    },

    updateUser: async (userId, data) => {
        try {
            const updatedUser = await User.update(data, {
                where: { employeeId: userId },
                returning: true,
                plain: true,
            })
            return updatedUser[1]

        } catch (error) {
            console.log(error)
        }
    },

}
