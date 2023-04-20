const jwt  = require('jsonwebtoken')
require('dotenv').config({path: ('./.env')});
console.log(process.env.JWT_SECRET)

const tokenSign = async (persona) => {
    return jwt.sign (
        {
            usuario: persona.Usuario,
            contraseña: persona.Contraseña,
            role: persona.Rol
        },
        process.env.JWT_SECRET,
        {
            expiresIn : "2h" // El tiempo que dura activo

        }
    )
}

const verifyToken = async (token) => {
    try{
        return jwt.verify(token, process.env.JWT_SECRET)
    }catch(e){
        return null
    }
}



module.exports = {tokenSign, verifyToken}