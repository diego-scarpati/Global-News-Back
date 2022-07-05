const express = require("express")
const router = express.Router()
const attendanceController = require("../controllers/attendance.controller")

router.get("/", attendanceController.getAll)
router.get("/search/:employeeId", attendanceController.getByUser)
router.get("/date", attendanceController.getByDate)
router.post("/workDayStart",attendanceController.workDayStart)
router.delete("/:assistanceId", attendanceController.deleteAssistance)
router.put("/workDayEnd", attendanceController.workDayEnd)

module.exports = router