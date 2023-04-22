const { promiseImpl } = require('ejs');
const { reject } = require('underscore');
var FacturaFuente = require('../src/sqlfactura.js')

///CLASE FACTURAS

class FacturasController {
    //CONSULTAR FACTURAS
  listar(){
      return new Promise ((resolve, reject)=>{
          console.log("Funciona Controlador 1")
          FacturaFuente.listar()
          .then((resultado)=>{
            if(resultado == ""){
                resultado = "No hay facturas en la base de datos"
                resolve(resultado)
            }
              resolve (resultado)
          })
          .catch((err)=>{
            reject(err)
          });
      })
  }



  mostrarFactura(factura){
      return new Promise ((resolve, reject)=>{
        console.log("Funciona Controlador 2")
          FacturaFuente.mostrarFactura(factura)
          .then((resultado)=>{
            if(resultado == ""){
                resultado = "No se encontro ninguna factura con ese ID"
                resolve(resultado)
            }
              resolve (resultado)
          })
          .catch((err)=>{
            reject(err)
          });
      })
  }

  ///MOSTRAR factura por CI_Admin
  mostrarFacturaCI(factura){
    return new Promise ((resolve, reject)=>{
      console.log("Funciona Controlador 2")
        FacturaFuente.mostrarFactCI(factura)
        .then((resultado)=>{
            if(resultado == ""){
                resultado = "No hay ninguna factura proveniente de esa Cedula de Identidad de Admin"
                resolve(resultado)
            }
            resolve (resultado)
        })
        .catch((err)=>{
          reject(err)
        });
    })
}

  ///CREAR EQUIPOS

  crear(factura){
      return new Promise ((resolve, reject)=>{
          if (!factura.ProdCompr || !factura.PrecioTotal || !factura.FechaC || !factura.HoraC|| !factura.DomicilioF|| !factura.Proveedor|| !factura.SerialPr|| !factura.CI_Admin) {
              return resolve("Compruebe uno de los datos a ingresar.");
          }
          console.log("a controller")
          FacturaFuente.crear(factura)
          .then((resultado)=>{
              resolve (resultado)
          })
          .catch((err)=>{
            reject(err)
          });
      })
  }

  ///ACTUALIZAR EQUIPOS

  actualizar(factura, idF){
    console.log("Controlador de Actualizar Factura")
    return new Promise ((resolve, reject) => {
        if (!factura.ProdCompr || !factura.PrecioTotal || !factura.FechaC || !factura.HoraC|| !factura.DomicilioF|| !factura.Proveedor|| !factura.SerialPr) {
            return resolve("No se actualizo el factura, se requiere de los parametros correctos");
        }
        FacturaFuente.ActualizarF(factura,idF)
        .then((resultado)=>{
            resolve (resultado)
        })
        .catch((err)=>{
            reject(err)
        })
    })
}

    ///BORRAR FACTURAS POR ID
  borrar(factura){
    console.log('Controlador de Borrado')
    return new Promise ((resolve, reject) => {
        
        FacturaFuente.BorrarF(factura)
        .then((resultado)=>{
            resolve (resultado)
        })
        .catch((err)=>{
            reject(err)
        })
    })
}


}

const facturasC = new FacturasController()

module.exports = facturasC