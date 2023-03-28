///Anexar a app.js
var express = require('express');
var router = express.Router();
const controller = require('../controllers/solicitantes.c')


///MOSTRAR TODOS LOS ESPACIOS

router.get(
    '/',  function(req, res) { controller
    controller.listarS()
      .then((resultado)=>{
        res.send(resultado);
      })
      .catch((err)=>{
        res.send(err)
      })
});

///MOSTRAR POR CEDULA
router.get(
  '/:CI', function(req, res) { 
    let solicitante = req.params.CI
    console.log(solicitante)
  controller.mostrarSolicitante(solicitante)
    .then((resultado)=>{
      res.send(resultado);
    })
    .catch((err)=>{
      res.send(err)
    })
});

///AGREGAR AL REGISTRO DE SOLICITANTES
router.post(
  '/',      function(req, res){
    let solicitante = req.body;
  controller.registrar(solicitante)
    .then((resultado)=>{
      res.send(resultado);
    })
    .catch((err)=>{
      res.send(err)
    })
});

///ACTUALIZAR ESPACIO POR CI
router.put(
  '/:CI',  function(req, res) {
    let CIs = req.params.CI
    console.log(CIs)
    let solicitante = req.body;
  controller.actualizar(solicitante,CIs)
    .then((resultado)=>{
      res.send(resultado);
    })
    .catch((err)=>{
      res.send(err)
    })
});

///BORRAR ESPACIO POR CI
router.delete(
  '/:CI', function(req, res){
    let solicitante = req.params.CI;
  controller.borrar(solicitante)
    .then((resultado)=>{
      res.send(resultado);
    })
    .catch((err)=>{
      res.send(err)
    })
});

module.exports = router;