var express = require('express');
var router = express.Router();
const controller = require('../controllers/facturas.c.js')
const checkRole = require('../middleware/verifyRole')
const checkAutenticacion = require('../middleware/verifyToken')


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

///MOSTRAR POR ID
router.get(
    '/:ID', checkAutenticacion,

    function(req, res, next){
      var roles = ["Admin", "Personal"];
      checkRole(req, res, next, roles)
    },
    
    function(req, res) { 
      let factura = req.params.ID
      console.log(factura)
    controller.mostrarFactura(factura)
      .then((resultado)=>{
        res.send(resultado);
      })
      .catch((err)=>{
        res.send(err)
      })
});

///MOSTRAR POR CI_Admin
router.get(
    '/CIADMIN/:CI_Admin', checkAutenticacion,
  
    function(req, res, next){
      var roles = ["Admin", "Personal"];
      checkRole(req, res, next, roles)
    },
    
    function(req, res) { 
      let factura = req.params.CI_Admin
      console.log(factura)
    controller.mostrarFacturaCI(factura)
      .then((resultado)=>{
        res.send(resultado);
      })
      .catch((err)=>{
        res.send(err)
      })
  });


///INGRESAR UNA FACTURA

router.post(
  '/', checkAutenticacion,

  function(req, res, next){
    var roles = ["Admin"];
    checkRole(req, res, next, roles)
  },
  function(req, res){
    let factura = req.body;
  controller.crear(factura)
    .then((resultado)=>{
      res.send(resultado);
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
    let idF = req.params.Serial
    console.log(idF)
    let factura = req.body;
  controller.actualizar(factura,idF)
    .then((resultado)=>{
      res.send(resultado);
    })
    .catch((err)=>{
      res.send(err)
    })
});

///BORRAR EQUIPO POR ID

router.delete(
  '/:ID', checkAutenticacion,

  function(req, res, next){
    var roles = ["Admin"];
    checkRole(req, res, next, roles)
  },
  function(req, res){
    let factura = req.params.ID;
  controller.borrar(factura)
    .then((resultado)=>{
      res.send(resultado);
    })
    .catch((err)=>{
      res.send(err)
    })
});



//EXPORTAR EL ROUTER

module.exports = router;