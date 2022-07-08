const Attendance = require("../models/Attendance")
const Users = require("../models/Users")

module.exports = {
    getAll: async () => {
        try {
            const allAssistances = await Attendance.findAll({include: { model: Users }})
            return allAssistances
        } catch (error) {
            console.log(error)
        }
    },

    workDayStart: async (data) => {
        const { id, workDayStart } = data
        try {
            const user = await Users.findByPk(id)
            const newAssistance = await Attendance.create({ workDayStart })
            return newAssistance.setUser(user)
        } catch (error) {
            console.log(error)
        }
    },

    workDayEnd: async (data) => {
        const {workDayEnd, id} = data
        try {
            const attendanceUpdated = await Attendance.update({workDayEnd}, {
                where: { id },
                returning: true,
                plain: true
            })
            return attendanceUpdated[1]
        } catch (error) {
            console.log(error)
        }
    },

    getByUser: async (userId) => {
        try {
            const assistance = await Attendance.findAll({
                where: { userId },
                include: { model: Users },
            })
            return assistance
        } catch (error) {
            console.log(error)
        }
    },

    getByDate: async (date) => {
        try {
            const assistance = await Attendance.findAll({
                where: { workDayStart: date}
            })
            return assistance
        } catch (error) {
            console.log(error)
        }
    },

    deleteAssistance: async (assistanceId) => {
        try {
            const assistanceDeleted = await Attendance.destroy({
                where: { id: assistanceId }
            })
            return assistanceDeleted
        } catch (error) {
            console.log(error)
        }
    },
    
}