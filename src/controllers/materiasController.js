const { Materia } = require('../models');

async function listar(req, res) {
    const materias = await Materia.findAll();

    res.json(materias);
}

async function criar(req, res) {
    const { nome, descricao } = req.body;

    if (!nome || nome.trim() === '') {
        return res.status(400).json({
            erro: 'O nome da matéria é obrigatório.'
        });
    }

    const materia = await Materia.create({
        nome,
        descricao
    });

    res.status(201).json(materia);
}

async function atualizar(req, res) {
    const { id } = req.params;
    const { nome, descricao } = req.body;

    const materia = await Materia.findByPk(id);

    if (!materia) {
        return res.status(404).json({
            erro: 'Matéria não encontrada.'
        });
    }

    if (!nome || nome.trim() === '') {
        return res.status(400).json({
            erro: 'O nome da matéria é obrigatório.'
        });
    }

    materia.nome = nome;
    materia.descricao = descricao;

    await materia.save();

    res.json(materia);
}

async function excluir(req, res) {
    const { id } = req.params;

    const materia = await Materia.findByPk(id);

    if (!materia) {
        return res.status(404).json({
            erro: 'Matéria não encontrada.'
        });
    }

    await materia.destroy();

    res.status(204).send();
}

async function pagina(req, res) {
    const materias = await Materia.findAll();

    const materiasView = materias.map(materia => materia.toJSON());

    res.render('materias/index', {
        materias: materiasView,
        layout: false
    });
}

module.exports = {
    listar,
    criar,
    atualizar,
    excluir,
    pagina
};