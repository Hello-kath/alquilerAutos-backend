const express = require('express');
const router = express.Router();

const clienteController = require('../controller/clientecontroller');

// Ruta para el login de clientes


// Ruta para registrar un nuevo cliente
router.post('/', clienteController.registrarCliente);

// Ruta para obtener todos los clientes
router.get('/', clienteController.verclientes);

module.exports = router;
