const express = require("express")
const router = express.Router()
const attendanceController = require("../controllers/attendance.controller")

router.get("/", attendanceController.getAll)
router.get("/search/:id", attendanceController.getByUser)
router.get("/date", attendanceController.getByDate)
router.post("/workDayStart",attendanceController.workDayStart)
router.put("/workDayEnd", attendanceController.workDayEnd)
router.delete("/:assistanceId", attendanceController.deleteAssistance)

module.exports = router