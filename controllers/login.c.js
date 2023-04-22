const { compare } = require('bcryptjs');
const { isEmpty } = require('underscore');
var LoginFuente = require('../src/sqllogin.js');
const {comparar} = require('../helpers/encrypt.js')
const { tokenSign } = require ('../helpers/tokens');
const {axioslogeo} = require('../helpers/axios')


class LoginController {

consultar(loguear){
    return new Promise (async (resolve, reject)=>{
        if (!loguear.Usuario || !loguear.Contraseña) {
            return resolve("Compruebe uno de los datos a ingresar.");
        }
        console.log("Controlador de ingresar acceso")


        LoginFuente.ConsultarAcceso(loguear)
        
        .then(async (resultado)=>{
            if (resultado == "") {
                resultado = "No hay registros con ese Usuario"
                resolve (resultado)
            } 

            

            if (resultado != ""){
                const CheckPassword = await comparar(loguear.Contraseña, resultado[0].Contraseña)
                if (CheckPassword) {
                    var user = {
                        "Usuario": resultado[0].Usuario,
                        "Rol": resultado[0].Rol
                    }
                    const tokenSession = await tokenSign(user)
                    console.log(tokenSession)
                    
                    resultado = {
                        'Login':"Inicio de sesión correcto",
                        'TokenSession':tokenSession
                    }
                    
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