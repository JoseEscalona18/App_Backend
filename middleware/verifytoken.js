const { verifyToken } = require ('../helpers/tokens')


const checkroleauth = async (req, res, next) => {
    try{
        const token = req.cookies.accessToken
        const tokenData = await verifyToken(token)
       console.log(tokenData)
        if(tokenData.Usuario){
            next()
        } else {
            res.status(409)
            res.send({error: 'TIENES QUE INICIAR SESIÓN'})
        }
    
    } catch (e) {
        console.log(e)
        res.status(409)
        res.send({error: 'TIENES QUE INICIAR SESIÓN'})
    }
}

module.exports = checkroleauth