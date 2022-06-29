const express = require("express");
const router = express.Router();
const usersRouter = require("./users");
const positionsRouter = require("./positions")
const teamsRouter = require("./teams")
const authRoutes = require("./authRoutes")



router.use("/users", usersRouter)
router.use("/positions", positionsRouter)
router.use("/teams", teamsRouter)
router.use("/auth", authRoutes)

module.exports = router;