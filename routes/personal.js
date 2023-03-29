var express = require('express');
var router = express.Router();
const controller = require('../controllers/personal.c')

///MOSTRAR TODOS LOS TECNICOS

router.get(
  '/',  function(req, res) { controller
  controller.listarP()
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
    let personal = req.params.CI
    console.log(personal)
  controller.mostrarPersonal(personal)
    .then((resultado)=>{
      res.send(resultado);
    })
    .catch((err)=>{
      res.send(err)
    })
});

///MOSTRAR POR CARGO
router.get(
  '/Cargo/:Cargo', function(req, res) { 
    let personal = req.params.Cargo
    console.log(personal)
  controller.mostrarPersonalCargo(personal)
    .then((resultado)=>{
      res.send(resultado);
    })
    .catch((err)=>{
      res.send(err)
    })
});

///AGREGAR AL REGISTRO DE TECNICOS
router.post(
  '/',      function(req, res){
    let personal = req.body;
  controller.registrar(personal)
    .then((resultado)=>{
      res.send(resultado);
    })
    .catch((err)=>{
      res.send(err)
    })
});

///ACTUALIZAR ESPACIO POR ID
router.put(
  '/:CI',  function(req, res) {
    let CIp = req.params.CI
    console.log(CIp)
    let personal = req.body;
  controller.actualizar(personal,CIp)
    .then((resultado)=>{
      res.send(resultado);
    })
    .catch((err)=>{
      res.send(err)
    })
});


router.delete(
  '/:CI', function(req, res){
    let personal = req.params.CI;
  controller.borrar(personal)
    .then((resultado)=>{
      res.send(resultado);
    })
    .catch((err)=>{
      res.send(err)
    })
});



module.exports = router;
