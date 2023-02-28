var express = require('express');
var router = express.Router();
const Mostrar_equipos = require('../src/Equipos.json');
let Agg
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(Mostrar_equipos);

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
console.log(Agg)
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
    res.send('Peticion Erronea')
  }
});

module.exports = router;
 