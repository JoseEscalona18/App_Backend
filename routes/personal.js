var express = require('express');
var router = express.Router();


const controller = require('../controllers/personal.c')

//VER TODO
router.get('/', controller.consulta);


// CONSULTAR MEDIANTE CEDULA DE IDENTIDAD, EJEM: http://localhost:3000/api/equipos/30302836 ↓
router.get('/:CI', controller.consultaCI);

/// AGREGAR PERSONAL

router.post('/', controller.agregarPersonal);


// Borrar personal por Cedula de Identidad

router.delete('/:CI', controller.eliminarPersonal);

  /// ACTUALIZAR CARGO, USUARIO, ESPECIALIDAD, CONTRASEÑA y ESTATUS POR CEDULA

  router.put('/:CI', controller.editarPersonal);
  
  module.exports = router;
