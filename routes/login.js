var express = require('express');
var router = express.Router();
const controller = require('../controllers/login.c')

router.get('/', function(req, res, next) {
res.render('login')
});



router.post(
    '/',      
    function(req, res){
      console.log(req.body)
    let loguear = req.body;
    controller.consultar(loguear)
      .then((resultado)=>{
        
        res.send(resultado);
      })
      .catch((err)=>{
        res.send(err)
      })
});

module.exports = router;