var express = require('express');
var router = express.Router();
const controller = require('../controllers/register.c')
const checkAutenticacion = require('../middleware/verifytoken');
const checkRole = require('../middleware/verifyRole');

router.get('/', function(req, res, next) {
  res.render('registrar')
  });

router.get(
  '/listar/',/* checkAutenticacion,

  function(req, res, next){
    var roles = ["Admin"];
    checkRole(req, res, next, roles)
  },*/
  
  function(req, res) { controller
  controller.listarAdmin()
    .then((resultado)=>{
      res.render('listar', {"JSON": JSON.stringify(resultado)});
    })
    .catch((err)=>{
      res.send(err)
    })
});

router.post(
    '/', checkAutenticacion,

    function(req, res, next){
      var roles = ["Admin"];
      checkRole(req, res, next, roles)
    },
    
    function(req, res){

    let register = req.body;
    controller.registrar(register)
      .then((resultado)=>{
        res.send(resultado);
      })
      .catch((err)=>{
        res.send(err)
      })
});

module.exports = router;
