const mysql = require('mysql');
let consultaequipos
const conection = mysql.createConnection({
    host:'localhost',
    user:'admin',
    password:'123456',
    database:'reservasdb'
})

const consultarequipos = () => {
    conection.query('Select * from equipos;', (err, rows) =>{
        if(err) throw err 
        consultaequipos = rows   
    }); 
    return consultaequipos
}

module.exports = {consultarequipos}