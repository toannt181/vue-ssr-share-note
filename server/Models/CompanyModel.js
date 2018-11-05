const CompanyModel = (sequelize, Sequelize) => sequelize
  .define('companies', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: Sequelize.STRING,
    address: Sequelize.STRING,
    disable_download: Sequelize.INTEGER(1),
    hide_deleted: Sequelize.INTEGER(1),
  })

export default CompanyModel
