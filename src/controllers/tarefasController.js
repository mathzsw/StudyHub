const { Tarefa, Materia } = require('../models');

async function listar(req, res) {
    const tarefas = await Tarefa.findAll({
        include: Materia
    });

    res.json(tarefas);
}

async function criar(req, res) {
    const { titulo, descricao, prazo, status, materiaId } = req.body;

    if (!titulo || titulo.trim() === '') {
        return res.status(400).json({
            erro: 'O título da tarefa é obrigatório.'
        });
    }

    if (!materiaId) {
        return res.status(400).json({
            erro: 'A matéria da tarefa é obrigatória.'
        });
    }

    const materia = await Materia.findByPk(materiaId);

    if (!materia) {
        return res.status(404).json({
            erro: 'Matéria não encontrada.'
        });
    }

    const tarefa = await Tarefa.create({
        titulo,
        descricao,
        prazo,
        status,
        materiaId
    });

    res.status(201).json(tarefa);
}

async function atualizar(req, res) {
    const { id } = req.params;
    const { titulo, descricao, prazo, status, materiaId } = req.body;

    const tarefa = await Tarefa.findByPk(id);

    if (!tarefa) {
        return res.status(404).json({
            erro: 'Tarefa não encontrada.'
        });
    }

    if (!titulo || titulo.trim() === '') {
        return res.status(400).json({
            erro: 'O título da tarefa é obrigatório.'
        });
    }

    if (!materiaId) {
        return res.status(400).json({
            erro: 'A matéria da tarefa é obrigatória.'
        });
    }

    const materia = await Materia.findByPk(materiaId);

    if (!materia) {
        return res.status(404).json({
            erro: 'Matéria não encontrada.'
        });
    }

    tarefa.titulo = titulo;
    tarefa.descricao = descricao;
    tarefa.prazo = prazo;
    tarefa.status = status || 'pendente';
    tarefa.materiaId = materiaId;

    await tarefa.save();

    res.json(tarefa);
}

async function excluir(req, res) {
    const { id } = req.params;

    const tarefa = await Tarefa.findByPk(id);

    if (!tarefa) {
        return res.status(404).json({
            erro: 'Tarefa não encontrada.'
        });
    }

    await tarefa.destroy();

    res.status(204).send();
}

module.exports = {
    listar,
    criar,
    atualizar,
    excluir
};
