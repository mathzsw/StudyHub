const Materia = require('../models/Materia');

async function listar(req, res) {
    try {
        const materias = await Materia.findAll({
            order: [['nome', 'ASC']]
        });

        res.json(materias);
    } catch (error) {
        console.error('Erro ao listar matérias:', error);
        res.status(500).json({ error: 'Não foi possível listar as matérias.' });
    }
}

async function buscarPorId(req, res) {
    try {
        const materia = await Materia.findByPk(req.params.id);

        if (!materia) {
            return res.status(404).json({ error: 'Matéria não encontrada.' });
        }

        res.json(materia);
    } catch (error) {
        console.error('Erro ao buscar matéria:', error);
        res.status(500).json({ error: 'Não foi possível buscar a matéria.' });
    }
}

async function criar(req, res) {
    try {
        const { nome, descricao } = req.body;

        if (!nome || !nome.trim()) {
            return res.status(400).json({ error: 'O nome da matéria é obrigatório.' });
        }

        const materia = await Materia.create({
            nome: nome.trim(),
            descricao: descricao?.trim() || null
        });

        res.status(201).json(materia);
    } catch (error) {
        console.error('Erro ao criar matéria:', error);
        res.status(400).json({ error: error.message });
    }
}

async function atualizar(req, res) {
    try {
        const materia = await Materia.findByPk(req.params.id);

        if (!materia) {
            return res.status(404).json({ error: 'Matéria não encontrada.' });
        }

        const { nome, descricao } = req.body;

        if (!nome || !nome.trim()) {
            return res.status(400).json({ error: 'O nome da matéria é obrigatório.' });
        }

        await materia.update({
            nome: nome.trim(),
            descricao: descricao?.trim() || null
        });

        res.json(materia);
    } catch (error) {
        console.error('Erro ao atualizar matéria:', error);
        res.status(400).json({ error: error.message });
    }
}

async function excluir(req, res) {
    try {
        const materia = await Materia.findByPk(req.params.id);

        if (!materia) {
            return res.status(404).json({ error: 'Matéria não encontrada.' });
        }

        await materia.destroy();

        res.status(204).send();
    } catch (error) {
        console.error('Erro ao excluir matéria:', error);
        res.status(500).json({ error: 'Não foi possível excluir a matéria.' });
    }
}

module.exports = {
    listar,
    buscarPorId,
    criar,
    atualizar,
    excluir
};
