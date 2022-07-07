const attendanceServices = require("../services/attendance.services")

module.exports = {
    getAll: async (req, res, next) => {
        try {
            const allAssistances = await attendanceServices.getAll()
            if (!allAssistances) return res.status(404).json({ message: "Assistance not found" })
            return res.json(allAssistances)
        } catch (error) {
            next(error)
        }
    },
    getByUser: async (req, res, next) => {
        const userId = req.params.id
        try {
            const assistance = await attendanceServices.getByUser(userId)
            return res.status(200).json(assistance)
        } catch (error) {
            next(error)
        }
    },
    getByDate: async (req, res, next) => {
        const date = req.body.workDayStart
        try {
            const assistance = await attendanceServices.getByDate(date)
            return res.status(200).json(assistance)
        } catch (error) {
            next(error)
        }
    },
    workDayStart: async (req, res, next) => {
        const data = req.body
        try {
            const assistanceCreated = await attendanceServices.workDayStart(data)
            res.status(201).json(assistanceCreated)
        } catch (error) {
            next(error)
        }
    },
    workDayEnd: async (req, res, next) => {
        const data = req.body
        try {
             const attendanceUpdated = await attendanceServices.workDayEnd(data)
             res.status(202).json(attendanceUpdated)
        } catch (error) {
            next(error)
        }
    },
    deleteAssistance: async (req, res, next) => {
        const assistanceId = req.params.assistanceId
        try {
            await attendanceServices.deleteAssistance(assistanceId)
            res.status(204).json("DELETED")
        } catch (error) {
            next(error)
        }
    },
    
}