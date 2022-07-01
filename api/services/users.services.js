const User = require("../models/Users");
const { Op } = require("sequelize");

module.exports = {
  getAll: async () => {
    try {
      const allUsers = await User.findAll({ order: [["id", "ASC"]] });
      return allUsers;
    } catch (error) {
      throw new Error("Error getting users");
    }
  },

  findByName: async (search) => {
    try {
      const searchUser = await User.findAll({
        where: {
          [Op.or]: [
            { firstName: { [Op.substring]: `${search}` } },
            { lastName: { [Op.substring]: `${search}` } },
            { nationalId: { [Op.eq]: `${search}` } },
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

  register: async (userData) => {
    try {
      const userCreated = await User.create(userData);
      return userCreated;
    } catch (error) {
      console.log(error);
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
      const user = await User.findByPk(id);
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
