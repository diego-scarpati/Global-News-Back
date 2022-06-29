// const cookieParser = require("cookie-parser");
const express = require("express");
const authRoutes = express();
// const { google } = require("googleapis");
// const url = require("url");
const { googleOauthHandler } = require("../controllers/auth.controller");
// authRoutes.use(cookieParser());

authRoutes.get("/login", googleOauthHandler);

// authRoutes.get("/profile", checkAuthenticated, (req, res) => {
//   let user = req.user;
//   res.render("profile", { user });
// });

// authRoutes.get("/protectedRoute", checkAuthenticated, (req, res) => {
//   res.send("This route is protected");
// });

// authRoutes.get("/logout", (req, res) => {
//   res.clearCookie("session-token");
//   res.redirect("/login");
// });

module.exports = authRoutes;
