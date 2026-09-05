const { Tarefa, Materia } = require('../models');

const STATUS_VALIDOS = ['pendente', 'em_andamento', 'concluida'];

function validarDados({ titulo, status, materiaId }) {
    if (!titulo || titulo.trim() === '') {
        return 'O título da tarefa é obrigatório.';
    }

    const materiaIdNumerico = Number(materiaId);

    if (!Number.isInteger(materiaIdNumerico) || materiaIdNumerico <= 0) {
        return 'A matéria da tarefa é obrigatória.';
    }

    if (status && !STATUS_VALIDOS.includes(status)) {
        return 'Status da tarefa inválido.';
    }

    return null;
}

async function listar(req, res) {
    const tarefas = await Tarefa.findAll({
        include: Materia
    });

    res.json(tarefas);
}

async function criar(req, res) {
    const { titulo, descricao, prazo, status, materiaId } = req.body;

    const erro = validarDados({ titulo, status, materiaId });

    if (erro) {
        return res.status(400).json({ erro });
    }

    const materia = await Materia.findByPk(Number(materiaId));

    if (!materia) {
        return res.status(404).json({
            erro: 'Matéria não encontrada.'
        });
    }

    const tarefa = await Tarefa.create({
        titulo: titulo.trim(),
        descricao: descricao?.trim() || null,
        prazo: prazo || null,
        status: status || 'pendente',
        materiaId: Number(materiaId)
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

    const erro = validarDados({ titulo, status, materiaId });

    if (erro) {
        return res.status(400).json({ erro });
    }

    const materia = await Materia.findByPk(Number(materiaId));

    if (!materia) {
        return res.status(404).json({
            erro: 'Matéria não encontrada.'
        });
    }

    tarefa.titulo = titulo.trim();
    tarefa.descricao = descricao?.trim() || null;
    tarefa.prazo = prazo || null;
    tarefa.status = status || 'pendente';
    tarefa.materiaId = Number(materiaId);

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
