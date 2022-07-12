const express = require("express")
const router = express.Router()
const presentismController = require("../controllers/presentism.controller")

router.get("/", presentismController.getAll)
router.get("/search/:employeeId", presentismController.getByUser)
router.post("/addAssistance",presentismController.addAssistance)
router.delete("/:assistanceId", presentismController.deleteAssistance)
router.put("/:assistanceId", presentismController.updatePresentism)

module.exports = router