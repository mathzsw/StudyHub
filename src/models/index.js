const Materia = require('./Materia');
const Tarefa = require('./Tarefa');

Materia.hasMany(Tarefa, {
    foreignKey: 'materiaId',
    onDelete: 'CASCADE'
});

Tarefa.belongsTo(Materia, {
    foreignKey: 'materiaId'
});

module.exports = {
    Materia,
    Tarefa
};
