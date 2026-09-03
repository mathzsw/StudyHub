const { Materia } = require('../models');

async function listar(req, res) {
    const materias = await Materia.findAll();

    res.json(materias);
}

async function criar(req, res) {
    const { nome, descricao } = req.body;

    const materia = await Materia.create({
        nome,
        descricao
    });

    res.json(materia);
}

module.exports = {
    listar,
    criar
};

