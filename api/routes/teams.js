const express = require("express")
const router = express.Router()
const teamsController = require("../controllers/teams.controller.js")


router.get("/", teamsController.getAll)
router.get("/:teamId", teamsController.getTeam)

router.post("/addTeam", teamsController.addTeam)

router. delete("/:teamId", teamsController.deleteUser)

router.put("/:teamId", teamsController.updateTeam)

module.exports = router;