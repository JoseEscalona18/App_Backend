const mysql = require('mysql');
const { select } = require('underscore');

const conection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
})

class PersonalFuente {
    listar(){
        return new Promise((resolve, reject)=>{
            console.log('Funciona el SQL De Listar Personal')
            conection.query('SELECT * from `personal`', function (error, results, fields) {
                if (error) throw error;
                console.log(results);
                resolve(results);
            });

        })
    }

    mostrarPersonal(personal){
        return new Promise((resolve, reject)=>{
            console.log('Funciona el SQL de Mostrar uno')
            conection.query('SELECT * FROM `personal` WHERE CI = '+ personal, function (error, results, fields) {
                if (error) throw error;
                console.log(results);
                resolve(results);
            });

        })
    }

    mostrarPersonalCarg(personal){
        return new Promise((resolve, reject)=>{
            console.log('Funciona el SQL de Mostrar el Personal segun su cargo')
            conection.query('SELECT * FROM `personal` WHERE Cargo = "'+ personal + '"', function (error, results, fields) {
                if (error) throw error;
                console.log(results);
                resolve(results);
            });

        })

    }

    RegistrarPersonal(personal){
        let nombre = '"'+personal.Nombre+'"'
        let ci = '"'+personal.CI+'"'
        let cargo = '"'+personal.Cargo+'"'
        let usuario = '"'+personal.Usuario+'"'
        let contraseña = '"'+personal.Contraseña+'"'
        let especialidad = '"'+personal.Especialidad+'"'
        let estatus =  '"'+personal.Estatus+'"'

        console.log(personal)

        return new Promise((resolve, reject) => {
            console.log('Funciona el SQL de crear')
            conection.query('INSERT INTO personal (Nombre, CI, Cargo, Usuario, Contraseña, Especialidad, Estatus) VALUES (' +nombre+ ', ' +ci+ ', ' +cargo+ ', ' +usuario+ ',' +contraseña+ ',' +especialidad+ ',' +estatus+ ')',
            function (error, results, fields){
                if(error) throw error;
                console.log('Se ha registrado a la persona en el sistema');
                console.log(results);
                resolve(personal)
            }
        );
        })
    }

    ActualizarDatos(personal,CIp){
        let nombre = '"'+personal.Nombre+'"'
        let ci = '"'+personal.CI+'"'
        let cargo = '"'+personal.Cargo+'"'
        let usuario = '"'+personal.Usuario+'"'
        let contraseña = '"'+personal.Contraseña+'"'
        let especialidad = '"'+personal.Especialidad+'"'
        let estatus =  '"'+personal.Estatus+'"'

        console.log(CIp)

        return new Promise((resolve, reject) => {
            console.log('Fuente de Actualizar')
            conection.query('UPDATE personal SET Nombre = '+nombre+', CI = '+ci+', Cargo = '+cargo+', Usuario = '+usuario+', Contraseña = '+contraseña+',Especialidad = '+especialidad+', Estatus = '+estatus+' WHERE CI = '+CIp,
            function (error, results, fields){
                if(error) throw error;
                console.log('Se ha actualizado el personal ', results);
                resolve(personal)
            });
        })
    }

    BorrarPersona(personal){
        return new Promise((resolve, reject) => {
            console.log('Funciona el SQL de Borrar');
            conection.query('DELETE  FROM personal WHERE CI = '+ personal, function (error, results, fields){
                if(error) throw error;
                console.log('Se ha borrado el personal, puedes comprobarlo listando de nuevo o desde PHPMyAdmin   ', results);
                resolve('El usuario con la cedula de identidad:' + personal + ',ha sido eliminado')
            })
        })
    }
}

const personalF = new PersonalFuente();
module.exports = personalF; 