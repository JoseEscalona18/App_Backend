///Anexar a app.js
var express = require('express');
var router = express.Router();
const controller = require('../controllers/espacios.c')
const checkAutenticacion = require('../middleware/verifytoken');
const checkRole = require('../middleware/verifyRole');

router.get('/', function(req, res, next) {
  res.render('aggespacios', {Agregado: "Ingrese los datos"})
});

///MOSTRAR TODOS LOS ESPACIOS

router.get(
    '/listar/', /*checkAutenticacion,

    function(req, res, next){
      var roles = ["Admin", "Personal","Solicitante"];
      checkRole(req, res, next, roles)
    },*/
  
    function(req, res) { controller
    controller.listar()
      .then((resultado)=>{
        res.render('listarespacios', {"JSON": JSON.stringify(resultado)});
      })
      .catch((err)=>{
        res.send(err)
      })
});

///MOSTRAR POR ID
router.get(
    '/listar/:ID_Espacio', /*checkAutenticacion,

    function(req, res, next){
      var roles = ["Admin", "Personal","Solicitante"];
      checkRole(req, res, next, roles)
    },*/
    
    function(req, res) { 
      let espacio = req.params.ID_Espacio
      console.log(espacio)
    controller.mostrarEspacio(espacio)
      .then((resultado)=>{
        res.render('listarespacios', {"JSON": JSON.stringify(resultado)});
      })
      .catch((err)=>{
        res.send(err)
      })
});

///AGREGAR ESPACIOS

router.post(
    '/', /*checkAutenticacion,

    function(req, res, next){
      var roles = ["Admin", "Personal"];
      checkRole(req, res, next, roles)
    },*/
    
    function(req, res){
      let espacio = req.body;
    controller.crear(espacio)
      .then((resultado)=>{
        res.render('aggespacios', {Agregado: "Agregado correctamente"});
      })
      .catch((err)=>{
        res.send(err)
      })
});

///ACTUALIZAR ESPACIO POR ID
router.put(
    '/:ID_Espacio', checkAutenticacion,

    function(req, res, next){
      var roles = ["Admin", "Personal"];
      checkRole(req, res, next, roles)
    },
    
    function(req, res) {
      let ID_Espacio = req.params.ID_Espacio
      console.log(ID_Espacio)
      let espacio = req.body;
    controller.actualizar(espacio,ID_Espacio)
      .then((resultado)=>{
        res.send(resultado);
      })
      .catch((err)=>{
        res.send(err)
      })
});

///BORRAR ESPACIO POR ID

router.delete(
    '/:ID_Espacio', checkAutenticacion,

    function(req, res, next){
      var roles = ["Admin"];
      checkRole(req, res, next, roles)
    },
    
    function(req, res){
      let espacio = req.params.ID_Espacio;
    controller.borrar(espacio)
      .then((resultado)=>{
        res.send(resultado);
      })
      .catch((err)=>{
        res.send(err)
      })
});

module.exports = router;