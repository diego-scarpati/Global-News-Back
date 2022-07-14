const express = require("express");
const authRoutes = express();
const authController = require("../controllers/auth.controller");

authRoutes.post("/register", authController.register);
authRoutes.post("/login", authController.logIn);

module.exports = authRoutes;
