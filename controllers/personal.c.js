const { promiseImpl } = require('ejs');
const { reject } = require('underscore');
var personalFuente = require('../src/sqlpersonal.js')

class personalController {
  ////MOSTRAR LISTA DEL PERSONAL
  listarP(){
    return new Promise ((resolve, reject)=>{
        console.log("Funciona Controlador 1")
        personalFuente.listar()
        .then((resultado)=>{
            resolve (resultado)
        })
        .catch((err)=>{
          reject(err)
        });
    })
  }
   ///MOSTRAR UN TECNICO

   mostrarPersonal(personal){
    return new Promise ((resolve, reject)=>{
      console.log("Funciona Controlador 2")
        personalFuente.mostrarPersonal(personal)
        .then((resultado)=>{
            resolve (resultado)
        })
        .catch((err)=>{
          reject(err)
        });
    })
  }
///MOSTRAR UN TECNICO POR CARGO

  mostrarPersonalCargo(personal){
    return new Promise ((resolve, reject)=>{
        personalFuente.mostrarPersonalCarg(personal)
        .then((resultado)=>{
          if (resultado == ""){
            resultado = "No se encontro ningun registro con ese cargo"
            resolve (resultado)
        }else
            resolve (resultado)
        })
        .catch((err)=>{
          reject(err)
        });
    })
  }
  
  ///REGISTRAR TECNICOS

  registrar(personal){
    return new Promise ((resolve, reject)=>{
        if (!personal.Nombre || !personal.CI || !personal.Cargo|| !personal.Usuario|| !personal.Contraseña|| !personal.Especialidad|| !personal.Estatus) {
            return resolve("Compruebe uno de los datos a ingresar.");
        }
        console.log("Contrlador de registrar tecnicos")
        personalFuente.RegistrarPersonal(personal)
        .then((resultado)=>{
            resolve (resultado)
        })
        .catch((err)=>{
          reject(err)
        });
    })

  }

  //// ACTUALIZAR PERSONAL

  actualizar(personal, CIp){
    console.log("Controlador de Actualizar Espacio")

    return new Promise ((resolve, reject) => {
        if (!personal.Nombre || !personal.CI || !personal.Cargo|| !personal.Usuario|| !personal.Contraseña|| !personal.Especialidad|| !personal.Estatus) {
            return resolve("No se actualizaron los datos del tecnico, se requiere de los parametros correctos");
        }
        personalFuente.ActualizarDatos(personal,CIp)
        .then((resultado)=>{
            resolve (resultado)
        })
        .catch((err)=>{
            reject(err)
        })
    })
  }

    ///BORRAR PERSONAL DEL REGISTRO A PARTIR DE SU CEDULA
    borrar(personal){
      console.log('Controlador de Borrado')
      return new Promise ((resolve, reject) => {
          personalFuente.BorrarPersona(personal)
          .then((resultado)=>{
              resolve (resultado)
          })
          .catch((err)=>{
              reject(err)
          })
      })
    }
}


const personalC = new personalController()

module.exports = personalC