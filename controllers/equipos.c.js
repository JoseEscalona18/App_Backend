const controller = {};
const Mostrar_equipos = require('../src/Equipos.json');
const _ = require('underscore')
let con = 'No'
let el = 'No'
let mo = 'No'
let pos
let Agg = 'Si'
var {consultarequipos} = require('../src/sqlequipos.js')
var {registrarequipos} = require('../src/sqlequipos.js')

// CONSULTA TODOS LOS EQUIPOS
controller.consulta = function(req, res){
  res.send(consultarequipos())
};

controller.consultaSerial = function(req, res){
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
  };
};

  controller.agregarEquipo = (req,res) => { 
    Agg = 'Si'
    agregarequipos = consultarequipos()
  // AGREGA LOS DATOS QUE SE ESTAN MANDANDO DEL BODY EN LAS RESPECTIVAS CONSTANTES ↓
  const { Serial , Nombre , Descripcion ,  Adquisicion , Estatus} = req.body
  // CONDICION PARA VER SI TODO LOS CAMPOS ESTÁN LLEGANDO ↓
  if (Serial && Nombre && Descripcion && Adquisicion && Estatus) {
    
    registrarequipos(Serial, Nombre, Descripcion, Adquisicion, Estatus)
    res.send('Datos agregados correctamente')
    
  } else {
    // EN CASO DE QUE ALGUN CAMPO NO ESTÉ COLOCADO, SE EJECUTA ESTA CONDICIÓN ↓
    res.status(500).send('Peticion Erronea')
  }
};

controller.eliminarEquipo = function(req, res){
  el = 'No'
  const ECSerial  = req.params
  const ESSerial = Number(ECSerial.Serial)

  _.each(Mostrar_equipos,(equipo, i) =>{
    if (equipo.Serial === ESSerial){
      pos = i
      el = 'Si'    
    }
  });

  if(el == 'Si'){
    Mostrar_equipos.splice(pos,1)
    console.log('Eliminado correctamente')
    res.send(Mostrar_equipos)
  }

  if(el === 'No') {
    res.send('No se encontraron equipos con ese Serial')
  }
};

controller.editarEquipo = function(req, res){
  const MCSerial= req.params
  mo = 'No'
  const MSSerial = Number(MCSerial.Serial)
  const { Nombre , Descripcion, Adquisicion, Estatus} = req.body;
  if (Nombre && Descripcion && Adquisicion && Estatus) {

    _.each(Mostrar_equipos, (equipo, i) => {
      if(equipo.Serial == MSSerial ){
        equipo.Nombre = Nombre;
        equipo.Descripcion = Descripcion;
        equipo.Adquisicion = Adquisicion
        equipo.Estatus = Estatus
        console.log('Datos modificados correctamente')
        mo = 'Si'
        res.send(equipo)
      }
    })

    if (mo == 'No') {
        res.send('No se encontraron equipos con ese Serial')  
    }
  } else{
    res.status(500).json({error: "Hubo un error"})
  }
};

module.exports = controller