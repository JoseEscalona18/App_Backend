const { promiseImpl } = require('ejs');
const { reject } = require('underscore');
var TrabajosFuente = require('../src/sqltrabajos.js')

///CLASE Trabajos

class TrabajoController {
    //CONSULTAR EQUIPOS
  listar(){
      return new Promise ((resolve, reject)=>{
          console.log("Funciona Controlador 1")
          TrabajosFuente.listar()
          .then((resultado)=>{
              resolve (resultado)
          })
          .catch((err)=>{
            reject(err)
          });
      })
  }



  mostrar(trabajo){
      return new Promise ((resolve, reject)=>{
        console.log("Funciona Controlador 2")
          TrabajosFuente.mostrarTrabajo(trabajo)
          .then((resultado)=>{
              resolve (resultado)
          })
          .catch((err)=>{
            reject(err)
          });
      })
  }

  ///MOSTRAR trabajo por ID De REserva Equipo
  mostrarporResEQ(trabajo){
    return new Promise ((resolve, reject)=>{
      console.log("Funciona Controlador 2")
        TrabajosFuente.mostrarTReservaEQID(trabajo)
        .then((resultado)=>{
            resolve (resultado)
        })
        .catch((err)=>{
          reject(err)
        });
    })
}

  ///CREAR EQUIPOS

  crear(trabajo){
      return new Promise ((resolve, reject)=>{
          if (!trabajo.Trabajo || !trabajo.Nombre_Solicitante || !trabajo.ID_ReservaEs || !trabajo.ID_ReservaEq|| !trabajo.Descripción) {
              return resolve("Compruebe uno de los datos a ingresar.");
          }
          console.log("a controller")
          TrabajosFuente.crear(trabajo)
          .then((resultado)=>{
              resolve (resultado)
          })
          .catch((err)=>{
            reject(err)
          });
      })
  }

  ///ACTUALIZAR EQUIPOS

  actualizar(trabajo, IDT){
    console.log("Controlador de Actualizar trabajo")
    return new Promise ((resolve, reject) => {
        if (!trabajo.Trabajo || !trabajo.Nombre_Solicitante || !trabajo.ID_ReservaEs || !trabajo.ID_ReservaEq|| !trabajo.Descripción) {
            return resolve("No se actualizo el trabajo, se requiere de los parametros correctos");
        }
        TrabajosFuente.ActualizarT(trabajo,IDT)
        .then((resultado)=>{
            resolve (resultado)
        })
        .catch((err)=>{
            reject(err)
        })
    })
}

    ///BORRAR TRABAJOS POR ID
  borrar(trabajo){
    console.log('Controlador de Borrado')
    return new Promise ((resolve, reject) => {
        
        TrabajosFuente.BorrarT(trabajo)
        .then((resultado)=>{
            resolve (resultado)
        })
        .catch((err)=>{
            reject(err)
        })
    })
}


}

const trabajoC = new TrabajoController()

module.exports = trabajoC