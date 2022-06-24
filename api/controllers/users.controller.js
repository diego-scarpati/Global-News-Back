const userServices = require("../services/users.services");

module.exports = {
    getAll: async (req, res, next) => {
        try {
            const allUsers = await userServices.getAll()
            if (!allUsers) return res.status(404).json({ message: "Users not found" })
            return res.json(allUsers)
        } catch (e) {
            next(e)
        }
    },

    register: async (req, res, next) => {
        try {
            const userCreated = await userServices.register(req.body)
            res.status(201).json(userCreated);
        } catch (err) {
            console.log(err)
            next(err);
        }
    },

    deleteUser: async (req, res, next) => {
        const userId = req.params.id
        try {
            await userServices.deleteUser(userId)
            res.json("DELETED")
        } catch (e) {
            next(e)
        }
    },

}