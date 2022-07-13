const userServices = require("../services/users.services");


module.exports = {
    getAll: async (req, res, next) => {
        try {
            const allUsers = await userServices.getAll()
            if (!allUsers) return res.status(404).json({ message: "Users not found" })
            return res.json(allUsers)
        } catch (error) {
            next(error)
        }
    },
    findByInput: async (req,res,next) => {
        const searchInput = req.params.input
        try {
            const searchUser = await userServices.findByInput(searchInput)
            if (!searchUser) return res.status(404).json({ message: "User not found" })
            return res.json(searchUser)
        } catch (error) {
            next(error)
        }
    },

    register: async (req, res, next) => {
        try {
            const userCreated = await userServices.register(req.body)
            if (!userCreated) return res.status(404).json({ message: "User has not been created" })
            return res.status(201).json(userCreated);
        } catch (error) {
            next(error);
        }
    },

    deleteUser: async (req, res, next) => {
        const userId = req.params.id
        try {
            await userServices.deleteUser(userId)
            res.status(204).json("DELETED")
        } catch (error) {
            next(error)
        }
    },

    getUser: async (req, res, next) => {
        const userId = req.params.id
        try {
            const user = await userServices.getUser(userId)
            if (!user) return res.status(404).json({ message: "User not found" })
            return res.send(user)
        } catch (error) {
            next(error)
        }
    },

    updateUser: async (req, res, next) => {
        const userId = req.params.id
        const data = req.body
        try {
            const updatedUser = await userServices.updateUser(userId, data)
            res.status(202).json(updatedUser)
        } catch (error) {
            next(error)
        }
    },

    updateUserPosition: async (req, res, next) => {
        const userId = req.body.userId
        const position = req.body.position
        try {
            const updatedUser = await userServices.updateUserPosition(userId, position)
            res.status(202).json(updatedUser)
        } catch (error) {
            next(error)
        }
    },

    findByEmail: async (req, res, next) => {
        const email = (req.params.email);
        try {
            const userByEmail = await userServices.findByEmail(email)
            console.log("🚀 ~ file: users.controller.js ~ line 82 ~ findByEmail: ~ userByEmail", userByEmail)
            return res.send(userByEmail)
        } catch (error) {
            next(error)
        }
    }


}
