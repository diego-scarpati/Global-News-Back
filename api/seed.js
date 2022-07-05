const Positions = require('./models/Positions');
const Availability = require('./models/Availability')
const Teams = require("./models/Teams")
Positions.bulkCreate([
    {
        hierarchy: "Gerente"
    },
    {
        hierarchy: "Jefe"
    },
    {
        hierarchy: "Coordinador"
    },
    {
        hierarchy: "Empleado"
    },
])

Availability.bulkCreate([
    {
        available: true
    },
    {
        available: false
    }
])

Teams.bulkCreate([
    {
        name: "Comercial"
    },
    {
        name: "Soporte"
    },
    {
        name: "Desarrollo"
    },
])
