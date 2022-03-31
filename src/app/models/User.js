
module.exports = (sequelize,DataTypes)=>{
    const User = sequelize.define("User",{
        name:DataTypes.STRING,
        email:DataTypes.STRING,
        telefone:DataTypes.STRING,
        password:DataTypes.STRING,
    })

    return User;
}