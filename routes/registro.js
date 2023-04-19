var express = require('express');
var router = express.Router();
const controller = require('../controllers/register.c')

router.post(
    '/',      function(req, res){

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