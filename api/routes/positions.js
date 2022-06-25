const express = require("express")
const router = express.Router()
const positionsController = require("../controllers/positions.controller.js")

router.get("/", positionsController.getAll)

router.post("/addPosition", positionsController.addPosition)

router.delete("/:positionId", positionsController.deletePosition)

router.put("/:positionId", positionsController.updatePosition)

module.exports = router