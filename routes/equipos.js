var express = require('express');
var router = express.Router();
const controller = require('../controllers/equipos.c')
const checkRole = require('../middleware/verifyRole')
const checkAutenticacion = require('../middleware/verifytoken')

router.get('/', function(req, res, next) {
  res.render('aggequipos', {Agregado: "Ingrese los datos"})
  });

///MOSTRAR TODO
router.get(
   '/listar/', checkAutenticacion,

    function(req, res, next){
    var roles = ["Admin", "Personal","Solicitante"];
    checkRole(req, res, next, roles)
    },
    
    function(req, res) { controller
    controller.listar()
      .then((resultado)=>{
        res.render('listarequipos', {"JSON": JSON.stringify(resultado)});
      })
      .catch((err)=>{
        res.send(err)
      })
});

///MOSTRAR POR SERIAL
router.get(
    '/listar/:Serial', checkAutenticacion,

    function(req, res, next){
      var roles = ["Admin", "Personal","Solicitante"];
      checkRole(req, res, next, roles)
    },
    
    function(req, res) { 
      let equipo = req.params.Serial
      console.log(equipo)
    controller.mostrarEquipo(equipo)
      .then((resultado)=>{
        res.render('listarequipos', {"JSON": JSON.stringify(resultado)});
      })
      .catch((err)=>{
        res.send(err)
      })
});

///MOSTRAR POR ESTATUS
router.get(
  '/listar/Estatus/:Estatus', checkAutenticacion,

    function(req, res, next){
    var roles = ["Admin", "Personal","Solicitante"];
    checkRole(req, res, next, roles)
    },
    function(req, res) { 
    let equipo = req.params.Estatus
    console.log(equipo)
    if (equipo == "Disponible" || equipo == "Ocupado" || equipo == "disponible" || equipo == "ocupado"){
      controller.mostrarEquipoEstatus(equipo)
      .then((resultado)=>{
        res.render('listarequipos', {"JSON": JSON.stringify(resultado)});
      })
      .catch((err)=>{
        res.send(err)
      })

    } else
      res.send("Estatus Erroneo")
    
});

///INGRESAR UN EQUIPO

router.post(
  '/',checkAutenticacion,

  function(req, res, next){
    var roles = ["Admin", "Personal"];
    checkRole(req, res, next, roles)
  },
  function(req, res){
    let equipo = req.body;
  controller.crear(equipo)
    .then((resultado)=>{
      res.render('aggequipos', {Agregado: "Agregado correctamente"});
    })
    .catch((err)=>{
      res.send(err)
    })
});

///ACTUALIZAR EQUIPO POR SERIAL

router.put(
  '/:Serial', checkAutenticacion,

  function(req, res, next){
    var roles = ["Admin", "Personal"];
    checkRole(req, res, next, roles)
  },

  function(req, res, next) {
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
  '/:Serial', checkAutenticacion,

  function(req, res, next){
    var roles = ["Admin"];
    checkRole(req, res, next, roles)
  },
  function(req, res){
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
