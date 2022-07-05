const express = require("express")
const router = express.Router()
const availabilityController = require("../controllers/availability.controller")

router.put("/user", availabilityController.updateAvailability)
router.get("/", availabilityController.getAll)

module.exports = router