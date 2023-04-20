const { verifyToken } = require("../helpers/tokens")

const checkRole = async (req, res, next, roles) => {
    try {
        const token = req.headers.authorization.split(' ').pop()
        const tokenData = await verifyToken(token)

        if (tokenData.Usuario) {
            if (roles.includes(tokenData.Rol)){
                next()
            }else{
                res.status(409)
                res.send('No tienes permisos con ese rol')
            }
        } else {
            res.status(409)
            res.send('No tienes acceso')
        }
    }catch (e){
        console.log(e);
        res.status(409)
        res.send('Sin acceso ')
    }
}

module.exports = checkRole