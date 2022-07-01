const Positions = require('./models/Positions');
const Availability = require('./models/Availability')

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