///CREAR ROUTER
var express = require('express');
var router = express.Router();
var Mostrar_reservasEspacio= require('../src/ReservasEspacios.json');
console.log(Mostrar_reservasEspacio)

const pos = require('underscore')

//VARIABLES
var none= "No"
var pedekratos = "No"
let aggria
var nono = "No"
///DOS VARIABLES "NO", RECORDAR

//VER TODO
router.get('/', function(req, res, next) {
    res.send(Mostrar_reservasEspacio)
});

module.exports = router;

// CONSULTAR LA RESERVA DE EQUIPO POR IDD

router.get('/:IDD', function(req, res){
    none = 'No'
    const SANS  = req.params
    const SANSITO = Number(SANS.IDD)
  
    // RECORRE TODO EL JSON EN BUSQUEDA DE UN IDD IGUAL AL QUE SE COLOCÓ, SI NO ENCUENTRA NINGUNO MANDA UN MENSAJE ↓
    for (let f = 0; f < Mostrar_reservasEspacio.length; f++){
  
      if (Mostrar_reservasEspacio[f].IDD ==  SANSITO){
        res.send(Mostrar_reservasEspacio[f])
        none = 'Si'
      }
    }
    if(none == 'No') {
      res.send('No se encontraron reservas con ese IDD')
    }
});


//AGREGAR RESERVAS DE EQUIPO /// HAY QUE ACTUALIZAR LO QUE ESTA EN EQUIPOS IGUALMENTE, EL ESTATUS ESPECIFICAMENTE

router.post('/', (req,res) => {

    // AGREGA LOS DATOS QUE SE ESTAN MANDANDO DEL BODY EN LAS RESPECTIVAS CONSTANTES ↓
    const { IDD, Nombre_Solicitante, FechaInicio, FechaFin, HoraInicio, HoraFin, Motivo, Tecnico, PersonasEspacio} = req.body
  
    // CONDICION PARA VER SI TODO LOS CAMPOS ESTÁN LLEGANDO ↓
    if (IDD && Nombre_Solicitante && FechaInicio && FechaFin && HoraInicio && HoraFin && Motivo && Tecnico && PersonasEspacio) {
  
      if (Mostrar_reservasEspacio.length == 0) {
  
        const nueva_reservaespa =  {...req.body}
        Mostrar_reservasEspacio.push(nueva_reservaespa)
        res.send('Guardado correctamente')
      }else{
  
        for (i = 0; i < Mostrar_reservasEspacio.length; i++){
  
          if (Mostrar_reservasEspacio[i].IDD === IDD){
            res.send('No pueden haber 2 reservas de equipos con el mismo IDD')
            aggria = 'No'
          }else{
            aggria = 'Si'
          }
        }
  
      }
  
      if (aggria == 'Si'){
        // AGREGA LOS DATOS EN UNA NUEVA CONSTANTE ↓
  
        const nueva_reservaespa =  {...req.body}
        
        // AGREGA LOS DATOS EL JSON ↓
        Mostrar_reservasEspacio.push(nueva_reservaespa)
        
        // MENSAJE QUE INDICA QUE SE GUARDÓ CORRECTAMENTE ↓
        res.send('Guardado correctamente')
      }
  
    } else {
      // EN CASO DE QUE ALGUN CAMPO NO ESTÉ COLOCADO, SE EJECUTA ESTA CONDICIÓN ↓
      res.status(500).send('Peticion Erronea')
    }
});

///BORRAR RESERVA DE ESPACIO POR IDD
router.delete('/:IDD', function(req, res){
    pedekratos = 'No'
    const SIDD  = req.params
    const IDDA = Number(SIDD.IDD)
    pos.each(Mostrar_reservasEspacio,(reservaespa, i) =>{
  
      if (reservaespa.IDD == IDDA){
        Mostrar_reservasEspacio.splice(i,1)
        console.log('Eliminado correctamente')
        pedekratos = 'Si'
        res.send(Mostrar_reservasEspacio)
      }
    });
    if(none == 'No') {
      res.send('No se encontro ninguna reserva de espacio con ese numero de IDD')
    }
});

//ACTUALIZAR RESERVA DE ESPACIO POR IDD // HAY QUE ACTUALIZAR LO QUE ESTA EN ESPACIOS Y PERSONAL IGUALMENTE, EL ESTATUS ESPECIFICAMENTE

router.put('/:IDD', function(req, res){
    const REQUIEM = req.params
    const GIDDO = (REQUIEM.IDD)
    console.log(GIDDO);
    const {Nombre_Solicitante, FechaInicio, FechaFin, HoraInicio, HoraFin, Motivo, Tecnico, PersonasEspacio } = req.body;
    if (Nombre_Solicitante && FechaInicio && FechaFin && HoraInicio && HoraFin && Motivo && Tecnico && PersonasEspacio) {
      pos.each(Mostrar_reservasEspacio, (reservaespa, i) => {
        if(reservaespa.IDD == GIDDO ){
            reservaespa.Nombre_Solicitante = Nombre_Solicitante;
            reservaespa.FechaInicio = FechaInicio;
            reservaespa.FechaFin = FechaFin;
            reservaespa.HoraInicio = HoraInicio;
            reservaespa.HoraFin = HoraFin;
            reservaespa.Motivo = Motivo;
            reservaespa.Tecnico = Tecnico;
            reservaespa.PersonasEspacio = PersonasEspacio;
        }
      });
      res.send(Mostrar_reservasEspacio)
    }
    else{
      res.status(500).json({error: "Hubo un error"})
    }
});

///CONSULTAR RESERVAS POR FECHAS DE INICIO

router.get('/:FechaInicio', function(req, res){
    nono = 'No'
    const sansoini  = req.params
    const sansifinish = sansoini
    console.log(sansifinish)
  
    // RECORRE TODO EL JSON EN BUSQUEDA DE UNA FECHA IGUAL AL QUE SE COLOCÓ, SI NO ENCUENTRA NINGUNO MANDA UN MENSAJE ↓
    for (let f = 0; f < Mostrar_reservasEspacio.length; f++){
  
      if (Mostrar_reservasEspacio[f].FechaInicio ==  sansifinish){
        res.send(Mostrar_reservasEspacio[f])
        nono = 'Si'
      }
    }
    if(nono == 'No') {
      res.send('No se encontraron reservas con esa fecha de inicio')
    }
});