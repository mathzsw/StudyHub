const { DataTypes } = require('sequelize');
const sequelize = require('../../database/database');

const Materia = sequelize.define('Materia', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: DataTypes.STRING(100),
        allowNull: false,
        validate: {
            notEmpty: {
                msg: 'O nome da matéria é obrigatório.'
            },
            len: {
                args: [2, 100],
                msg: 'O nome da matéria deve ter entre 2 e 100 caracteres.'
            }
        }
    },
    descricao: {
        type: DataTypes.STRING(255),
        allowNull: true,
        validate: {
            len: {
                args: [0, 255],
                msg: 'A descrição deve ter no máximo 255 caracteres.'
            }
        }
    }
}, {
    tableName: 'materias',
    timestamps: true
});

module.exports = Materia;
