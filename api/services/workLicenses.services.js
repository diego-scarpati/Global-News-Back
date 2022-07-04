const Worklicenses = require("../models/WorkLicenses");
const Users = require("../models/Users");
const { Op } = require("sequelize")

module.exports = {
  getAll: async () => {
    try {
      const allLicenses = await Worklicenses.findAll({
        include: { model: Users }
      });
      return allLicenses;
    } catch (error) {
      console.log(error);
    }
  },
  getByUser: async (userId) => {
    try {
      const allLicenses = await Worklicenses.findAll({
        where: { userId },
      });
      return allLicenses;
    } catch (error) {
      console.log(error);
    }
  },

  addLicense: async (data) => {
    const { info } = data;
    const { type, startDate, endDate, attachment, observations } = info.data;
    const userId = info.user.id;
    try {
      const user = await Users.findByPk(userId);
      console.log("UserByPk",user)
      const worklicenses = await Worklicenses.create(info.data);
      return worklicenses.setUser(user);
    } catch (error) {
      console.log(error);
    }
  },

  deleteLicence: async (licenceId) => {
    try {
      const licenseDeleted = await Worklicenses.destroy({
        where: { id: licenceId },
      });
      return licenseDeleted;
    } catch (error) {
      console.log(error);
    }
  },
  updateLicense: async (licenseId, data) => {
    try {
      const updatedLicense = await Worklicenses.update(data, {
        where: { id: licenseId },
        returning: true,
        plain: true,
      });
      return updatedLicense[1];
    } catch (error) {
      console.log(error);
    }
  },

  getLicence: async (licenseId) => {
    try {
      const license = await Worklicenses.findByPk(licenseId);
      return license;
    } catch (error) {
      console.log(error);
    }
  },

  getLicenceByInput: async (input) => {
    console.log(input)
    try {
      const user = await Users.findAll({
        where: {
          [Op.or]: [
            { firstName: { [Op.substring]: `${input}` } },
            { lastName: { [Op.substring]: `${input}` } },
            { nationalId: { [Op.substring]: `${input}` } },
            { employeeId: { [Op.substring]: `${input}` } },
            { email: { [Op.substring]: `${input}` } },
          ],
        },
      });
      const licensesUsers = await Worklicenses.findAll({where:{userId : user[0].id}})
      return licensesUsers
    } catch (error) {
      console.log(error);
    }
  },

  getByType: async (type) => {
    try {
      const licenses = await Worklicenses.findAll({
        where: { type },
      });
      return licenses;
    } catch (error) {
      console.log(error);
    }
  },

  getBydate: async (date) => {
    try {
      const licenses = await Worklicenses.findAll({
        where: { startDate: date },
      });
      return licenses;
    } catch (error) {
      console.log(error);
    }
  },
};
