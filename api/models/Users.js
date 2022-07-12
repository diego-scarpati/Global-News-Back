const sequelize = require("sequelize");
const db = require("../db");
const bcrypt = require("bcrypt");

class Users extends sequelize.Model {
  encryptPassword(password, salt) {
    return bcrypt.hash(password, salt);
  }
  async comparePassword(password) {
    return bcrypt.compare(password, this.password);
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
      validate: {
        notEmpty: true,
        len: [3, 30],
        is: [/^[A-Za-z ]+$/g]
      },
    },
    lastName: {
      type: sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [3, 30],
        is: [/^[A-Za-z ]+$/g]
      },
    },
    email: {
      type: sequelize.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
        notEmpty:true
      },
    },
    password: {
      type: sequelize.STRING,
      allowNull: false,
    },
    nationalId: {
      type: sequelize.STRING,
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
      type: sequelize.STRING,
    },
    startDate: {
      type: sequelize.STRING,
    },
    endDate: {
      type: sequelize.STRING,
    },
    countryOfResidence: {
      type: sequelize.STRING,
      validate: {
        is: [/^[A-Za-z ]+$/g]
      },
    },
    city: {
      type: sequelize.STRING,
      validate: {
        is: [/^[A-Za-z ]+$/g]
      },
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
    token: {
      type: sequelize.TEXT,
    },
    RRHH: {
      type: sequelize.BOOLEAN,
      defaultValue: false,
    },
    expoToken : {
      type: sequelize.STRING,
    }
  },
  { sequelize: db, modelName: "user" }
);

Users.beforeCreate(async (user) => {
  if (!user.password) return;
  try {
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await user.encryptPassword(user.password, salt);
    user.password = passwordHash;
  } catch (e) {
    throw new Error("ERROR PASSWORD");
  }
});

module.exports = Users;
