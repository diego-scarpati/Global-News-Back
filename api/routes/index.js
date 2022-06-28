const express = require("express");
const router = express.Router();
const usersRouter = require("./users");
const positionsRouter = require("./positions")
const teamsRouter = require("./teams")
const officesRouter = require ("./offices")
const licencesRouter = require("./workLicenses")
const presentismRouter = require("./presentism")



router.use("/users", usersRouter)
router.use("/positions", positionsRouter)
router.use("/teams", teamsRouter)
router.use("/offices", officesRouter)
router.use("/workLicenses", licencesRouter)
router.use("/presentism", presentismRouter)


module.exports = router;