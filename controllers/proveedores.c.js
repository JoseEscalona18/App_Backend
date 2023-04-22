const { promiseImpl } = require('ejs');
const { reject } = require('underscore');
var ProveedorFuente = require('../src/sqlproveedores.js')

///CLASE FACTURAS

class ProvController {
    //CONSULTAR EQUIPOS
  listar(){
      return new Promise ((resolve, reject)=>{
          console.log("Funciona Controlador 1")
          ProveedorFuente.listar()
          .then((resultado)=>{
              resolve (resultado)
          })
          .catch((err)=>{
            reject(err)
          });
      })
  }



  mostrarProveedorC(proveedor){
      return new Promise ((resolve, reject)=>{
        console.log("Funciona Controlador 2")
          ProveedorFuente.mostrarProveedor(proveedor)
          .then((resultado)=>{
              resolve (resultado)
          })
          .catch((err)=>{
            reject(err)
          });
      })
  }

  ///MOSTRAR proveedor por Numero TElefonico
  mostrarNumM(proveedor){
    return new Promise ((resolve, reject)=>{
      console.log("Funciona Controlador 2")
        ProveedorFuente.mostrarporNum(proveedor)
        .then((resultado)=>{
            resolve (resultado)
        })
        .catch((err)=>{
          reject(err)
        });
    })
}

  ///CREAR EQUIPOS

  crear(proveedor){
      return new Promise ((resolve, reject)=>{
          if (!proveedor.Empresa || !proveedor.CIF || !proveedor.WEB || !proveedor.NumeroM|| !proveedor.TipodeS) {
              return resolve("Compruebe uno de los datos a ingresar.");
          }
          console.log("a controller")
          ProveedorFuente.crear(proveedor)
          .then((resultado)=>{
              resolve (resultado)
          })
          .catch((err)=>{
            reject(err)
          });
      })
  }

  ///ACTUALIZAR EQUIPOS

  actualizar(proveedor, Scif){
    console.log("Controlador de Actualizar proveedor")
    return new Promise ((resolve, reject) => {
        if (!proveedor.Empresa || !proveedor.CIF || !proveedor.WEB || !proveedor.NumeroM|| !proveedor.TipodeS) {
            return resolve("No se actualizo el proveedor, se requiere de los parametros correctos");
        }
        ProveedorFuente.ActualizarP(proveedor,Scif)
        .then((resultado)=>{
            resolve (resultado)
        })
        .catch((err)=>{
            reject(err)
        })
    })
}

    ///BORRAR FACTURAS POR ID
  borrar(proveedor){
    console.log('Controlador de Borrado')
    return new Promise ((resolve, reject) => {
        
        ProveedorFuente.BorrarP(proveedor)
        .then((resultado)=>{
            resolve (resultado)
        })
        .catch((err)=>{
            reject(err)
        })
    })
}


}

const proveedoresC = new ProvController()

module.exports = proveedoresC