const User = require("../models/Users");
const Positions = require("../models/Positions");
const Availability = require("../models/Availability");

module.exports = {
  register: async (userData) => {
    console.log("🚀 ~ file: auth.services.js ~ line 7 ~ register: ~ userData", userData)
    console.log("entro en el auth service de register")
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
    console.log("🚀 ~ file: auth.services.js ~ line 23 ~ login: ~ data", data)
    console.log("entro en el auth service de logIn")
    const { email } = data;
    const user = await User.findOne({
      where: {
        email,
      },
    });
    return user;
  },
};
