///Anexar a app.js
var express = require('express');
var router = express.Router();
const controller = require('../controllers/espacios.c')

//VER TODO
router.get('/', controller.consulta);

// CONSULTAR MEDIANTE CODIGO DE LUGAR, EJEM: http://localhost:3000/api/equipos/9292 ↓
router.get('/:Code', controller.consultaSerial);

/// AGREGAR ESPACIOS

router.post('/', controller.agregarEspacio);

// Borrar espacio por Codigo del Lugar

router.delete('/:Code', controller.eliminarEspacio);

/// ACTUALIZAR POR CODIGO

router.put('/:Code', controller.editarEspacio);

module.exports = router;