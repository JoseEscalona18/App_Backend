var express = require('express');
var router = express.Router();
const controller = require('../controllers/solicitantes.c')

//VER TODO
router.get('/',controller.consulta);

module.exports = router;

// CONSULTAR MEDIANTE CEDULA DE IDENTIDAD DEL SOLICITANTE, EJEM: http://localhost:3000/api/equipos/30302836 ↓
router.get('/:CiS', controller.consultaCI);

/// AGREGAR SOLICITANTES

router.post('/', controller.agregarSolicitante);

/// BORRAR POR CEDULA DE SOLICITANTE
router.delete('/:CiS', controller.eliminarSolicitante);

/// ACTUALIZAR NombreUS, ContraS y NumT

   router.put('/:CiS', controller.editarSolicitante);