const sequelize = require("sequelize");
const db = require("../db");
const bcrypt = require("bcrypt")


class Users extends sequelize.Model {
  encryptPassword(password,salt){
    return bcrypt.hash(password,salt)
  }  
  async comparePassword(password){
    return bcrypt.compare(password,this.password)
  }
}

Users.init(
  {
    employeeId: {
      type: sequelize.STRING,
      
    },
    firstName: {
      type: sequelize.STRING,
      allowNull: false,
      
    },
    lastName: {
      type: sequelize.STRING,
      allowNull: false,
    },
    email : {
      type: sequelize.STRING,
      allowNull: false,
      validate: {
        isEmail: true
      },
      unique: true,
    },
    password : {
      type: sequelize.STRING,
      allowNull: false,
    },
    nationalId: {
      type: sequelize.BIGINT,
      allowNull: false,
      unique: true,
    },
    address: {
      type: sequelize.STRING,
    },
    phoneNumber: {
      type: sequelize.STRING,
    },
    birthday: {
      type: sequelize.DATEONLY,
    },
    startDate: {
      type: sequelize.DATEONLY,
      
    },
    endDate: {
      type: sequelize.DATEONLY,
    },
    city: {
      type: sequelize.STRING,
    },
    countryOfResidence: {
      type: sequelize.STRING,
    },
    city: {
      type: sequelize.STRING,
    },
    shift: {
      type: sequelize.STRING,
    },
    workingDays: {
      type: sequelize.STRING,
    },
    workingHours: {
      type: sequelize.STRING,
    },
    observations: {
      type: sequelize.TEXT,
    },
  },
  { sequelize: db, modelName: "user" }
);

Users.beforeCreate(async (user)=>{
  if (!user.password) return
  try{
      const salt = await bcrypt.genSalt(10)
      const passwordHash = await user.encryptPassword(user.password,salt)
      user.password = passwordHash
  }catch(e){
      throw new Error("ERROR PASSWORD")
  }
})

module.exports = Users;
