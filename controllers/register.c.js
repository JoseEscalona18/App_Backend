const { promiseImpl } = require('ejs');
const { reject } = require('underscore');
var RegistroFuente = require('../src/sqlregistro.js');
const {encriptar} = require('../helpers/encrypt.js')


class RegistroController {

registrar(register){
    return new Promise ((resolve, reject)=>{
        if (!register.Nombre || !register.Ci || !register.Clave || !register.Rol) {
            return resolve("Compruebe uno de los datos a ingresar.");
        }
        console.log("Controlador de registrar acceso")

    
        const token = encriptar(register.Clave)
        console.log(token)

        RegistroFuente.RegistrarAcceso(register)
        .then((resultado)=>{
            resolve (resultado)
        })
        .catch((err)=>{
          reject(err)
        });
    })

}
}

const registroC = new RegistroController()

module.exports = registroC