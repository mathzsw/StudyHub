const { DataTypes } = require('sequelize');
const sequelize = require('../../database/database');

const Tarefa = sequelize.define('Tarefa', {
    titulo: {
        type: DataTypes.STRING,
        allowNull: false
    },

    descricao: {
        type: DataTypes.TEXT,
        allowNull: true
    },

    prazo: {
        type: DataTypes.DATEONLY,
        allowNull: true
    },

    status: {
        type: DataTypes.ENUM('pendente', 'em_andamento', 'concluida'),
        allowNull: false,
        defaultValue: 'pendente'
    }
});

module.exports = Tarefa;
