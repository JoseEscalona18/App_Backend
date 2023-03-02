const controller = {};
var MostEspacios = require('../src/Espacios.json');
const s = require('underscore')
let Agge = 'Si'
let Nei = 'No'
let mo = 'No'
let pos
controller.consulta = function(req, res, next) {
    res.send(MostEspacios)
  };

  controller.consultaSerial = function(req, res){
    Nei = 'No'
    const CCode  = req.params
    const SCode = Number(CCode.Code)
  
    // RECORRE TODO EL JSON EN BUSQUEDA DE UN SERIAL IGUAL AL QUE SE COLOCÓ, SI NO ENCUENTRA NINGUNO MANDA UN MENSAJE ↓
    for (let f = 0; f < MostEspacios.length; f++){
  
      if (MostEspacios[f].Code ==  SCode){
        res.send(MostEspacios[f])
        Nei = 'Si'
      }
    }
    if(Nei == 'No') {
      res.send('No se encontraron equipos con ese Serial')
    }
  };

  controller.agregarEspacio = (req,res) => {
    Agge = 'Si'
    // AGREGA LOS DATOS QUE SE ESTAN MANDANDO DEL BODY EN LAS RESPECTIVAS CONSTANTES ↓
    const { Code, Nombre , Descripcion ,  Direccion , Estatus} = req.body
  
    // CONDICION PARA VER SI TODO LOS CAMPOS ESTÁN LLEGANDO ↓
    if (Code && Nombre && Descripcion && Direccion && Estatus) {
  
      if (MostEspacios.length == 0) {
  
        const nuevo_espacio =  {...req.body}
        MostEspacios.push(nuevo_espacio)
        
        res.send('Guardado correctamente')
      }else{
  
        for (i = 0; i < MostEspacios.length; i++){
  
          if (MostEspacios[i].Code === Code){
            Agge = 'No'
          }
        }
  
      }
  
      if (Agge == 'No'){
        res.send('No pueden haber 2 espacios con el mismo codigo de lugar')
      }

      if (Agge == 'Si'){
        // AGREGA LOS DATOS EN UNA NUEVA CONSTANTE ↓
  
        const nuevo_espacio =  {...req.body}
        
        // AGREGA LOS DATOS EL JSON ↓
        MostEspacios.push(nuevo_espacio)
        
        // MENSAJE QUE INDICA QUE SE GUARDÓ CORRECTAMENTE ↓
        res.send('Guardado correctamente')
      }
  
    } else {
      // EN CASO DE QUE ALGUN CAMPO NO ESTÉ COLOCADO, SE EJECUTA ESTA CONDICIÓN ↓
      res.status(500).send('Peticion Erronea')
    }
  };

  controller.eliminarEspacio = function(req, res){
    Nei = 'No'
    const VXCode  = req.params
    const SSCode = Number(VXCode.Code)

    s.each(MostEspacios,(espacio, i) =>{
  
      if (espacio.Code == SSCode){
        Nei = 'Si'
        pos = i
      }
    });

    if (Nei == 'Si'){
      MostEspacios.splice(pos,1)
      console.log('Eliminado correctamente')
      res.send(MostEspacios)
    }
    if(Nei == 'No') {
      res.send('No se encontraron espacios con ese codigo de lugar')
    }
  };

  controller.editarEspacio = function(req, res){
    const RQCode = req.params
    const GUCode = Number(RQCode.Code)
    mo = 'No'
    const { Nombre , Descripcion, Direccion, Estatus} = req.body;
    if (Nombre && Descripcion && Direccion && Estatus) {

      s.each(MostEspacios, (espacio, i) => {
        if(espacio.Code == GUCode ){
          espacio.Nombre = Nombre;
          espacio.Descripcion = Descripcion;
          espacio.Direccion = Direccion;
          espacio.Estatus = Estatus
          res.send(espacio)
          mo = 'Si'
          console.log('Datos modificados correctamente')

        }
      });

      if (mo == 'No'){
        res.send('No se encontraron espacios con ese Código')  
      }
      
    }
    else{
      res.status(500).json({error: "Hubo un error"})
    }
  };

module.exports = controller