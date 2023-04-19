const mysql = require('mysql');
const { select } = require('underscore');

const conection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
})

class RegistroFuente {

    RegistrarAcceso(register){
        let nombre = '"'+register.Nombre+'"'
        let ci = '"'+register.Ci+'"'
        let clave = '"'+register.Clave+'"'
        let rol = '"'+register.Rol+'"'

        return new Promise((resolve, reject) => {
            console.log('Funciona el SQL de crear Registro')
            conection.query('INSERT INTO Acceso (Nombre, CI, Clave, Rol) VALUES (' +nombre+ ', ' +ci+ ', ' +clave+ ', ' +rol+ ')',
            function (error, results, fields){
                if(error) throw error;
                console.log('Se ha registrado el acceso al sistema');
                resolve(register)
            }
        );
        })
    }

}

const registerF = new RegistroFuente();
module.exports = registerF; 