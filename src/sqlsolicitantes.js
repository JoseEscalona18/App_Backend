const mysql = require('mysql');
const { select } = require('underscore');

const conection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
})

class solicitantesFuente {
    listarSoli(){
        return new Promise((resolve, reject)=>{
            console.log('Funciona el SQL De Listar Solicitantes')
            conection.query('SELECT * from `solicitantes`', function (error, results, fields) {
                if (error) throw error;
                console.log(results);
                resolve(results);
            });

        })
    }

    mostrarSolicitante(solicitante){
        return new Promise((resolve, reject)=>{
            console.log('Funciona el SQL de Mostrar uno')
            conection.query('SELECT * FROM `solicitantes` WHERE CI = '+ solicitante, function (error, results, fields) {
                if (error) throw error;
                console.log(results);
                resolve(results);
            });

        })
    }

    RegistrarSolicitantes(solicitante){
        let nombre = '"'+solicitante.Nombre+'"'
        let ci = '"'+solicitante.CI+'"'
        let fechan = '"'+solicitante.FechaN+'"'
        let direccion = '"'+solicitante.Direccion+'"'
        let usuario = '"'+solicitante.Usuario+'"'
        let contraseña = '"'+solicitante.Contraseña+'"'
        let tlf =  '"'+solicitante.Telefono+'"'

        console.log(solicitante)

        return new Promise((resolve, reject) => {
            console.log('Funciona el SQL de crear')
            conection.query('INSERT INTO solicitantes (Nombre, CI, FechaN, Direccion, Usuario, Contraseña, Telefono, Rol) VALUES (' +nombre+ ', ' +ci+ ', ' +fechan+ ', ' +direccion+ ', '+usuario+ ',' +contraseña+ ',' +tlf+ ', "Solicitante")',
            function (error, results, fields){
                if(error) throw error;
                console.log('Se ha registrado al solicitante en el sistema');
                console.log(results);
                resolve(solicitante)
            }
        );
        })
    }

    ActualizarDatos(solicitante,CIs){
        let nombre = '"'+solicitante.Nombre+'"'
        let ci = '"'+solicitante.CI+'"'
        let fechan = '"'+solicitante.FechaN+'"'
        let direccion = '"'+solicitante.Direccion+'"'
        let usuario = '"'+solicitante.Usuario+'"'
        let contraseña = '"'+solicitante.Contraseña+'"'
        let tlf =  '"'+solicitante.Telefono+'"'

        console.log(CIs)

        return new Promise((resolve, reject) => {
            console.log('Fuente de Actualizar')
            conection.query('UPDATE solicitantes SET Nombre = '+nombre+', CI = '+ci+', FechaN = '+fechan+', Direccion = '+direccion+',Usuario = '+usuario+', Contraseña = '+contraseña+',Telefono = '+tlf+' WHERE CI = '+CIs,
            function (error, results, fields){
                if(error) throw error;
                console.log('Se ha actualizado el solicitante ', results);
                resolve(solicitante)
            });
        })
    }

    BorrarPersona(solicitante){
        return new Promise((resolve, reject) => {
            console.log('Funciona el SQL de Borrar');
            conection.query('DELETE  FROM solicitantes WHERE CI = '+ solicitante, function (error, results, fields){
                if(error) throw error;
                console.log('Se ha borrado el solicitante, puedes comprobarlo listando de nuevo o desde PHPMyAdmin   ', results);
                resolve('El usuario con la cedula de identidad:' + solicitante + ',ha sido eliminado')
            })
        })
    }
}



const solicitantesF = new solicitantesFuente();
module.exports = solicitantesF; 