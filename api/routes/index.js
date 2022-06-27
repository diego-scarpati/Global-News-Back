const express = require("express");
const router = express.Router();
const usersRouter = require("./users");
const positionsRouter = require("./positions")
const teamsRouter = require("./teams")



router.use("/users", usersRouter)
router.use("/positions", positionsRouter)
router.use("/teams", teamsRouter)


module.exports = router;