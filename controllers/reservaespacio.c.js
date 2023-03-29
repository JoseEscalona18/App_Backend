const { promiseImpl } = require('ejs');
const { reject } = require('underscore');
var reservasespFuente = require('../src/sqlreservasespacios.js')


class reservaespaciocontroller {
  listarRES(){
    return new Promise ((resolve, reject)=>{
        console.log("Funciona Controlador 1")
        reservasespFuente.listarRespa()
        .then((resultado)=>{
            resolve (resultado)
        })
        .catch((err)=>{
          reject(err)
        });
    })
  }
   ///MOSTRAR UNA RESERVA DE ESPACIO

   mostrarReservaES(reservadeespacio){
    return new Promise ((resolve, reject)=>{
      console.log("Funciona Controlador 2")
        reservasespFuente.mostrarRES(reservadeespacio)
        .then((resultado)=>{
            resolve (resultado)
        })
        .catch((err)=>{
          reject(err)
        });
    })
  }  

  registrar(reservadeespacio){
    return new Promise ((resolve, reject)=>{
        if (!reservadeespacio.Nombre_Solicitante || !reservadeespacio.CI_Solicitante || !reservadeespacio.FechaInicio|| !reservadeespacio.FechaFin|| !reservadeespacio.HoraInicio|| !reservadeespacio.HoraFi|| !reservadeespacio.ID_Espa|| !reservadeespacio.Espacio|| !reservadeespacio.Motivo|| !reservadeespacio.Tecnico|| !reservadeespacio.CI_Tecnico) {
            return resolve("Compruebe uno de los datos a ingresar.");
        }
        console.log("Contrlador de registrar espacios")
        reservasespFuente.RegistrarReservaDeEspacio(reservadeespacio)
        .then((resultado)=>{
            resolve (resultado)
        })
        .catch((err)=>{
          reject(err)
        });
    })

  }

  actualizar(reservadeespacio, IDes){
    console.log("Controlador de Actualizar Espacio")

    return new Promise ((resolve, reject) => {
        if (!reservadeespacio.Nombre_Solicitante || !reservadeespacio.CI_Solicitante || !reservadeespacio.FechaInicio|| !reservadeespacio.FechaFin|| !reservadeespacio.HoraInicio|| !reservadeespacio.HoraFi|| !reservadeespacio.ID_Espa|| !reservadeespacio.Espacio|| !reservadeespacio.Motivo|| !reservadeespacio.Tecnico|| !reservadeespacio.CI_Tecnico) {
            return resolve("No se actualizaron los datos de la reserva de espacio, se requiere de los parametros correctos");
        }
        reservasespFuente.ActualizarDatos(reservadeespacio,IDes)
        .then((resultado)=>{
            resolve (resultado)
        })
        .catch((err)=>{
            reject(err)
        })
    })
  }

  borrar(reservadeespacio){
    console.log('Controlador de Borrado')
    return new Promise ((resolve, reject) => {
        reservasespFuente.BorrarReserva(reservadeespacio)
        .then((resultado)=>{
            resolve (resultado)
        })
        .catch((err)=>{
            reject(err)
        })
    })
  }  

  ///MOSTRAR UNA RESERVA DE ESPACIO POR FECHA
  mostrarRESFecha(reservadeespacio){
    return new Promise ((resolve, reject)=>{
      reservasespFuente.mostrarRESF(reservadeespacio)
        .then((resultado)=>{
          if (resultado == ""){
            resultado = "No se encontro ningun registro con esa fecha"
            resolve (resultado)
          }else
            resolve (resultado)
        })
        .catch((err)=>{
          reject(err)
        });
    })
  }  

  ///MOSTRAR UNA RESERVA DE ESPACIO POR RANGO DE FECHAS
  mostrarRESRangoFecha(reservadeespacio1, reservadeespacio2){
    return new Promise ((resolve, reject)=>{
      reservasespFuente.mostrarRESRango(reservadeespacio1, reservadeespacio2)
        .then((resultado)=>{
          if (resultado == ""){
            resultado = "No se encontro ningun registro en ese rango de fechas"
            resolve (resultado)
          }else
            resolve (resultado)
        })
        .catch((err)=>{
          reject(err)
        });
    })
  } 


}



const reservaespC= new reservaespaciocontroller()

module.exports = reservaespC
