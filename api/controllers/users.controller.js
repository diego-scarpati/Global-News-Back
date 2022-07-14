const userServices = require("../services/users.services");

module.exports = {
  getAll: async (req, res, next) => {
    const { countryOfResidence } = req.query;
    try {
      const allUsers = await userServices.getAll(countryOfResidence);
      if (!allUsers)
        return res.status(404).json({ message: "Users not found" });
      return res.json(allUsers);
    } catch (error) {
      next(error);
    }
  },

  findByInput: async (req, res, next) => {
    const searchInput = req.params.input;
    const { countryOfResidence } = req.query;
    try {
      const searchUser = await userServices.findByInput(
        searchInput,
        countryOfResidence
      );
      if (!searchUser)
        return res.status(404).json({ message: "User not found" });
      return res.json(searchUser);
    } catch (error) {
      next(error);
    }
  },

  bossFindByInput: async (req, res, next) => {
    const searchInput = req.params.input;
    const {name} = req.query
    try {
      const searchUser = await userServices.bossFindByInput(searchInput, name);
      if (!searchUser)
        return res.status(404).json({ message: "User not found" });
      return res.json(searchUser);
    } catch (error) {
      next(error);
    }
  },

  register: async (req, res, next) => {
    try {
      const userCreated = await userServices.register(req.body);
      res.status(201).json(userCreated);
    } catch (error) {
      next(error);
    }
  },

  deleteUser: async (req, res, next) => {
    const userId = req.params.id;
    try {
      await userServices.deleteUser(userId);
      res.status(204).json("DELETED");
    } catch (error) {
      next(error);
    }
  },

  getUser: async (req, res, next) => {
    const userId = req.params.id;
    try {
      const user = await userServices.getUser(userId);
      if (!user) return res.status(404).json({ message: "User not found" });
      return res.send(user);
    } catch (error) {
      next(error);
    }
  },


  updateUser: async (req, res, next) => {
    const id = req.params.id;
    const data = req.body;
    try {
      const updatedUser = await userServices.updateUser(id, data);
      res.status(202).json(updatedUser);
    } catch (error) {
      next(error);


    }
  },

  updateUserPosition: async (req, res, next) => {
    const userId = req.body.userId;
    const position = req.body.position;
    try {
      const updatedUser = await userServices.updateUserPosition(
        userId,
        position
      );
      res.status(202).json(updatedUser);
    } catch (error) {
      next(error);
    }
  },

  findByEmail: async (req, res, next) => {
    const email = req.params.email;
    try {
      const userByEmail = await userServices.findByEmail(email);
      return res.send(userByEmail);
    } catch (error) {
      next(error);
    }
  },
};
