module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define('anthony_santiago_users', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true, 
            primaryKey: true
        },
        nombre: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        segundo: {
            type: Sequelize.STRING,
            allowNull: true.valueOf,
            defaultValue:''
        },
        paterno: {
            type: Sequelize.STRING,
            allowNull: true,
            defaultValue:''
        },
        materno: {
            type: Sequelize.STRING,
            allowNull: true,
            defaultValue:''
        },
        fechaNacimiento: {
            type: Sequelize.STRING,
            allowNull: true,
            defaultValue:''
        },
        email: {
            type: Sequelize.STRING,
            allowNull: true.valueOf,
            defaultValue:''
        },
        telefono: {
            type: Sequelize.STRING,
            allowNull: true,
            defaultValue:''
        },
    });
    return User;
}