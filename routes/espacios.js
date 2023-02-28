var express = require('express');
var router = express.Router();
var MostEspacios = require('../src/Espacios.json');
console.log(MostEspacios)

router.get('/', function(req, res, next) {
    res.send(MostEspacios)
  });

module.exports = router;