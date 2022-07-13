const SECRET = process.env.SECRET;
var jwt = require("jsonwebtoken");
const authServices = require("../services/auth.services");

module.exports = {
  register: async (req, res, next) => {
    console.log("entro en el auth controller de register")
    console.log("req.body:", req.body);
    try {
      const userCreated = await authServices.register(req.body);
      if (!userCreated)
      return res.status(404).json({ message: "User has not been created" });
      return res.status(201).json(userCreated);
    } catch (error) {
      next(error);
    }
  },
  logIn: async (req, res, next) => {
    console.log("entro en el auth controller de logIn")
    console.log("req.body:", req.body);
    try {
      const loggedUser = await authServices.login(req.body);
      if (!loggedUser) {
        return res
          .status(404)
          .send({ message: "User could not get logged in" });
      }
      const passwordIsValid = await loggedUser.comparePassword(req.body.password);
      console.log("🚀 ~ file: auth.controller.js ~ line 29 ~ logIn: ~ passwordIsValid", passwordIsValid)
      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!",
        });
      }
      const token = jwt.sign({ id: loggedUser.id }, SECRET, {
        expiresIn: 1000 * 3600 * 12, // 12 horas
      });
      console.log("🚀 ~ file: auth.controller.js ~ line 39 ~ logIn: ~ token", token)
      res.status(200).send({
        ...loggedUser,
        accessToken: token,
      });
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  },
};
