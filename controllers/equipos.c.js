const { promiseImpl } = require('ejs');
const { reject } = require('underscore');
var equiposFuente = require('../src/sqlequipos.js')

///CLASE CONTROLADOR de EQUIPO

class equiposController {
    //CONSULTAR EQUIPOS
  listar(){
      return new Promise ((resolve, reject)=>{
          console.log("Funciona Controlador 1")
          equiposFuente.listar()
          .then((resultado)=>{
            if(resultado == ""){
                resultado = "No hay equipos en la base de datos"
                resolve(resultado)
            }
              resolve (resultado)
          })
          .catch((err)=>{
            reject(err)
          });
      })
  }

  ///MOSTRAR EQUIPO 

  mostrarEquipo(equipo){
      return new Promise ((resolve, reject)=>{
        console.log("Funciona Controlador 2")
          equiposFuente.mostrarEquipo(equipo)
          .then((resultado)=>{
            if(resultado == ""){
                resultado = "No se encontro algun equipo con ese serial"
                resolve(resultado)
            }
              resolve (resultado)
          })
          .catch((err)=>{
            reject(err)
          });
      })
  }
  ///MOSTRAR EQUIPO POR ESTATUS
  mostrarEquipoEstatus(equipo){
    return new Promise ((resolve, reject)=>{
          equiposFuente.mostrarEquipoEst(equipo)
          .then((resultado)=>{
            if (resultado == ""){
                resultado = "No se encontro ningun registro con ese estatus"
                resolve(resultado)
            }else
              resolve (resultado)
          })
          .catch((err)=>{
            reject(err)
          });
      })
  }

  ///CREAR EQUIPOS

  crear(equipo){
      return new Promise ((resolve, reject)=>{
          if (!equipo.Nombre || !equipo.Descripcion || !equipo.Serial || !equipo.Adquisicion|| !equipo.Estatus) {
              console.log('Compruebe uno de los datos a Ingresar')
              return resolve("Compruebe uno de los datos a ingresar.");
          }
          console.log("a controller")
          equiposFuente.crear(equipo)
          .then((resultado)=>{
              resolve (resultado)
          })
          .catch((err)=>{
            reject(err)
          });
      })
  }

  ///ACTUALIZAR EQUIPOS

  actualizar(equipo, SerialE){
    console.log("Controlador de Actualizar Equipo")
    return new Promise ((resolve, reject) => {
        if (!equipo.Nombre|| !equipo.Serial || !equipo.Descripcion || !equipo.Adquisicion || !equipo.Estatus ) {
            console.log("No se actualizo el equipo, se requiere de los parametros correctos")
            return resolve("No se actualizo el equipo, se requiere de los parametros correctos");
        }
        equiposFuente.ActualizarE(equipo,SerialE)
        .then((resultado)=>{
            resolve (resultado)
        })
        .catch((err)=>{
            reject(err)
        })
    })
}

    ///BORRAR EQUIPOS POR SERIAL
  borrar(equipo){
    console.log('Controlador de Borrado')
    return new Promise ((resolve, reject) => {
        
        equiposFuente.BorrarE(equipo)
        .then((resultado)=>{
            resolve (resultado)
        })
        .catch((err)=>{
            reject(err)
        })
    })
}


}

const equiposC = new equiposController()

module.exports = equiposC