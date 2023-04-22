var express = require('express');
var router = express.Router();
const controller = require('../controllers/personal.c')
const checkAutenticacion = require('../middleware/verifytoken');
const checkRole = require('../middleware/verifyRole');


router.get('/', function(req, res, next) {
  res.render('aggpersonal', {Agregado: "Ingrese los datos"})
  });


///MOSTRAR TODOS LOS TECNICOS

router.get(
  '/listar/', /*checkAutenticacion,

  function(req, res, next){
    var roles = ["Admin","Solicitante"];
    checkRole(req, res, next, roles)
  },*/
  
  function(req, res) { controller
  controller.listarP()
    .then((resultado)=>{
      res.render('listarpersonal', {"JSON": JSON.stringify(resultado)});
    })
    .catch((err)=>{
      res.send(err)
    })
});

///MOSTRAR POR CEDULA
router.get(
  '/listar/:CI', /*checkAutenticacion,

  function(req, res, next){
    var roles = ["Admin","Solicitante"];
    checkRole(req, res, next, roles)
  },*/
  
  function(req, res) { 
    let personal = req.params.CI
    console.log(personal)
  controller.mostrarPersonal(personal)
    .then((resultado)=>{
      res.render('listarpersonal', {"JSON": JSON.stringify(resultado)});
    })
    .catch((err)=>{
      res.send(err)
    })
});

///MOSTRAR POR CARGO
router.get(
  '/listar/Cargo/:Cargo', /*checkAutenticacion,

  function(req, res, next){
    var roles = ["Admin","Solicitante"];
    checkRole(req, res, next, roles)
  },*/
  
  function(req, res) { 
    let personal = req.params.Cargo
    console.log(personal)
  controller.mostrarPersonalCargo(personal)
    .then((resultado)=>{
      res.render('listarpersonal', {"JSON": JSON.stringify(resultado)});
    })
    .catch((err)=>{
      res.send(err)
    })
});

///AGREGAR AL REGISTRO DE TECNICOS
router.post(
  '/', 
  /*checkAutenticacion,

  function(req, res, next){
    var roles = ["Admin"];
    checkRole(req, res, next, roles)
  },*/
  
  function(req, res){
    let personal = req.body;
  controller.registrar(personal)
    .then((resultado)=>{
      res.render('aggpersonal', {Agregado: "Agregado correctamente"});
    })
    .catch((err)=>{
      res.send(err)
    })
});

///ACTUALIZAR PERSONAL POR ID
router.put(
  '/:CI',  checkAutenticacion,

  function(req, res, next){
    var roles = ["Admin"];
    checkRole(req, res, next, roles)
  },
  
  function(req, res) {
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

///BORRAR POR CEDULA
router.delete(
  '/:CI', checkAutenticacion,

  function(req, res, next){
    var roles = ["Admin"];
    checkRole(req, res, next, roles)
  },
  
  function(req, res){
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
