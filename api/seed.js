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

const UsersSeed =[
  {
    firstName: "Super",
    lastName: "Admin",
    email: "superadmin@gmail.com",
    password: "123",
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
    password: "123",
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
    password: "123",
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
    password: "123",
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
    password: "123",
    nationalId: "44444444",
    adress: "Av Empleado 444",
    countryOfResidence: "Argentina",
    city: "Capital Federal",
    RRHH: false, 
  },
];


const seedFn = async () => {
try{
  const seedObj= UsersSeed.map(async(elem)=>{
  // const positions = await Positions.findOrCreate({
  //   where: { hierarchy: "Empleado" },
  // })
  //const availability = await Availability.findByPk(2);
  const userCreated = await Users.create(elem);
  //userCreated.setAvailability(availability);
  return userCreated//.setPosition(position[0]);
})
} catch (error) {console.log(error)}
}


seedFn();