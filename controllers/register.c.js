const { promiseImpl } = require('ejs');
const { reject } = require('underscore');
var RegistroFuente = require('../src/sqlregistro.js');
const {encriptar} = require('../helpers/encrypt.js')


class RegistroController {

listarAdmin(){
    return new Promise ((resolve, reject)=>{
        console.log("Funciona Controlador")
        RegistroFuente.listaradmins()
        .then((results)=>{
            resolve (results)
        })
        .catch((err)=>{
          reject(err)
        });
    })

}

registrar(register){
    return new Promise (async (resolve, reject)=>{
        if (!register.Nombre || !register.Ci || !register.Usuario || !register.Contraseña) {
            return resolve("Compruebe uno de los datos a ingresar.");
        }
        console.log("Controlador de registrar acceso")

    
        const token = await encriptar(register.Contraseña)
        register.Contraseña = token

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