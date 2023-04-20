const { promiseImpl } = require('ejs');
const { reject } = require('underscore');
var solicitantesFuente = require('../src/sqlsolicitantes.js')
const {encriptar} = require('../helpers/encrypt.js')

class solicitantesController {
  listarS(){
    return new Promise ((resolve, reject)=>{
        console.log("Funciona Controlador 1")
        solicitantesFuente.listarSoli()
        .then((resultado)=>{
            resolve (resultado)
        })
        .catch((err)=>{
          reject(err)
        });
    })
  }
   ///MOSTRAR UN TECNICO

  mostrarSolicitante(solicitante){
    return new Promise ((resolve, reject)=>{
      console.log("Funciona Controlador 2")
        solicitantesFuente.mostrarSolicitante(solicitante)
        .then((resultado)=>{
            resolve (resultado)
        })
        .catch((err)=>{
          reject(err)
        });
    })
  }

  ///REGISTRAR TECNICOS

  registrar(solicitante){
    return new Promise (async (resolve, reject)=>{
        if (!solicitante.Nombre || !solicitante.CI || !solicitante.FechaN|| !solicitante.Direccion|| !solicitante.Usuario|| !solicitante.Contraseña|| !solicitante.Telefono) {
            return resolve("Compruebe uno de los datos a ingresar.");
        }
        console.log("Contrlador de registrar solicitantes")

        const token = await encriptar(solicitante.Contraseña)
        solicitante.Contraseña = token

        solicitantesFuente.RegistrarSolicitantes(solicitante)
        .then((resultado)=>{
            resolve (resultado)
        })
        .catch((err)=>{
          reject(err)
        });
    })

  }

  actualizar(solicitante, CIs){
    console.log("Controlador de Actualizar Espacio")

    return new Promise ((resolve, reject) => {
        if (!solicitante.Nombre || !solicitante.CI || !solicitante.FechaN|| !solicitante.Direccion|| !solicitante.Usuario|| !solicitante.Contraseña|| !solicitante.Telefono) {
            return resolve("No se actualizaron los datos del tecnico, se requiere de los parametros correctos");
        }
        solicitantesFuente.ActualizarDatos(solicitante,CIs)
        .then((resultado)=>{
            resolve (resultado)
        })
        .catch((err)=>{
            reject(err)
        })
    })
  }

      ///BORRAR PERSONAL DEL REGISTRO A PARTIR DE SU CEDULA
      borrar(solicitante){
        console.log('Controlador de Borrado')
        return new Promise ((resolve, reject) => {
            solicitantesFuente.BorrarPersona(solicitante)
            .then((resultado)=>{
                resolve (resultado)
            })
            .catch((err)=>{
                reject(err)
            })
        })
      }
  
}

const solicitantesC = new solicitantesController()

module.exports = solicitantesC