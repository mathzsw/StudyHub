const express = require('express');
const materiasController = require('../controllers/materiasController');

const router = express.Router();

router.get('/', materiasController.listar);
router.post('/', materiasController.criar);
router.put('/:id', materiasController.atualizar);
router.delete('/:id', materiasController.excluir);

module.exports = router;