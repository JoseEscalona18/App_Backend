const { compare } = require('bcryptjs');
const { isEmpty } = require('underscore');
var LoginFuente = require('../src/sqllogin.js');
const {comparar} = require('../helpers/encrypt.js')


class LoginController {

consultar(loguear){
    return new Promise (async (resolve, reject)=>{
        if (!loguear.Ci || !loguear.Clave) {
            return resolve("Compruebe uno de los datos a ingresar.");
        }
        console.log("Controlador de ingresar acceso")


        LoginFuente.ConsultarAcceso(loguear)
        
        .then(async (resultado)=>{
            if (resultado == "") {
                resultado = "No hay registros con esta cedula"
                resolve (resultado)
            } 

            if (resultado != ""){
                const CheckPassword = await comparar(loguear.Clave, resultado[0].Clave)
                console.log(CheckPassword + " fafaf")
                if (CheckPassword) {
                    resultado = "Inicio de sesión correcto"
                    resolve (resultado)
                }
                if (!CheckPassword){
                    resultado = "La contraseña no es correcta"
                    resolve (resultado)
                }
                
            }
        })
        .catch((err)=>{
          reject(err)
        });
    })

}
}

const LoginC = new LoginController()

module.exports = LoginC