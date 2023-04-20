const mysql = require('mysql');

const conection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
})

class LoginFuente {

    ConsultarAcceso(loguear){

        return new Promise((resolve, reject) => {
            console.log('Funciona el SQL de consultar Login')
            conection.query('select Usuario,Contraseña From personal WHERE Usuario = "'+loguear.Usuario+ '" UNION (select Usuario,Contraseña From solicitantes WHERE Usuario = "'+loguear.Usuario+'" UNION (select Usuario,Contraseña From accesoadmin WHERE Usuario = "'+loguear.Usuario+'"));'  ,
            function (error, results, fields){
                if(error) throw error;
                resolve(results)
            }
        );
        })
    }
}

const loginF = new LoginFuente();
module.exports = loginF; 

 