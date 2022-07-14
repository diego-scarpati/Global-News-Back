const express = require("express")
const router = express.Router()
const licensesController = require("../controllers/workLicenses.controller")

router.get("/:id", licensesController.getAll)
router.get("/boss/:id", licensesController.bossGetAll)
router.get("/date", licensesController.getBydate)
router.get("/type", licensesController.getByType)
router.get("/:licenseId", licensesController.getLicence)
router.get("/search/:input", licensesController.getLicenceByInput)
router.post("/addLicense", licensesController.addLicense)
router.get("/user/:userId", licensesController.getByUser)
router.put("/:licenseId", licensesController.updateLicense)
router.delete("/:licenseId", licensesController.deleteLicence)

module.exports = router