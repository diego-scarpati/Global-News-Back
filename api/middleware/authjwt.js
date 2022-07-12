const jwt = require("jsonwebtoken");
const { SECRET } = require("../config/jwt");
const User = require("../models/User.model");
const userService = require("../services/users.services");

const verifyToken = async (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  console.log("TOKEKEKKEKE", token);
  if (!token) return res.status(400).json({ message: "No token provided" });

  try {
    const userData = jwt.verify(token, SECRET);
    req.userId = userData.id;
  } catch (error) {
    return res.status(400).json({ message: "Invalid token" });
  }

  if (!req.userId) return res.status(400).json({ message: "Invalid token" });

  try {
    const user = await User.findByPk(req.userId);
    req.user = user;
    next();
  } catch (error) {
    return res.status(400).json({ message: "No user found" });
  }
};

const logIn = async (req, res, next) => {
  const userData = req.body;
  if (!userData || !userData.email)
    return res.status(400).json({ message: "No user provided" });
  try {
    const loggedUser = await userService.logIn(userData);
    if (!loggedUser) return res.status(401).json({ message: "User not found" });
    const passwordCheck = await loggedUser.comparePassword(
      userData.password
    );
    if (!passwordCheck)
      return res.status(401).json({ message: "Wrong password" });
    const token = jwt.sign(
      { id: loggedUser.id, role: loggedUser.isAdmin },
      SECRET,
      { expiresIn: 20000 }
    );
    const { password, ...user } = loggedUser["dataValues"];
    res.json({ user, token });
  } catch (err) {
    next(err);
  }
};

module.exports = { verifyToken, logIn };
