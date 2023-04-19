const bcrypt = require("bcryptjs")

// Encriptar ↓↓↓↓

const encriptar = async (Clave) => {
    const hash = await bcrypt.hash(Clave, 10)
    const token = hash
    console.log("Este es el token: ", hash)
    return token
}

module.exports = {encriptar};