const positionServices = require("../services/positions.services");

module.exports = {
    getAll: async (req, res, next) => {
        try {
            const allPositions = await positionServices.getAll()
            if (!allPositions) return res.status(404).json({ message: "Position not found" })
            return res.json(allPositions)
        } catch (error) {
            next(error)
        }
    },

    addPosition: async (req, res, next) => {
        try {
            const positionCreated = await positionServices.addPosition(req.body)
            res.status(201).json(positionCreated)
        } catch (error) {
            next(error)
        }
    },

    deletePosition: async (req, res, next) => {
        const positionId = req.params.positionId
        try {
            await positionServices.deletePosition(positionId)
            res.status(204).json("DELETED")
        } catch (error) {
            next(error)
        }
    },

    updatePosition: async (req, res, next) => {
        const positionId = req.params.positionId
        const data = req.body 
        try {
             const positionUpdated = await positionServices.updatePosition(positionId, data)
            res.status(202).json(positionUpdated) 
        } catch (error) {
            next(error)
        }
    }

}