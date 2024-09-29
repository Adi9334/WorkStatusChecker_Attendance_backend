module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define("newusers", {
        user_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
      user_name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true
      },
      password: {
        type: DataTypes.STRING,
        allowNull: true
      },
    }, 
    {
      tableName:"newusers",
      freezeTableName: true, 
      underscored: true ,
      timestamps: false 
    });
  
    return Users;
};