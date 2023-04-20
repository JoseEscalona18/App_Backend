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
                res.send('NO TIENES PERMISO CON TU ROL DE ' + tokenData.Rol)
            }
        } else {
            res.status(409)
            res.send('NO TIENES ACCESO')
        }
    }catch (e){
        console.log(e);
        res.status(409)
        res.send('SIN ACCESO')
    }
}

module.exports = checkRole