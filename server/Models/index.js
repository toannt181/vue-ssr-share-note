const Sequelize = require('sequelize')

import UserModel from './UserModel'
import CompanyModel from './CompanyModel'

export const sequelize = new Sequelize({
  host: process.env.HOST,
  database: process.env.DATABASE,
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
  dialect: 'mysql',
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  define: {
    underscored: true,
    charset: 'utf8',
    dialectOptions: {
      collate: 'utf8_general_ci'
    },
    timestamps: true,
  },
})

export const User = UserModel(sequelize, Sequelize)
export const Company = CompanyModel(sequelize, Sequelize)

User.hasOne(Company)

// sequelize
//   .sync()
//   .then(() => {
//     console.log(`Database & tables created!`)
//   })
