const UserModel = (sequelize, Sequelize) => sequelize
  .define('users', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    first_name: Sequelize.STRING,
    last_name: Sequelize.STRING,
    email: {
      type: Sequelize.STRING,
      unique: 'users_email_unique',
    },
    company_id: Sequelize.INTEGER,
  })

export default UserModel
