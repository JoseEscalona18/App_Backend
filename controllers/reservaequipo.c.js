
const { promiseImpl } = require('ejs');
const { reject, isEmpty } = require('underscore');
var reservasequiFuente = require('../src/sqlreservasequipos.js')


class reservadeequipoontroller {
  ///LISTAR RESERVA DE EQUIPO
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

  ///REGISTRAR RESERVA DE EQUIPO

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

  ///ACTUALIZAR RESERVA DE EQUIPO

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

  ///MOSTRAR UNA RESERVA DE EQUIPO POR FECHA
  mostrarREQFecha(reservadeequipo){
    return new Promise ((resolve, reject)=>{
        reservasequiFuente.mostrarREQF(reservadeequipo)
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

  ///MOSTRAR UNA RESERVA DE EQUIPO POR RANGO DE FECHAS
  mostrarREQRangoFecha(reservadeequipo1, reservadeequipo2){
    return new Promise ((resolve, reject)=>{
        reservasequiFuente.mostrarREQRango(reservadeequipo1, reservadeequipo2)
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

  ///MOSTRAR TODAS LAS RESERVAS HECHAS POR UN SOLICITANTE (CON LA CEDULA) 
  mostrarREQCedulaS(reservadeequipo){
    return new Promise ((resolve, reject)=>{
      reservasequiFuente.mostrarREQCISoli(reservadeequipo)
      .then((resultado)=>{
        if (resultado == ""){
          resultado = "No se encontro ningun registro con esa Cedula"
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



const reservadeequipo= new reservadeequipoontroller()

module.exports = reservadeequipo