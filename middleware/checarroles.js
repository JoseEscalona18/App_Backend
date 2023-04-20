const { verifyToken } = require ('../helpers/tokens')


const checkroleauth = (roles) => async (req, res, next) {
    try{
        const token = req.headers.authorization.split (' ').pop()
        const tokenData = await verifyToken(token)
        const userdata = 
        
    }
}

module.exports = checkroleauth