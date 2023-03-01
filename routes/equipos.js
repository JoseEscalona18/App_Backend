var express = require('express');
var router = express.Router();
const Mostrar_equipos = require('../src/Equipos.json');
let Agg
const controller = require('../controllers/equipos.c')
const _ = require('underscore')

// CONSULTA TODOS LOS EQUIPOS ↓
router.get('/',controller.consulta);

// CONSULTA MEDIANTE UN PARAMS SERIALES ESPECIFICOS, EJEM: http://localhost:3000/api/equipos/123456 ↓
router.get('/:Serial',controller.consultaSerial);


router.post('/', (req,res) => {

  // AGREGA LOS DATOS QUE SE ESTAN MANDANDO DEL BODY EN LAS RESPECTIVAS CONSTANTES ↓
  const { Serial , Nombre , Descripcion ,  Adquisicion , Estatus} = req.body

  // CONDICION PARA VER SI TODO LOS CAMPOS ESTÁN LLEGANDO ↓
  if (Serial && Nombre && Descripcion && Adquisicion && Estatus) {

    if (Mostrar_equipos.length == 0) {

      const nuevo_equipo =  {...req.body}
      Mostrar_equipos.push(nuevo_equipo)
      res.send('Guardado correctamente')
    }else{

      for (i = 0; i < Mostrar_equipos.length; i++){

        if (Mostrar_equipos[i].Serial === Serial){
          res.send('No puede haber Seriales duplicados')
          Agg = 'No'
        }else{
          Agg = 'Si'
        }
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

//// ELIMINAR POR SERIAL

router.delete('/:Serial', function(req, res){
  el = 'No'
  const ECSerial  = req.params
  const ESSerial = Number(ECSerial.Serial)
  _.each(Mostrar_equipos,(equipo, i) =>{

    if (equipo.Serial == ESSerial){
      Mostrar_equipos.splice(i,1)
      console.log('Eliminado correctamente')
      el = 'Si'
      res.send(Mostrar_equipos)
    }
  });
  if(con == 'No') {
    res.send('No se encontraron equipos con ese Serial')
  }
});

//// ACTUALIZAR POR SERIAL

router.put('/:Serial', function(req, res){
  const MCSerial= req.params
  const MSSerial = Number(MCSerial.Serial)
  console.log(MSSerial);
  const { Nombre , Descripcion, Adquisicion, Estatus} = req.body;
  if (Nombre && Descripcion && Adquisicion && Estatus) {
    _.each(Mostrar_equipos, (equipo, i) => {
      if(equipo.Serial == MSSerial ){
        equipo.Nombre = Nombre;
        equipo.Descripcion = Descripcion;
        equipo.Adquisicion = Adquisicion
        equipo.Estatus = Estatus
      }
    });
    res.send(Mostrar_equipos)
  }
  else{
    res.status(500).json({error: "Hubo un error"})
  }
})

//BORRAR LOS EQUIPOS POR SERIAL ↓
router.delete('/:Serial',controller.eliminarEquipo);


//ACTUALIZAR EQUIPOS POR SERIAL ↓
router.put('/:Serial',controller.editarEquipo);

module.exports = router;
 