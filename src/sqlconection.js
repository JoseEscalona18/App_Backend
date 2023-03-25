
const mysql = require('mysql');
const conection = mysql.createConnection({
    host:'localhost',
    user:'admin',
    password:'123456',
    database:'reservasdb'
})

const conectar = () => {
    conection.connect((Err)=>{
        if(Err) throw Err
        console.log('La conexión con la base de datos ha sido exitosa')
    })
}


module.exports = {conectar}