var express = require('express');
var router = express.Router();
const Mostrar_equipos = require('../src/Equipos.json');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(Mostrar_equipos);

});

module.exports = router;
