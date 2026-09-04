const { DataTypes } = require('sequelize');
const sequelize = require('../../database/database');

const Materia = sequelize.define('Materia', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },

    descricao: {
        type: DataTypes.TEXT,
        allowNull: true
    }
});

module.exports = Materia;