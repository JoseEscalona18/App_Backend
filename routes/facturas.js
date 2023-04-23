var express = require('express');
var router = express.Router();
const controller = require('../controllers/facturas.c.js')
const checkRole = require('../middleware/verifyRole')
const checkAutenticacion = require('../middleware/verifytoken')

router.get('/', function(req, res, next) {
  res.render('aggfacturas', {Agregado: "Ingrese los datos"})
});

///MOSTRAR TODO
router.get(
   '/listar/', checkAutenticacion,

    function(req, res, next){
    var roles = ["Admin", "Personal"];
    checkRole(req, res, next, roles)
    },
    
    function(req, res) { controller
    controller.listar()
      .then((resultado)=>{
        res.render('listarfacturas', {"JSON": JSON.stringify(resultado)});
      })
      .catch((err)=>{
        res.send(err)
      })
});

///MOSTRAR POR ID
router.get(
    '/listar/:ID', checkAutenticacion,

    function(req, res, next){
      var roles = ["Admin", "Personal"];
      checkRole(req, res, next, roles)
    },
    
    function(req, res) { 
      let factura = req.params.ID
      console.log(factura)
    controller.mostrarFactura(factura)
      .then((resultado)=>{
        res.render('listarfacturas', {"JSON": JSON.stringify(resultado)});
      })
      .catch((err)=>{
        res.send(err)
      })
});

///MOSTRAR POR CI_Admin
router.get(
    '/listar/CIADMIN/:CI_Admin', checkAutenticacion,
  
    function(req, res, next){
      var roles = ["Admin", "Personal"];
      checkRole(req, res, next, roles)
    },
    
    function(req, res) { 
      let factura = req.params.CI_Admin
      console.log(factura)
    controller.mostrarFacturaCI(factura)
      .then((resultado)=>{
        res.render('listarfacturas', {"JSON": JSON.stringify(resultado)});
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
    let idF = req.params.ID
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

///MOSTRAR POR FECHA
router.get(
  '/listar/Fecha/:FechaC', checkAutenticacion,

  function(req, res, next){
    var roles = ["Admin", "Personal"];
    checkRole(req, res, next, roles)
  },
  
  function(req, res) { 
    let factura = req.params.FechaC
    console.log(factura)
  controller.CFechaCompra(factura)
    .then((resultado)=>{
      res.render('listarfacturas', {"JSON": JSON.stringify(resultado)});
    })
    .catch((err)=>{
      res.send(err)
    })
});

///MOSTRAR POR RANGO DE FECHAS
router.get(
  '/listar/Fecha1/:FechaF1/Fecha2/:FechaF2', checkAutenticacion,

  function(req, res, next){
    var roles = ["Admin", "Personal", "Solicitante"];
    checkRole(req, res, next, roles)
  },
  
  function(req, res) { 
    let factura1 = req.params.FechaF1
    let factura2 = req.params.FechaF2
    console.log(factura1)
    console.log(factura2)
  controller.mostrarFRangoFecha(factura1, factura2)
    .then((resultado)=>{
      res.render('listarfacturas', {"JSON": JSON.stringify(resultado)});
    })
    .catch((err)=>{
      res.send(err)
    })
});


//EXPORTAR EL ROUTER

module.exports = router;