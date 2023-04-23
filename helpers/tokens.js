const jwt  = require('jsonwebtoken')
require('dotenv').config({path: ('./.env')});
console.log(process.env.JWT_SECRET)

const tokenSign = async (user) => {
    return jwt.sign (
        {
            Usuario: user.Usuario,
            Contraseña: user.Contraseña,
            Rol: user.Rol
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