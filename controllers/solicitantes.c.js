const controller = {};
let Agg = 'Si'
var Ness = 'No'
let mo = 'No'
var Mostrar_solicitantes = require('../src/Solicitantes.json');
const sU = require('underscore')

controller.consulta = function(req, res, next) {
    res.send(Mostrar_solicitantes)
  };

controller.consultaCI = function(req, res){
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
};

controller.agregarSolicitante = (req,res) => {
  Agg = 'Si'
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
            Agg = 'No'
          }
        }
  
      }
  
      if (Agg == 'No'){
        res.send('No pueden haber 2 solicitantes con el mismo número de cedula')
      }
      
      if (Agg == 'Si'){
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
};

controller.eliminarSolicitante = function(req, res){
    Ness = 'No'
    const Cedulita  = req.params
    const Cedulito = Number(Cedulita.CiS)
    sU.each(Mostrar_solicitantes,(solicitante, i) =>{
  
      if (solicitante.CiS == Cedulito){
        pos = i
        Ness = 'Si'
      }
    });
    if (Ness == 'Si'){
      Mostrar_solicitantes.splice(pos,1)
      console.log('Eliminado correctamente')
      res.send(Mostrar_solicitantes)
    }
    if(Ness == 'No') {
      res.send('No se encontraron solicitantes con ese numero de cedula ')
    }
};

controller.editarSolicitante = function(req, res){
    const QCiS = req.params
    const NaCiS = (QCiS.CiS)
    mo = 'No'
    const { NombreUS, contraS, NumT} = req.body;
    if (NombreUS && contraS && NumT) {
      sU.each(Mostrar_solicitantes, (solicitante, i) => {
        if(solicitante.CiS == NaCiS ){
            solicitante.NombreUS = NombreUS;
            solicitante.contraS = contraS;
            solicitante.NumT = NumT
            console.log('Datos modificados correctamente')
            mo = 'Si'
            res.send(solicitante)
        }
      });

      if (mo == 'No') {
        res.send('No se encontró solicitantes con esa Cedula')  
    }
    }
    else{
      res.status(500).json({error: "Hubo un error"})
    }
};

module.exports = controller