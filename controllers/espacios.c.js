const { promiseImpl } = require('ejs');
const { reject } = require('underscore');
var espaciosFuente = require('../src/sqlespacios.js')

class espaciosController {
  /// LISTAR ESPACIOS
  listar(){
    return new Promise ((resolve, reject)=>{
        console.log("Funciona Controlador 1")
        espaciosFuente.listar()
        .then((resultado)=>{
            resolve (resultado)
        })
        .catch((err)=>{
          reject(err)
        });
    })
  }
       ///MOSTRAR ESPACIO

  mostrarEspacio(espacio){
      return new Promise ((resolve, reject)=>{
        console.log("Funciona Controlador 2")
          espaciosFuente.mostrarEspacio(espacio)
          .then((resultado)=>{
              resolve (resultado)
          })
          .catch((err)=>{
            reject(err)
          });
      })
  }

  ///CREAR EQUIPOS

  crear(espacio){
    return new Promise ((resolve, reject)=>{
        if (!espacio.Nombre || !espacio.Descripcion || !espacio.Direccion|| !espacio.Estatus) {
            return resolve("Compruebe uno de los datos a ingresar.");
        }
        console.log("Contrlador de Crear Espacio")
        espaciosFuente.crearEspacio(espacio)
        .then((resultado)=>{
            resolve (resultado)
        })
        .catch((err)=>{
          reject(err)
        });
    })

  }
    ///ACTUALIZAR EQUIPOS

  actualizar(espacio, ID_Espacio){
      console.log("Controlador de Actualizar Espacio")

      return new Promise ((resolve, reject) => {
          if (!espacio.Nombre || !espacio.Descripcion || !espacio.Direccion|| !espacio.Estatus) {
              return resolve("No se actualizo el espacio, se requiere de los parametros correctos");
          }
          espaciosFuente.ActualizarEspa(espacio,ID_Espacio)
          .then((resultado)=>{
              resolve (resultado)
          })
          .catch((err)=>{
              reject(err)
          })
      })
  }

  ///BORRAR EQUIPOS POR SERIAL
  borrar(espacio){
    console.log('Controlador de Borrado')
    return new Promise ((resolve, reject) => {
        espaciosFuente.BorrarEspa(espacio)
        .then((resultado)=>{
            resolve (resultado)
        })
        .catch((err)=>{
            reject(err)
        })
    })
  }

}

const espaciosC = new espaciosController()

module.exports = espaciosC