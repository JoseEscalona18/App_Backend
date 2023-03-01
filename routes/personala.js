///Anexar a app.js
var express = require('express');
var router = express.Router();
var Mostrar_personal = require('../src/Personal.json');
console.log(Mostrar_personal)

//VER TODO
router.get('/', function(req, res, next) {
    res.send(Mostrar_personal)
  });

module.exports = router;
