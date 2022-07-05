const availabilityServices = require("../services/availability.services")

module.exports = {
    getAll: async (req, res, next) => {
        try {
            const allAvailabilitys = await availabilityServices.getAll()
            if (!allAvailabilitys) return res.status(404).json({ message: "Availabilitys not found" })
            return res.json(allAvailabilitys)
        } catch (error) {
            next(error)
        }
    },
    updateAvailability: async (req, res, next) =>{
        const info = req.body
        try{
             const updateAvailability = await availabilityServices.updateAvailability(info)
             if(!updateAvailability) return res.send(404).json({message: "UpdateAvailability not found"})
             return res.json(updateAvailability)
        }catch (error) {
            next(error)
        }
    }
}