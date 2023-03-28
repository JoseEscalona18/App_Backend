///CREAR ROUTER
var express = require('express');
var router = express.Router();

const controller = require('../controllers/reservaespacio.c')


////VER TODAS LAS RESERVAS DE ESPACIOS
router.get(
    '/',  function(req, res) { controller
    controller.listarRES()
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
      let reservadeespacio = req.params.ID
      console.log(reservadeespacio)
    controller.mostrarReservaES(reservadeespacio)
      .then((resultado)=>{
        res.send(resultado);
      })
      .catch((err)=>{
        res.send(err)
      })
  });

///AGREGAR AL REGISTRO DE RESERVAS DE ESPACIOS
router.post(
    '/',      function(req, res){
      let reservadeespacio = req.body;
    controller.registrar(reservadeespacio)
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

router.delete(
    '/:ID', function(req, res){
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