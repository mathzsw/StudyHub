const express = require('express');
const materiasController = require('../controllers/materiasController');

const router = express.Router();

router.get('/', materiasController.listar);
router.post('/', materiasController.criar);

module.exports = router;