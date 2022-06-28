const express = require("express")
const router = express.Router()
const licensesController = require("../controllers/workLicenses.controller")

router.get("/", licensesController.getAll)
router.get("/:licenseId", licensesController.getLicence)
router.get("/:type", licensesController.getByType)
router.post("/addLicense", licensesController.addLicense)
router.delete("/:licenseId", licensesController.deleteLicence)
router.put("/:licenseId", licensesController.updateLicense)

module.exports = router