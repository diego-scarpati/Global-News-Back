const User = require("../models/Users");
const Positions = require("../models/Positions");
const Availability = require("../models/Availability");
const Teams = require("../models/Teams");

module.exports = {
  register: async (userData) => {
    try {
      const position = await Positions.findOrCreate({
        where: { hierarchy: "Empleado" },
      });
      const availability = await Availability.findByPk(2);
      const userCreated = await User.create(userData);
      userCreated.setAvailability(availability);
      return userCreated.setPosition(position[0]);
    } catch (error) {
      console.log(error);
    }
  },

  login: async (data) => {
    const { email } = data;
    const user = await User.findOne({
      where: { email },
      include: { model: Teams },
    });
    return user;
  },
};
