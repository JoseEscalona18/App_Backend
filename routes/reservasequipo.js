
///CREAR ROUTER
var express = require('express');
var router = express.Router();

const controller = require('../controllers/reservaequipo.c')

//VER TODO
router.get(
    '/',  function(req, res) { controller
    controller.listarREQ()
      .then((resultado)=>{
        res.send(resultado);
      })
      .catch((err)=>{
        res.send(err)
      })
});

///MOSTRAR POR ID
router.get(
  '/:ID', function(req, res) { 
    let reservasdeequipo = req.params.ID
    console.log(reservasdeequipo)
  controller.mostrarReservaEQ(reservasdeequipo)
    .then((resultado)=>{
      res.send(resultado);
    })
    .catch((err)=>{
      res.send(err)
    })
});

///AGREGAR AL REGISTRO DE RESERVAS
router.post(
  '/',      function(req, res){
    let reservadeequipo = req.body;
  controller.registrar(reservadeequipo)
    .then((resultado)=>{
      res.send(resultado);
    })
    .catch((err)=>{
      res.send(err)
    })
});

///ACTUALIZAR RESERVA POR ID
router.put(
  '/:ID',  function(req, res) {
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
  '/:ID', function(req, res){
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