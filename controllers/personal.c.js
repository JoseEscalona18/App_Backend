const controller = {};
const p = require('underscore')
let Agge
var Nel = 'No'
var mo = 'No'
var Mostrar_personal = require('../src/Personal.json');

controller.consulta = function(req, res, next) {
    res.send(Mostrar_personal)
  };

controller.consultaCI = function(req, res){
    Nei = 'No'
    const CCedula  = req.params
    const SCedula = Number(CCedula.CI)
  
    // RECORRE TODO EL JSON EN BUSQUEDA DE UN CI IGUAL AL QUE SE COLOCÓ, SI NO ENCUENTRA NINGUNO MANDA UN MENSAJE ↓
    for (let f = 0; f < Mostrar_personal.length; f++){
  
      if (Mostrar_personal[f].CI ==  SCedula){
        res.send(Mostrar_personal[f])
        Nel = 'Si'
      }
    }
    if(Nel == 'No') {
      res.send('No se encontraron personas con ese numero de cedula')
    }
};

controller.agregarPersonal = (req,res) => {

    // AGREGA LOS DATOS QUE SE ESTAN MANDANDO DEL BODY EN LAS RESPECTIVAS CONSTANTES ↓
    const { Nombre, CI, Cargo , Usuario , Contraseña, Especialidad, Estatus} = req.body
  
    // CONDICION PARA VER SI TODO LOS CAMPOS ESTÁN LLEGANDO ↓
    if (Nombre && CI && Cargo && Usuario && Contraseña && Especialidad && Estatus) {
  
      if (Mostrar_personal.length == 0) {
  
        const nuevo_personal =  {...req.body}
        Mostrar_personal.push(nuevo_personal)
        res.send('Guardado correctamente')
      }else{
  
        for (i = 0; i < Mostrar_personal.length; i++){
  
          if (Mostrar_personal[i].CI === CI){
            res.send('No pueden haber 2 personas con el mismo número de cedula')
            Aggr = 'No'
          }else{
            Aggr = 'Si'
          }
        }
  
      }
  
      if (Aggr == 'Si'){
        // AGREGA LOS DATOS EN UNA NUEVA CONSTANTE ↓
  
        const nuevo_personal =  {...req.body}
        
        // AGREGA LOS DATOS EL JSON ↓
        Mostrar_personal.push(nuevo_personal)
        
        // MENSAJE QUE INDICA QUE SE GUARDÓ CORRECTAMENTE ↓
        res.send('Guardado correctamente')
      }
  
    } else {
      // EN CASO DE QUE ALGUN CAMPO NO ESTÉ COLOCADO, SE EJECUTA ESTA CONDICIÓN ↓
      res.status(500).send('Peticion Erronea')
    }
  };

controller.eliminarPersonal = function(req, res){
  Nei = 'No'
    const CIII  = req.params
    const SCI = Number(CIII.CI)
    p.each(Mostrar_personal,(personal, i) =>{
  
      if (personal.CI == SCI){
        pos = i
        Nei = 'Si'
      }
    });

    if(Nei == 'Si'){
      Mostrar_personal.splice(pos,1)
      console.log('Eliminado correctamente')
      res.send(Mostrar_personal)
    }

    if(Nei == 'No') {
      res.send('No se encontro ninguna persona con ese numero de cedula')
    }
  };

controller.editarPersonal = function(req, res){
    const RQCI = req.params
    const GUCCI = (RQCI.CI)
    mo = 'No'
    console.log(GUCCI);
    const { Cargo, Usuario, Especialidad, Contraseña, Estatus} = req.body;
    if (Cargo && Usuario && Especialidad && Contraseña && Estatus) {
      
      p.each(Mostrar_personal, (persona, i) => {
        if(persona.CI == GUCCI ){
          persona.Cargo = Cargo;
          persona.Usuario = Usuario;
          persona.Especialidad = Especialidad;
          persona.Contraseña = Contraseña
          persona.Estatus = Estatus
          console.log('Datos modificados correctamente')
          mo = 'Si'
          res.send(equipo)
        }
      });
    
      if (mo == 'No') {
        res.send('No se encontró personal con esa Cedula')  
    }
    
    }
    else{
      res.status(500).json({error: "Hubo un error"})
    }
  };

module.exports = controller;