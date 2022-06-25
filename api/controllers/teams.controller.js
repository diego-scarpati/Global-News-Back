const teamServices = require("../services/team.services");

// module.exports = {
//     getAll: async (req, res, next) => {
//         try {
//             const allTeams = await teamServices.getAll()
//             if(!allTeams) return res.status(404).json({ message: "Team not found"})
//             return res.json(allTeams)
//         }
//     }
// }