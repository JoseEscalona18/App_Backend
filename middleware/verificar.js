const { verifyToken } = require("../helpers/tokens")

const checkAutenticacion = async (req, res, next, roles) => {
    try {
        const token = req.headers.authorization.split(' ').pop()
        const tokenData = await verifyToken(token)
        if (tokenData.id) {
            if (roles.includes(tokenData.rol)){
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

module.exports = checkAutenticacion