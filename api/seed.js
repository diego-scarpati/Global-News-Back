const Positions = require("./models/Positions");
const Availability = require("./models/Availability");
const Users = require("./models/Users");
const Teams = require("./models/Teams");

Positions.bulkCreate([
  {
    hierarchy: "Gerente",
  },
  {
    hierarchy: "Jefe",
  },
  {
    hierarchy: "Coordinador",
  },
  {
    hierarchy: "Empleado",
  },
]);

Availability.bulkCreate([
  {
    available: true,
  },
  {
    available: false,
  },
]);

Teams.bulkCreate([
  {
    name: "Contabilidad",
  },
  {
    name: "Desarrollo",
  },
  {
    name: "Produccion",
  },
]);

Users.bulkCreate([
  {
    firstName: "Super",
    lastName: "Admin",
    email: "superadmin@gmail.com",
    password: "$2b$10$JehawPrua7uRS1QZojYuzOGLj8DF4lxi6i0hr7T67uGcJsHi5kbZy",
    nationalId: "00000000",
    adress: "Av Super Admin 000",
    countryOfResidence: "Argentina",
    city: "Capital Federal",
    RRHH: true,
  },
  {
    firstName: "Gerente",
    lastName: "Gerente",
    email: "gerente@gmail.com",
    password: "$2b$10$nJRn3rJRxDiRHdwJiX//9.1WmXtYgzYs7RT63m5tf0JIM/w4IH7Xq",
    nationalId: "11111111",
    adress: "Av Gerente 111",
    countryOfResidence: "Argentina",
    city: "Capital Federal",
    RRHH: false,
  },
  {
    firstName: "Jefe",
    lastName: "Jefe",
    email: "jefe@gmail.com",
    password: "$2b$10$tXaC01Xni,OWSVLtQG9mbuohsK/pHY6dx1gizddUV8NXAOTH2GP3y",
    nationalId: "22222222",
    adress: "Av Jefe 222",
    countryOfResidence: "Argentina",
    city: "Capital Federal",
    RRHH: false,
  },
  {
    firstName: "Coordinador",
    lastName: "Coordinador",
    email: "coordinador@gmail.com",
    password: "$2b$10$LWp0Lle0HJ2q4vvmnWdLH.yW14afMmch2qKd0jWaFU349A4DiX/8W",
    nationalId: "33333333",
    adress: "Av Coordinador 333",
    countryOfResidence: "Argentina",
    city: "Capital Federal",
    RRHH: false,
  },
  {
    firstName: "Empleado",
    lastName: "Empleado",
    email: "empleado@gmail.com",
    password: "$2b$10$JJk1T9GRBa8XKmkVmzbJL.p2f1UFYzDEOXg7wIVxp2Nbik5RaX5UW",
    nationalId: "44444444",
    adress: "Av Empleado 444",
    countryOfResidence: "Argentina",
    city: "Capital Federal",
    RRHH: false, 
  },
]);