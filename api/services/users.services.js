const User = require("../models/Users");
const Positions = require("../models/Positions")


const { Op } = require("sequelize");



module.exports = {
    getAll: async () => {
        try {
            const allUsers = await User.findAll(
              {include: { model: Positions }},
              // {order: [["id", "ASC"]]}
              )
            return allUsers
        } catch (error) {
            throw new Error("Error getting users")
        }
    },

    register: async (userData) => {
        try {
            const position = await Positions.findOrCreate({where:{hierarchy:"Empleado"}})
            console.log("position",position)
            const userCreated = await User.create(userData);
            return userCreated.setPosition(position[0]);
        } catch (error) {
            console.log(error)
        }
    },


  findByName: async (search) => {
    try {
      const searchUser = await User.findAll({
        where: {
          [Op.or]: [
            { firstName: { [Op.substring]: `${search}` } },
            { lastName: { [Op.substring]: `${search}` } },
            { nationalId: { [Op.substring]: `${search}` } },
            { employeeId: { [Op.substring]: `${search}` } },
            { email: { [Op.substring]: `${search}` } },
          ],
        },
      });
      return searchUser;
    } catch (error) {
      console.error(error);
    }
  },

  deleteUser: async (id) => {
    try {
      const userDeleted = await User.destroy({ where: { id } });
      return userDeleted;
    } catch (error) {
      console.log(error);
    }
  },

  getUser: async (id) => {
    try {
      const user = await User.findByPk(id,{include: { model: Positions }});
      return user;
    } catch (error) {
      console.log(error);
    }
  },

  updateUser: async (userId, data) => {
    try {
      const updatedUser = await User.update(data, {
        where: { id: userId },
        returning: true,
        plain: true,
      });
      return updatedUser[1];
    } catch (error) {
      console.log(error);
    }
  },

  updateUserPosition: async (userId, position) => {
    try {
      const user = await User.findOne({where:{id:userId}})
       const newPosition = await Positions.findOne({where:{hierarchy : position}})
       return user.setPosition(newPosition.id);
    } catch (error) {
      console.log(error);
    }
  },

  findByEmail: async (email) => {
    try {
      const userByEmail = await User.findOne({
        where: { email },
      });
      return userByEmail;
    } catch (error) {
      console.error(error);
    }
  },
};
