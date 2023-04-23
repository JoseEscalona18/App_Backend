
///CREAR ROUTER
var express = require('express');
var router = express.Router();

const controller = require('../controllers/reservaequipo.c')
const checkAutenticacion = require('../middleware/verifytoken');
const checkRole = require('../middleware/verifyRole');


router.get('/', function(req, res, next) {
  res.render('aggreservaequipos', {Agregado: "Ingrese los datos"})
});

//VER TODO
router.get(
    '/listar/', checkAutenticacion,

    function(req, res, next){
      var roles = ["Admin", "Personal", "Solicitante"];
      checkRole(req, res, next, roles)
    },
    
    function(req, res) { controller
    controller.listarREQ()
      .then((resultado)=>{
        res.render('listarreservaequipos', {"JSON": JSON.stringify(resultado)});
      })
      .catch((err)=>{
        res.send(err)
      })
});

///MOSTRAR POR ID
router.get(
  '/listar/:ID', checkAutenticacion,

  function(req, res, next){
    var roles = ["Admin", "Personal", "Solicitante"];
    checkRole(req, res, next, roles)
  },
  
  function(req, res) { 
    let reservasdeequipo = req.params.ID
    console.log(reservasdeequipo)
  controller.mostrarReservaEQ(reservasdeequipo)
    .then((resultado)=>{
      res.render('listarreservaequipos', {"JSON": JSON.stringify(resultado)});
    })
    .catch((err)=>{
      res.send(err)
    })
});

///MOSTRAR POR FECHA
router.get(
  '/listar/Fecha/:FechaInicio', checkAutenticacion,

  function(req, res, next){
    var roles = ["Admin", "Personal", "Solicitante"];
    checkRole(req, res, next, roles)
  },
  
  function(req, res) { 
    let reservasdeequipo = req.params.FechaInicio
    console.log(reservasdeequipo)
  controller.mostrarREQFecha(reservasdeequipo)
    .then((resultado)=>{
      res.render('listarreservaequipos', {"JSON": JSON.stringify(resultado)});
    })
    .catch((err)=>{
      res.send(err)
    })
});

///MOSTRAR POR RANGO DE FECHAS
router.get(
  '/listar/Fecha1/:FechaInicio/Fecha2/:FechaFin', checkAutenticacion,

  function(req, res, next){
    var roles = ["Admin", "Personal", "Solicitante"];
    checkRole(req, res, next, roles)
  },
  
  function(req, res) { 
    let reservasdeequipo1 = req.params.FechaInicio
    let reservasdeequipo2 = req.params.FechaFin
    console.log(reservasdeequipo1)
    console.log(reservasdeequipo2)
  controller.mostrarREQRangoFecha(reservasdeequipo1, reservasdeequipo2)
    .then((resultado)=>{
      res.render('listarreservaequipos', {"JSON": JSON.stringify(resultado)});
    })
    .catch((err)=>{
      res.send(err)
    })
});

///MOSTRAR POR CEDULA DE SOLICITANTE
router.get(
  '/listar/CedulaS/:CI_Solicitante', checkAutenticacion,

  function(req, res, next){
    var roles = ["Admin", "Personal", "Solicitante"];
    checkRole(req, res, next, roles)
  },
  
  function(req, res) { 
    let reservasdeequipo = req.params.CI_Solicitante
    console.log(reservasdeequipo)
  controller.mostrarREQCedulaS(reservasdeequipo)
    .then((resultado)=>{
      res.render('listarreservaequipos', {"JSON": JSON.stringify(resultado)});
    })
    .catch((err)=>{
      res.send(err)
    })
});

///AGREGAR AL REGISTRO DE RESERVAS
router.post(
  '/', checkAutenticacion,

  function(req, res, next){
    var roles = ["Admin","Solicitante"];
    checkRole(req, res, next, roles)
  },
  
  function(req, res){
    let reservadeequipo = req.body;
  controller.registrar(reservadeequipo)
    .then((resultado)=>{
      res.render('aggreservaequipos', {Agregado: "Agregado correctamente"});
    })
    .catch((err)=>{
      res.send(err)
    })
});

///ACTUALIZAR RESERVA POR ID
router.put(
  '/:ID', checkAutenticacion,

  function(req, res, next){
    var roles = ["Admin","Personal"];
    checkRole(req, res, next, roles)
  },
  
  function(req, res) {
    let IDeq = req.params.ID
    console.log(IDeq)
    let reservadeequipo = req.body;
  controller.actualizar(reservadeequipo,IDeq)
    .then((resultado)=>{
      res.send(resultado);
    })
    .catch((err)=>{
      res.send(err)
    })
});

///BORRAR RESERVA DE EQUIPO POR ID

router.delete(
  '/:ID', checkAutenticacion,

  function(req, res, next){
    var roles = ["Admin"];
    checkRole(req, res, next, roles)
  },
  
  function(req, res){
    let reservadeequipo = req.params.ID;
  controller.borrar(reservadeequipo)
    .then((resultado)=>{
      res.send(resultado);
    })
    .catch((err)=>{
      res.send(err)
    })
});



//CONSULTAR RESERVAS POR FECHAS DE INICIO
///CONSULTAR RESERVAS POR RANGO DE FECHAS DE INICIO ↓

module.exports = router