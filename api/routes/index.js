const express = require("express");
const router = express.Router();
const usersRouter = require("./users");
const teamsRouter = require("./teams")
const authRoutes = require("./authRoutes")
const officesRouter = require ("./offices")
const positionsRouter = require("./positions")
const licencesRouter = require("./workLicenses")
const presentismRouter = require("./presentism")


router.use("/auth", authRoutes)
router.use("/users", usersRouter)
router.use("/teams", teamsRouter)
router.use("/offices", officesRouter)
router.use("/positions", positionsRouter)
router.use("/workLicenses", licencesRouter)
router.use("/presentism", presentismRouter)


module.exports = router;