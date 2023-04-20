var express = require('express');
var router = express.Router();
const controller = require('../controllers/login.c')

router.post(
    '/',      function(req, res){

    let loguear = req.body;
    loguear = +(Rol = "Personal")
    controller.consultar(loguear)
      .then((resultado)=>{
        res.send(resultado);
      })
      .catch((err)=>{
        res.send(err)
      })
});

module.exports = router;