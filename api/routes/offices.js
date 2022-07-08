const express = require("express")
const router = express.Router()
const officesController = require("../controllers/offices.controller")

router.get("/", officesController.getAll)
router.get("/country/:country", officesController.getByCountry)
router.get("/city/:city", officesController.getByCity)
router.get("/search/:search", officesController.search)
router.post("/addOffice", officesController.addOffice)
router.post("/user/addToOffice", officesController.userAddOffice)
router.delete("/:officeId", officesController.deleteOffice)
router.put("/:officeId", officesController.updateOffice)

module.exports = router;