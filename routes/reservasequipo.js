
///CREAR ROUTER
var express = require('express');
var router = express.Router();
var Mostrar_reservasEqui = require('../src/ReservasEquipos.json');

const pse = require('underscore')

//VARIABLES
var non = "No"
var pe = "No"
let aggre
var nanot= "No"
///DOS VARIABLES"NO", RECORDAR


//VER TODO
router.get('/', function(req, res, next) {
    res.send(Mostrar_reservasEqui)
});

module.exports = router;

// CONSULTAR LA RESERVA DE EQUIPO POR IDE

router.get('/:IDE', function(req, res){
    non = 'No'
    const CID  = req.params
    const SID = Number(CID.IDE)
  
    // RECORRE TODO EL JSON EN BUSQUEDA DE UN IDE IGUAL AL QUE SE COLOCÓ, SI NO ENCUENTRA NINGUNO MANDA UN MENSAJE ↓
    for (let f = 0; f < Mostrar_reservasEqui.length; f++){
  
      if (Mostrar_reservasEqui[f].IDE ==  SID){
        res.send(Mostrar_reservasEqui[f])
        non = 'Si'
      }
    }
    if(non == 'No') {
      res.send('No se encontraron reservas con ese IDE')
    }
});

//AGREGAR RESERVAS DE EQUIPO /// HAY QUE ACTUALIZAR LO QUE ESTA EN EQUIPOS IGUALMENTE, EL ESTATUS ESPECIFICAMENTE

router.post('/', (req,res) => {

    // AGREGA LOS DATOS QUE SE ESTAN MANDANDO DEL BODY EN LAS RESPECTIVAS CONSTANTES ↓
    const { IDE, Nombre_Solicitante, FechaInicio, FechaFin, HoraInicio, HoraFin, Motivo, Equipos} = req.body
  
    // CONDICION PARA VER SI TODO LOS CAMPOS ESTÁN LLEGANDO ↓
    if (IDE && Nombre_Solicitante && FechaInicio && FechaFin && HoraInicio && HoraFin && Motivo && Equipos) {
  
      if (Mostrar_reservasEqui.length == 0) {
  
        const nueva_reservaequi =  {...req.body}
        Mostrar_reservasEqui.push(nueva_reservaequi)
        res.send('Guardado correctamente')
      }else{
  
        for (i = 0; i < Mostrar_reservasEqui.length; i++){
  
          if (Mostrar_reservasEqui[i].IDE === IDE){
            res.send('No pueden haber 2 reservas de equipos con el mismo IDE')
            aggre = 'No'
          }else{
            aggre = 'Si'
          }
        }
  
      }
  
      if (aggre == 'Si'){
        // AGREGA LOS DATOS EN UNA NUEVA CONSTANTE ↓
  
        const nueva_reservaequi =  {...req.body}
        
        // AGREGA LOS DATOS EL JSON ↓
        Mostrar_reservasEqui.push(nueva_reservaequi)
        
        // MENSAJE QUE INDICA QUE SE GUARDÓ CORRECTAMENTE ↓
        res.send('Guardado correctamente')
      }
  
    } else {
      // EN CASO DE QUE ALGUN CAMPO NO ESTÉ COLOCADO, SE EJECUTA ESTA CONDICIÓN ↓
      res.status(500).send('Peticion Erronea')
    }
});

//BORRAR RESERVA DE EQUIPO POR IDE
router.delete('/:IDE', function(req, res){
    pe = 'No'
    const SCID  = req.params
    const PID = Number(SCID.IDE)
    pse.each(Mostrar_reservasEqui,(reservaequi, i) =>{
  
      if (reservaequi.IDE == PID){
        Mostrar_reservasEqui.splice(i,1)
        console.log('Eliminado correctamente')
        pe = 'Si'
        res.send(Mostrar_reservasEqui)
      }
    });
    if(non == 'No') {
      res.send('No se encontro ninguna de reserva equipo con ese IDD')
    }
});


///ACTUALIZAR RESERVAS DE EQUIPOS , !! HAY QUE ACTUALIZAR LO QUE ESTA EN EQUIPOS IGUALMENTE, EL ESTATUS ESPECIFICAMENTE
router.put('/:IDE', function(req, res){
  const RQID = req.params
  const GUID = Number(RQID.IDE)
  console.log(GUID);
  const { FechaInicio, FechaFin, HoraInicio, HoraFin, Motivo, Equipos} = req.body;
  if (FechaInicio && FechaFin && HoraInicio && HoraFin && Motivo && Equipos) {
    pse.each(Mostrar_reservasEqui, (reservaequi, i) => {
      if(reservaequi.IDE == GUID ){
        reservaequi.FechaInicio = FechaInicio;
        reservaequi.FechaFin = FechaFin;
        reservaequi.HoraInicio = HoraInicio;
        reservaequi.HoraFin = HoraFin;
        reservaequi.Motivo = Motivo;
        reservaequi.Equipos = Equipos;
      }
    });
    res.send(Mostrar_reservasEqui)
  }
  else{
    res.status(500).json({error: "Hubo un error"})
  }
});


router.get('/:FechaInicio', function(req, res){
    nanot = 'No'
    const sansini  = req.params
    const sansfinish = sansini
    console.log(sansfinish)
  
    // RECORRE TODO EL JSON EN BUSQUEDA DE UNA FECHA IGUAL AL QUE SE COLOCÓ, SI NO ENCUENTRA NINGUNO MANDA UN MENSAJE ↓
    for (let f = 0; f < Mostrar_reservasEqui.length; f++){
  
      if (Mostrar_reservasEqui[f].FechaInicio ==  sansfinish){
        res.send(Mostrar_reservasEqui[f])
        nanot = 'Si'
      }
    }
    if(nanot == 'No') {
      res.send('No se encontraron reservas con esa fecha de inicio')
    }
});