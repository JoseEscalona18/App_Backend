///Anexar a app.js
var express = require('express');
var router = express.Router();
const controller = require('../controllers/solicitantes.c')
const checkAutenticacion = require('../middleware/verifytoken');
const checkRole = require('../middleware/verifyRole');

///MOSTRAR TODOS LOS ESPACIOS

router.get(
    '/', checkAutenticacion,

    function(req, res, next){
      var roles = ["Admin", "Personal"];
      checkRole(req, res, next, roles)
    },
    
    function(req, res) { controller
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
  '/:CI', checkAutenticacion,

  function(req, res, next){
    var roles = ["Admin", "Personal"];
    checkRole(req, res, next, roles)
  },
  
  function(req, res) { 
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
  '/', checkAutenticacion,

  function(req, res, next){
    var roles = ["Admin", "Personal"];
    checkRole(req, res, next, roles)
  },
  
  function(req, res){
    let solicitante = req.body;
  controller.registrar(solicitante)
    .then((resultado)=>{
      res.send(resultado);
    })
    .catch((err)=>{
      res.send(err)
    })
});

///ACTUALIZAR SOLICITANTE POR CI
router.put(
  '/:CI', checkAutenticacion,

  function(req, res, next){
    var roles = ["Admin", "Personal"];
    checkRole(req, res, next, roles)
  },
  
  function(req, res) {
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

///BORRAR SOLICITANTE POR CI
router.delete(
  '/:CI', checkAutenticacion,

  function(req, res, next){
    var roles = ["Admin"];
    checkRole(req, res, next, roles)
  },
  
  function(req, res){
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