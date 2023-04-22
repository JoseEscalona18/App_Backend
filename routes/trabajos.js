var express = require('express');
var router = express.Router();
const controller = require('../controllers/trabajos.c.js')
const checkRole = require('../middleware/verifyRole')
const checkAutenticacion = require('../middleware/verifytoken')


///MOSTRAR TODO
router.get(
   '/', checkAutenticacion,

    function(req, res, next){
    var roles = ["Admin", "Personal"];
    checkRole(req, res, next, roles)
    },
    
    function(req, res) { controller
    controller.listar()
      .then((resultado)=>{
        res.send(resultado);
      })
      .catch((err)=>{
        res.send(err)
      })
});

///MOSTRAR POR ID_TRABAJO
router.get(
    '/:ID_Trabajo', checkAutenticacion,

    function(req, res, next){
      var roles = ["Admin", "Personal"];
      checkRole(req, res, next, roles)
    },
    
    function(req, res) { 
      let trabajo = req.params.ID_Trabajo
      console.log(trabajo)
    controller.mostrar(trabajo)
      .then((resultado)=>{
        res.send(resultado);
      })
      .catch((err)=>{
        res.send(err)
      })
});

//// MOSTRAR POR ID_Reserva de Eq

router.get(
    '/ReservaEq/:ID_ReservaEq', checkAutenticacion,

    function(req, res, next){
      var roles = ["Admin", "Personal"];
      checkRole(req, res, next, roles)
    },
    
    function(req, res) { 
      let trabajo = req.params.ID_ReservaEq
      console.log(trabajo)
    controller.mostrarporResEQ(trabajo)
      .then((resultado)=>{
        res.send(resultado);
      })
      .catch((err)=>{
        res.send(err)
      })
});




///INGRESAR UN TRABAJO

router.post(
  '/', checkAutenticacion,

  function(req, res, next){
    var roles = ["Admin"];
    checkRole(req, res, next, roles)
  },
  function(req, res){
    let trabajo = req.body;
  controller.crear(trabajo)
    .then((resultado)=>{
      res.send(resultado);
    })
    .catch((err)=>{
      res.send(err)
    })
});

///ACTUALIZAR TRABAJO POR ID_TRABAJO

router.put(
  '/:ID_Trabajo', checkAutenticacion,

  function(req, res, next){
    var roles = ["Admin"];
    checkRole(req, res, next, roles)
  },

  function(req, res, next) {
    let IDT = req.params.ID_Trabajo
    console.log(IDT)
    let trabajo = req.body;
  controller.actualizar(trabajo,IDT)
    .then((resultado)=>{
      res.send(resultado);
    })
    .catch((err)=>{
      res.send(err)
    })
});

///BORRAR TRABAJO POR ID_Trabajo

router.delete(
  '/:ID_Trabajo', checkAutenticacion,

  function(req, res, next){
    var roles = ["Admin"];
    checkRole(req, res, next, roles)
  },
  function(req, res){
    let trabajo = req.params.ID_Trabajo;
  controller.borrar(trabajo)
    .then((resultado)=>{
      res.send(resultado);
    })
    .catch((err)=>{
      res.send(err)
    })
});


//EXPORTAR EL ROUTER

module.exports = router;