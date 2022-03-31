'use strict';

module.exports = {
  async up (queryInterface, DataTypes) {

    return queryInterface.createTable("Users",{
      id:{
        allowNull:false,
        autoIncrement:true,
        primaryKey:true,
        type:DataTypes.INTEGER,
      },
      name:{
        allowNull:false,
        type:DataTypes.STRING,
        unique:true,
      },
      email:{
        allowNull:false,
        type:DataTypes.STRING,
        unique:true,
      },
      telefone:{
        type:DataTypes.STRING,
        allowNull:false,
        defaultValue:"(xx) xxxxx-xxxx"
      },
      password:{
        allowNull:false,
        type:DataTypes.STRING,
      },
      createdAt:{
        allowNull:false,
        type:DataTypes.DATE,
      },
      updatedAt:{
        allowNull:false,
        type:DataTypes.DATE,
      },
    })

    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: DataTypes.INTEGER });
     */
  },

  async down (queryInterface, DataTypes) {
    return queryInterface.dropTable("Users");
  }
};
