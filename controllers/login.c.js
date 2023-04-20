const { compare } = require('bcryptjs');
const { isEmpty } = require('underscore');
var LoginFuente = require('../src/sqllogin.js');
const {comparar} = require('../helpers/encrypt.js')


class LoginController {

consultar(loguear){
    return new Promise (async (resolve, reject)=>{
        if (!loguear.Usuario || !loguear.Contraseña) {
            return resolve("Compruebe uno de los datos a ingresar.");
        }
        console.log("Controlador de ingresar acceso")


        LoginFuente.ConsultarAcceso(loguear)
        
        .then(async (resultado)=>{
            console.log(resultado)
            console.log(resultado[0].Usuario + " UUs")
            console.log(resultado[0].Contraseña + " Contr")
            if (resultado == "") {
                resultado = "No hay registros con esta cedula"
                resolve (resultado)
            } 

            if (resultado != ""){
                const CheckPassword = await comparar(loguear.Contraseña, resultado[0].Contraseña)
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