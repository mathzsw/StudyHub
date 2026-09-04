const express = require('express');
const tarefasController = require('../controllers/tarefasController');

const router = express.Router();

router.get('/', tarefasController.listar);
router.post('/', tarefasController.criar);
router.put('/:id', tarefasController.atualizar);
router.delete('/:id', tarefasController.excluir);

module.exports = router;
