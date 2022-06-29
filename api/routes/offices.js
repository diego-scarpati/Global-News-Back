const express = require("express")
const router = express.Router()
const officesController = require("../controllers/offices.controller")

router.get("/", officesController.getAll)

router.post("/addOffice", officesController.addOffice)

router.delete("/:officeId", officesController.deleteOffice)

router.put("/:officeId", officesController.updateOffice)

module.exports = router;