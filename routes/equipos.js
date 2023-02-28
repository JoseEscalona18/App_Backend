var express = require('express');
var router = express.Router();
const Mostrar_equipos = require('../src/Equipos.json');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(Mostrar_equipos);

});

router.post('/', (req,res) => {

  const { Serial , Nombre , Descripcion ,  Adquisicion , Estatus} = req.body
  if (Serial && Nombre && Descripcion && Adquisicion && Estatus){
    const nuevo_equipo =  {...req.body}
    res.json('Guardado correctamente')
    Mostrar_equipos.push(nuevo_equipo)
  } else {
    res.send('Peticion Erronea')
  }
});

module.exports = router;
