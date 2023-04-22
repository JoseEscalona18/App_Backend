const mysql = require('mysql');

const conection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
})

class RegistroFuente {


    listaradmins(){
        return new Promise((resolve, reject)=>{
            console.log('Funciona el SQL De Listar Admins')
            conection.query('SELECT * from `accesoadmin`',
                function (error, results, fields) {
                if (error) throw error;
                resolve(results);
            });

        })
    }

    RegistrarAcceso(register){
        let nombre = '"'+register.Nombre+'"'
        let ci = '"'+register.Ci+'"'
        let usuario = '"' +register.Usuario+'"'
        let Constraseña = '"'+register.Contraseña+'"'

        return new Promise((resolve, reject) => {
            console.log('Funciona el SQL de crear Registro')
            conection.query('INSERT INTO accesoadmin (Nombre, CI, Usuario, Contraseña, Rol) VALUES (' +nombre+ ', ' +ci+ ', '+usuario+ ',' +Constraseña+ ',  "Admin" )',
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