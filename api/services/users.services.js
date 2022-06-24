const User = require("../models/Users")


module.exports = {
    getAll: async() => {
        try {
            const allUsers = await User.findAll()
            return allUsers
        } catch (error){
            throw new Error("Error getting users")
        }
    },

    register: async (userData) => {
        const userCreated = await User.create(userData);
        return userCreated;
    },

    deleteUser: async(id) =>{
        try{
            const userDeleted = await User.destroy({where:{id}})
            return userDeleted
        }catch(e){
            next(e)
        }
      },

}
