
///CREAR ROUTER
var express = require('express');
var router = express.Router();

const controller = require('../controllers/reservaequipo.c')

//VER TODO
router.get('/', controller.consulta);

module.exports = router;

// CONSULTAR LA RESERVA DE EQUIPO POR IDE

router.get('/:IDE', controller.consultaIDE);


//AGREGAR RESERVAS DE EQUIPO /// HAY QUE ACTUALIZAR LO QUE ESTA EN EQUIPOS IGUALMENTE, EL ESTATUS ESPECIFICAMENTE

router.post('/', controller.agregarResEqu);

//BORRAR RESERVA DE EQUIPO POR IDE
router.delete('/:IDE', controller.eliminarResEqu);


///ACTUALIZAR RESERVAS DE EQUIPOS , !! HAY QUE ACTUALIZAR LO QUE ESTA EN EQUIPOS IGUALMENTE, EL ESTATUS ESPECIFICAMENTE
router.put('/:IDE', controller.editarResEqu);

///CONSULTAR RESERVAS POR FECHAS DE INICIO
router.get('/Fecha/:FechaInicio', controller.consultaFechaInicio);

///CONSULTAR RESERVAS POR RANGO DE FECHAS DE INICIO ↓

router.get('/Rango1/:Fecha1/Rango2/:Fecha2',controller.consultaRangoFecha);