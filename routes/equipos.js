var express = require('express');
var router = express.Router();
const controller = require('../controllers/equipos.c')
const checkauth = require('../middleware/verificar')
const checkroleauth = require('../middleware/checkrolau')


///MOSTRAR TODO
router.get(
    '/',  function(req, res) { controller
    controller.listar()
      .then((resultado)=>{
        res.send(resultado);
      })
      .catch((err)=>{
        res.send(err)
      })
});

///MOSTRAR POR SERIAL
router.get(
    '/:Serial', function(req, res) { 
      let equipo = req.params.Serial
      console.log(equipo)
    controller.mostrarEquipo(equipo)
      .then((resultado)=>{
        res.send(resultado);
      })
      .catch((err)=>{
        res.send(err)
      })
});

///MOSTRAR POR ESTATUS
router.get(
  '/Estatus/:Estatus', function(req, res) { 
    let equipo = req.params.Estatus
    console.log(equipo)
    if (equipo == "Disponible" || equipo == "Ocupado" || equipo == "disponible" || equipo == "ocupado"){
      controller.mostrarEquipoEstatus(equipo)
      .then((resultado)=>{
        res.send(resultado);
      })
      .catch((err)=>{
        res.send(err)
      })

    } else
      res.send("Estatus Erroneo")
    
});

///INGRESAR UN EQUIPO

router.post(
  '/',      function(req, res){
    let equipo = req.body;
  controller.crear(equipo)
    .then((resultado)=>{
      res.send(resultado);
    })
    .catch((err)=>{
      res.send(err)
    })
});

///ACTUALIZAR EQUIPO POR SERIAL

router.put(
  '/:Serial',  function(req, res, next) {
    let SerialE = req.params.Serial
    console.log(SerialE)
    let equipo = req.body;
  controller.actualizar(equipo,SerialE)
    .then((resultado)=>{
      res.send(resultado);
    })
    .catch((err)=>{
      res.send(err)
    })
});

///BORRAR EQUIPO POR SERIAL

router.delete(
  '/:Serial',      function(req, res){
    let equipo = req.params.Serial;
  controller.borrar(equipo)
    .then((resultado)=>{
      res.send(resultado);
    })
    .catch((err)=>{
      res.send(err)
    })
});



//EXPORTAR EL ROUTER

module.exports = router;
