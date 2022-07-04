const userServices = require("../services/users.services");

module.exports = {
    getAll: async (req, res, next) => {
        console.log(req)
        try {
            const allUsers = await userServices.getAll()
            if (!allUsers) return res.status(404).json({ message: "Users not found" })
            return res.json(allUsers)
        } catch (error) {
            next(error)
        }
    },

    register: async (req, res, next) => {
        try {
            const userCreated = await userServices.register(req.body)
            res.status(201).json(userCreated);
        } catch (error) {
            next(error);
        }
    },

    deleteUser: async (req, res, next) => {
        const userId = req.params.employeeId
        try {
            await userServices.deleteUser(userId)
            res.json("DELETED")
        } catch (error) {
            next(error)
        }
    },

    getUser: async (req, res, next) => {
        const userId = req.params.employeeId
        try {
            const user = await userServices.getUser(userId)
            if (!user) return res.status(404).json({ message: "User not found" })
            return res.send(user)
        } catch (error) {
            next(error)
        }
    },

    updateUser: async (req, res, next) => {
        const userId = req.params.employeeId
        const data = req.body
        try {
            const updatedUser = await userServices.updateUser(userId, data)
            res.status(202).json(updatedUser)
        } catch (error) {
            next(error)
        }
    },


}