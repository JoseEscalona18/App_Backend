var express = require('express');
var router = express.Router();
const Mostrar_equipos = require('../src/Equipos.json');
let Agg
const controller = require('../controllers/equipos.c')
const _ = require('underscore')

// CONSULTA TODOS LOS EQUIPOS ↓
router.get('/',controller.consulta);

// CONSULTA MEDIANTE UN PARAMS SERIALES ESPECIFICOS, EJEM: http://localhost:3000/api/equipos/123456 ↓
router.get('/:Serial',controller.consultaSerial);

// AGREGAR EQUIPOS ↓
router.post('/', controller.agregarEquipo);

//BORRAR LOS EQUIPOS POR SERIAL ↓
router.delete('/:Serial',controller.eliminarEquipo);

//ACTUALIZAR EQUIPOS POR SERIAL ↓
router.put('/:Serial',controller.editarEquipo);



module.exports = router;
//PRUEBA