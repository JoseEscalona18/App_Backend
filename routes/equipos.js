var express = require('express');
var router = express.Router();
const Mostrar_equipos = require('../src/Equipos.json');
let Agg
let con = 'No'

// CONSULTA TODOS LOS EQUIPOS ↓
router.get('/', function(req, res){
  res.send(Mostrar_equipos)
});

// CONSULTA MEDIANTE UN PARAMS SERIALES ESPECIFICOS, EJEM: http://localhost:3000/api/equipos/123456 ↓
router.get('/:Serial', function(req, res){
  con = 'No'
  const CSerial  = req.params
  const SSerial = Number(CSerial.Serial)

  // RECORRE TODO EL JSON EN BUSQUEDA DE UN SERIAL IGUAL AL QUE SE COLOCÓ, SI NO ENCUENTRA NINGUNO MANDA UN MENSAJE ↓
  for (let f = 0; f < Mostrar_equipos.length; f++){

    if (Mostrar_equipos[f].Serial ==  SSerial){
      res.send(Mostrar_equipos[f])
      con = 'Si'
    }
  }
  if(con == 'No') {
    res.send('No se encontraron equipos con ese Serial')
  }
});

router.post('/', (req,res) => {

  // AGREGA LOS DATOS QUE SE ESTAN MANDANDO DEL BODY EN LAS RESPECTIVAS CONSTANTES ↓
  const { Serial , Nombre , Descripcion ,  Adquisicion , Estatus} = req.body

  // CONDICION PARA VER SI TODO LOS CAMPOS ESTÁN LLEGANDO ↓
  if (Serial && Nombre && Descripcion && Adquisicion && Estatus) {

    for (i = 0; i < Mostrar_equipos.length; i++){

      if (Mostrar_equipos[i].Serial === Serial){
        res.send('No puede haber Seriales duplicados')
        Agg = 'No'
      }else{
        Agg = 'Si'
      }
    }
    if (Agg == 'Si'){
      // AGREGA LOS DATOS EN UNA NUEVA CONSTANTE ↓

      const nuevo_equipo =  {...req.body}
      
      // AGREGA LOS DATOS EL JSON ↓
      Mostrar_equipos.push(nuevo_equipo)
      
      // MENSAJE QUE INDICA QUE SE GUARDÓ CORRECTAMENTE ↓
      res.send('Guardado correctamente')
    }

  } else {
    // EN CASO DE QUE ALGUN CAMPO NO ESTÉ COLOCADO, SE EJECUTA ESTA CONDICIÓN ↓
    res.status(500).send('Peticion Erronea')
  }
});

module.exports = router;
 