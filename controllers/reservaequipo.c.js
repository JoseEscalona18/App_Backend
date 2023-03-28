
const { promiseImpl } = require('ejs');
const { reject } = require('underscore');
var reservasequiFuente = require('../src/sqlreservasequipos.js')


class reservadeequipoontroller {
  listarREQ(){
    return new Promise ((resolve, reject)=>{
        console.log("Funciona Controlador 1")
        reservasequiFuente.listarRequi()
        .then((resultado)=>{
            resolve (resultado)
        })
        .catch((err)=>{
          reject(err)
        });
    })
  }

   ///MOSTRAR UNA RESERVA DE EQUIPO

   mostrarReservaEQ(reservadeequipo){
    return new Promise ((resolve, reject)=>{
      console.log("Funciona Controlador 2")
        reservasequiFuente.mostrarREQ(reservadeequipo)
        .then((resultado)=>{
            resolve (resultado)
        })
        .catch((err)=>{
          reject(err)
        });
    })
  }  

  registrar(reservadeequipo){
    return new Promise ((resolve, reject)=>{
        if (!reservadeequipo.Nombre_Solicitante || !reservadeequipo.CI_Solicitante || !reservadeequipo.FechaInicio|| !reservadeequipo.FechaFin|| !reservadeequipo.HoraInicio|| !reservadeequipo.HoraFi|| !reservadeequipo.SerialesE|| !reservadeequipo.Equipos|| !reservadeequipo.Motivo) {
            return resolve("Compruebe uno de los datos a ingresar.");
        }
        console.log("Contrlador de registrar reservas de equipos")
        reservasequiFuente.RegistrarReservasDeEquipos(reservadeequipo)
        .then((resultado)=>{
            resolve (resultado)
        })
        .catch((err)=>{
          reject(err)
        });
    })

  }

  actualizar(reservadeequipo, IDeq){
    console.log("Controlador de Actualizar Espacio")

    return new Promise ((resolve, reject) => {
        if (!reservadeequipo.Nombre_Solicitante || !reservadeequipo.CI_Solicitante || !reservadeequipo.FechaInicio|| !reservadeequipo.FechaFin|| !reservadeequipo.HoraInicio|| !reservadeequipo.HoraFi|| !reservadeequipo.SerialesE|| !reservadeequipo.Equipos|| !reservadeequipo.Motivo) {
            return resolve("No se actualizaron los datos del tecnico, se requiere de los parametros correctos");
        }
        reservasequiFuente.ActualizarDatos(reservadeequipo,IDeq)
        .then((resultado)=>{
            resolve (resultado)
        })
        .catch((err)=>{
            reject(err)
        })
    })
  }
  
  ///BORRAR PERSONAL DEL REGISTRO A PARTIR DE SU CEDULA
  borrar(reservadeequipo){
      console.log('Controlador de Borrado')
      return new Promise ((resolve, reject) => {
          reservasequiFuente.BorrarReserva(reservadeequipo)
          .then((resultado)=>{
              resolve (resultado)
          })
          .catch((err)=>{
              reject(err)
          })
      })
    }  


}



const reservadeequipo= new reservadeequipoontroller()

module.exports = reservadeequipo