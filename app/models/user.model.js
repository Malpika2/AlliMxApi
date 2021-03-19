module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define('users_test_anthony', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true, 
            primaryKey: true
        },
        nombre: {
            type: Sequelize.STRING,
            allowNull: false
        },
        segundo: {
            type: Sequelize.STRING,
            allowNull: false
        },
        paterno: {
            type: Sequelize.STRING,
            allowNull: false
        },
        materno: {
            type: Sequelize.STRING,
            allowNull: false
        },
        fechaNacimiento: {
            type: Sequelize.STRING,
            allowNull: false
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false
        },
        telefono: {
            type: Sequelize.STRING,
            allowNull: false
        },
    });
    return User;
}