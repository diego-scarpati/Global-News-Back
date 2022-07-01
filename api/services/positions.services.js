const Positions = require("../models/Positions")


module.exports = {
    getAll: async () => {
        try {
            const allPositions = await Positions.findAll()
            return allPositions
        } catch (error) {
            throw new Error("Error getting positions")
        }
    },

    addPosition: async (data) => {
        try {
            const positionCreated = await Positions.create(data)
            return positionCreated;
        }catch (error){
            console.log(error)
        }
    },

    deletePosition: async (id) => {
        try {
            const positionDeleted = await Positions.destroy({where: {id}})
            return positionDeleted
        } catch (error) {
            console.log(error)
        }
    },

    updatePosition: async (positionId, data) => {
        try {
            const updatedPosition = await Positions.update(data, {
                where: {id: positionId},
                returning: true,
                plain: true
            })
            return updatedPosition[1]
        } catch (error) {
            console.log(error)
        }
    }
}