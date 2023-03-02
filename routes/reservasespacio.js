///CREAR ROUTER
var express = require('express');
var router = express.Router();
const controller = require('../controllers/reservaespacio.c')

//VER TODO
router.get('/',controller.consulta);

module.exports = router;

// CONSULTAR LA RESERVA DE EQUIPO POR IDD

router.get('/:IDD', controller.consultaIDD);


//AGREGAR RESERVAS DE EQUIPO /// HAY QUE ACTUALIZAR LO QUE ESTA EN EQUIPOS IGUALMENTE, EL ESTATUS ESPECIFICAMENTE

router.post('/', controller.agregarResEsp);

///BORRAR RESERVA DE ESPACIO POR IDD
router.delete('/:IDD', controller.eliminarResEsp);

//ACTUALIZAR RESERVA DE ESPACIO POR IDD // HAY QUE ACTUALIZAR LO QUE ESTA EN ESPACIOS Y PERSONAL IGUALMENTE, EL ESTATUS ESPECIFICAMENTE

router.put('/:IDD', controller.editarResEsp);

///CONSULTAR RESERVAS POR FECHAS DE INICIO

router.get('/fecha/:FechaInicio', controller.consultaFecha);

router.get('/Rango1/:Fecha1/Rango2/:Fecha2', controller.consultaRangoFecha);