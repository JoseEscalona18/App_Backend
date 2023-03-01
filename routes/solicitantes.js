var express = require('express');
var router = express.Router();
const sU = require('underscore')
let Aggs
var Ness = 'No'
var Esso = 'No'


var Mostrar_solicitantes = require('../src/Solicitantes.json');
console.log(Mostrar_solicitantes)

//VER TODO
router.get('/', function(req, res, next) {
    res.send(Mostrar_solicitantes)
  });

module.exports = router;

// CONSULTAR MEDIANTE CEDULA DE IDENTIDAD DEL SOLICITANTE, EJEM: http://localhost:3000/api/equipos/30302836 ↓
router.get('/:CiS', function(req, res){
    Ness = 'No'
    const CSCedula  = req.params
    const SCedulaS = Number(CSCedula.CiS)
  
    // RECORRE TODO EL JSON EN BUSQUEDA DE UN CI IGUAL AL QUE SE COLOCÓ, SI NO ENCUENTRA NINGUNO MANDA UN MENSAJE ↓
    for (let f = 0; f < Mostrar_solicitantes.length; f++){
  
      if (Mostrar_solicitantes[f].CiS ==  SCedulaS){
        res.send(Mostrar_solicitantes[f])
        Ness = 'Si'
      }
    }
    if(Ness == 'No') {
      res.send('No se encontraron solicitantes con ese numero de cedula')
    }
});

/// AGREGAR SOLICITANTES

router.post('/', (req,res) => {

    // AGREGA LOS DATOS QUE SE ESTAN MANDANDO DEL BODY EN LAS RESPECTIVAS CONSTANTES ↓
    const { Nombre, CiS, FechaN, DireccionC, NombreUS, contraS, NumT} = req.body
  
    // CONDICION PARA VER SI TODO LOS CAMPOS ESTÁN LLEGANDO ↓
    if (Nombre && CiS && FechaN && DireccionC && NombreUS && contraS && NumT) {
  
      if (Mostrar_solicitantes.length == 0) {
  
        const nuevo_solicitante =  {...req.body}
        Mostrar_solicitantes.push(nuevo_solicitante)
        res.send('Guardado correctamente')
      }else{
  
        for (i = 0; i < Mostrar_solicitantes.length; i++){
  
          if (Mostrar_solicitantes[i].CiS === CiS){
            res.send('No pueden haber 2 solicitantes con el mismo número de cedula')
            Aggs = 'No'
          }else{
            Aggs = 'Si'
          }
        }
  
      }
  
      if (Aggs == 'Si'){
        // AGREGA LOS DATOS EN UNA NUEVA CONSTANTE ↓
  
        const nuevo_solicitante =  {...req.body}
        
        // AGREGA LOS DATOS EL JSON ↓
        Mostrar_solicitantes.push(nuevo_solicitante)
        
        // MENSAJE QUE INDICA QUE SE GUARDÓ CORRECTAMENTE ↓
        res.send('Guardado correctamente')
      }
  
    } else {
      // EN CASO DE QUE ALGUN CAMPO NO ESTÉ COLOCADO, SE EJECUTA ESTA CONDICIÓN ↓
      res.status(500).send('Peticion Erronea')
    }
});

/// BORRAR POR CEDULA DE SOLICITANTE
router.delete('/:CiS', function(req, res){
    Esso = 'No'
    const Cedulita  = req.params
    const Cedulito = Number(Cedulita.CiS)
    sU.each(Mostrar_solicitantes,(solicitante, i) =>{
  
      if (solicitante.CiS == Cedulito){
        Mostrar_solicitantes.splice(i,1)
        console.log('Eliminado correctamente')
        Esso = 'Si'
        res.send(Mostrar_solicitantes)
      }
    });
    if(Ness == 'No') {
      res.send('No se encontraron solicitantes con ese numero de cedula ')
    }
  });

   /// ACTUALIZAR NombreUS, ContraS y NumT

   router.put('/:CiS', function(req, res){
    const QCiS = req.params
    const NaCiS = (QCiS.CiS)
    console.log(NaCiS);
    const { NombreUS, contraS, NumT} = req.body;
    if (NombreUS && ontraS && NumT) {
      sU.each(Mostrar_solicitantes, (solicitante, i) => {
        if(solicitante.CiS == NaCiS ){
            solicitante.NombreUS = NombreUS;
            solicitante.contraS = ContraS;
            solicitante.NumT = NumT
        }
      });
      res.send(Mostrar_solicitantes)
    }
    else{
      res.status(500).json({error: "Hubo un error"})
    }
  })