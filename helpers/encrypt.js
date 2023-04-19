const bcrypt = require("bcryptjs")

// Encriptar ↓↓↓↓

const encriptar = async (Clave) => {
    const hash = await bcrypt.hash(Clave, 10)
    console.log("Este es el token: ", hash)
    return hash
}

const comparar = async (Clave, ClaveEncrypt) => {
    return await bcrypt.compare(Clave,ClaveEncrypt)
}


module.exports = {encriptar, comparar};