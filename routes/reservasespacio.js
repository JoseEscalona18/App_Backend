///CREAR ROUTER
var express = require('express');
var router = express.Router();

const controller = require('../controllers/reservaespacio.c')
const checkAutenticacion = require('../middleware/verifytoken');
const checkRole = require('../middleware/verifyRole');


router.get('/', function(req, res, next) {
  res.render('aggreservaespacios', {Agregado: "Ingrese los datos"})
});

////VER TODAS LAS RESERVAS DE ESPACIOS
router.get(
    '/listar/',/* checkAutenticacion,

    function(req, res, next){
      var roles = ["Admin", "Personal", "Solicitante"];
      checkRole(req, res, next, roles)
    },*/
    
    function(req, res) { controller
    controller.listarRES()
      .then((resultado)=>{
        res.render('listarreservaespacios', {"JSON": JSON.stringify(resultado)});
      })
      .catch((err)=>{
        res.send(err)
      })
});

///MOSTRAR POR ID
router.get(
    '/listar/:ID', /*checkAutenticacion,

    function(req, res, next){
      var roles = ["Admin", "Personal", "Solicitante"];
      checkRole(req, res, next, roles)
    },*/
    
    function(req, res) { 
      let reservadeespacio = req.params.ID
      console.log(reservadeespacio)
    controller.mostrarReservaES(reservadeespacio)
      .then((resultado)=>{
        res.render('listarreservaespacios', {"JSON": JSON.stringify(resultado)});
      })
      .catch((err)=>{
        res.send(err)
      })
});

///MOSTRAR POR FECHA
router.get(
  '/listar/Fecha/:FechaInicio', /*checkAutenticacion,

  function(req, res, next){
    var roles = ["Admin", "Personal", "Solicitante"];
    checkRole(req, res, next, roles)
  },*/
  
  function(req, res) { 
    let reservadeespacio = req.params.FechaInicio
    console.log(reservadeespacio)
  controller.mostrarRESFecha(reservadeespacio)
    .then((resultado)=>{
      res.render('listarreservaespacios', {"JSON": JSON.stringify(resultado)});
    })
    .catch((err)=>{
      res.send(err)
    })
});

///MOSTRAR POR RANGO DE FECHAS
router.get(
  '/listar/Fecha1/:FechaInicio/Fecha2/:FechaFin',/* checkAutenticacion,

  function(req, res, next){
    var roles = ["Admin", "Personal", "Solicitante"];
    checkRole(req, res, next, roles)
  },*/
  
  function(req, res) { 
    let reservadeespacio1 = req.params.FechaInicio
    let reservadeespacio2 = req.params.FechaFin
    console.log(reservadeespacio1)
    console.log(reservadeespacio2)
  controller.mostrarRESRangoFecha(reservadeespacio1, reservadeespacio2)
    .then((resultado)=>{
      res.render('listarreservaespacios', {"JSON": JSON.stringify(resultado)});
    })
    .catch((err)=>{
      res.send(err)
    })
});



///AGREGAR AL REGISTRO DE RESERVAS DE ESPACIOS
router.post(
    '/', /*checkAutenticacion,

    function(req, res, next){
      var roles = ["Admin","Solicitante"];
      checkRole(req, res, next, roles)
    },*/
    
    function(req, res){
      let reservadeespacio = req.body;
    controller.registrar(reservadeespacio)
      .then((resultado)=>{
        res.render('aggreservaespacios', {Agregado: "Agregado correctamente"});
      })
      .catch((err)=>{
        res.send(err)
      })
});

///ACTUALIZAR RESERVA POR ID
router.put(
    '/:ID', checkAutenticacion,

    function(req, res, next){
      var roles = ["Admin", "Solicitante"];
      checkRole(req, res, next, roles)
    },
    
    function(req, res) {
      let IDes = req.params.ID
      console.log(IDes)
      let reservadeespacio = req.body;
    controller.actualizar(reservadeespacio,IDes)
      .then((resultado)=>{
        res.send(resultado);
      })
      .catch((err)=>{
        res.send(err)
      })
});

///BORRAR RESERVA DE ESPACIO POR ID

router.delete(
    '/:ID', checkAutenticacion,

    function(req, res, next){
      var roles = ["Admin"];
      checkRole(req, res, next, roles)
    },
    
    function(req, res){
      let reservadeespacio = req.params.ID;
    controller.borrar(reservadeespacio)
      .then((resultado)=>{
        res.send(resultado);
      })
      .catch((err)=>{
        res.send(err)
      })
  });  




//ACTUALIZAR RESERVA DE ESPACIO POR IDD // HAY QUE ACTUALIZAR LO QUE ESTA EN ESPACIOS Y PERSONAL IGUALMENTE, EL ESTATUS ESPECIFICAMENTE

///CONSULTAR RESERVAS POR FECHAS DE INICIO

module.exports = router