const express = require("express")
const router = express.Router()
const teamsController = require("../controllers/teams.controller.js")


router.get("/", teamsController.getAll)
router.post("/user/addTeam", teamsController.userAddTeam)
router.get("/user/:id", teamsController.getAllbyUser)
router.get("/:id", teamsController.getTeam)
router.post("/addTeam", teamsController.addTeam)
router.delete("/:teamId", teamsController.deleteTeam)
router.put("/:teamId", teamsController.updateTeam)
module.exports = router;