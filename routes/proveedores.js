var express = require('express');
var router = express.Router();
const controller = require('../controllers/proveedores.c.js')
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

///MOSTRAR POR CIF
router.get(
    '/:CIF', checkAutenticacion,

    function(req, res, next){
      var roles = ["Admin", "Personal"];
      checkRole(req, res, next, roles)
    },
    
    function(req, res) { 
      let proveedor = req.params.CIF
      console.log(proveedor)
    controller.mostrarProveedorC(proveedor)
      .then((resultado)=>{
        res.send(resultado);
      })
      .catch((err)=>{
        res.send(err)
      })
});

//// MOSTRAR POR NUM DE MOVIL

router.get(
    '/Num/:NumeroM', checkAutenticacion,

    function(req, res, next){
      var roles = ["Admin", "Personal"];
      checkRole(req, res, next, roles)
    },
    
    function(req, res) { 
      let proveedor = req.params.NumeroM
      console.log(proveedor)
    controller.mostrarNumM(proveedor)
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
      let proveedor = req.params.CI_Admin
      console.log(proveedor)
    controller.mostrarProveedorC(proveedor)
      .then((resultado)=>{
        res.send(resultado);
      })
      .catch((err)=>{
        res.send(err)
      })
  });

  ///MOSTRAR POR NOMBRE

  router.get(
    '/Nombre/:Empresa', checkAutenticacion,
  
    function(req, res, next){
      var roles = ["Admin","Solicitante"];
      checkRole(req, res, next, roles)
    },
    
    function(req, res) { 
      let proveedor = req.params.Empresa
      console.log(proveedor)
    controller.mostrarProvNombre(proveedor)
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
    let proveedor = req.body;
  controller.crear(proveedor)
    .then((resultado)=>{
      res.send(resultado);
    })
    .catch((err)=>{
      res.send(err)
    })
});

///ACTUALIZAR EQUIPO POR SERIAL

router.put(
  '/:CIF', checkAutenticacion,

  function(req, res, next){
    var roles = ["Admin"];
    checkRole(req, res, next, roles)
  },

  function(req, res, next) {
    let Scif = req.params.CIF
    console.log(Scif)
    let proveedor = req.body;
  controller.actualizar(proveedor,Scif)
    .then((resultado)=>{
      res.send(resultado);
    })
    .catch((err)=>{
      res.send(err)
    })
});

///BORRAR PERSONAL POR CIF

router.delete(
  '/:CIF', checkAutenticacion,

  function(req, res, next){
    var roles = ["Admin"];
    checkRole(req, res, next, roles)
  },
  function(req, res){
    let proveedor = req.params.CIF;
  controller.borrar(proveedor)
    .then((resultado)=>{
      res.send(resultado);
    })
    .catch((err)=>{
      res.send(err)
    })
});


//EXPORTAR EL ROUTER

module.exports = router;