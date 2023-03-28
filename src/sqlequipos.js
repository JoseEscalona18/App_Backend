const mysql = require('mysql');
const { select } = require('underscore');

const conection = mysql.createConnection({
    host:'localhost',
    user:'admin',
    password:'123456',
    database:'reservasdb'
})



class EquiposFuente {
    listar(){
        return new Promise((resolve, reject)=>{
            console.log('Funciona el SQL De Listar')
            conection.query('SELECT * from `equipos`', function (error, results, fields) {
                if (error) throw error;
                console.log(results);
                resolve(results);
            });

        })
    }

    mostrarEquipo(equipo){
        return new Promise((resolve, reject)=>{
            console.log('Funciona el SQL de Mostrar uno')
            conection.query('SELECT * FROM `equipos` WHERE Serial = '+ equipo, function (error, results, fields) {
                if (error) throw error;
                console.log(results);
                resolve(results);
            });

        })
    }

    crear(equipo){
        let nombre = '"'+equipo.Nombre+'"'
        let descripcion = '"'+equipo.Descripcion+'"'
        let serial = '"'+equipo.Serial+'"'
        let adquisicion =  '"'+equipo.Adquisicion+'"'
        let estatus =  '"'+equipo.Estatus+'"'

        return new Promise((resolve, reject) => {
            console.log('Funciona el SQL de crear')
            conection.query('INSERT INTO equipos (Nombre, Descripcion, Serial, Adquisicion, Estatus) VALUES (' +nombre+ ', ' +descripcion+ ', ' +serial+ ', ' +adquisicion+ ', ' +estatus+ ')',
            function (error, results, fields){
                if(error) throw error;
                console.log('Se ha guardado el registro');
                console.log(results);
                resolve(equipo)
            }
        );
        })
    }

    ActualizarE(equipo,SerialE){
        let nombre = '"'+equipo.Nombre+'"'
        let descripcion = '"'+equipo.Descripcion+'"'
        let serial = '"'+equipo.Serial+'"'
        let adquisicion =  '"'+equipo.Adquisicion+'"'
        let estatus =  '"'+equipo.Estatus+'"'

        console.log(SerialE)

        


        return new Promise((resolve, reject) => {
            console.log('Fuente de Actualizar')
            conection.query('UPDATE equipos SET Nombre = '+nombre+', Descripcion = '+descripcion+', Serial = '+serial+', Adquisicion = '+adquisicion+', Estatus = '+estatus+' WHERE Serial = '+SerialE,
            function (error, results, fields){
                if(error) throw error;
                console.log('Se ha actualizado el equipo ', results);
                resolve(equipo)
            });
        })
    }

    ActStatus(params){
        console.log(params)

        return new Promise((resolve, reject) => {
            console.log('Fuente de Act Status')
            conection.query('UPDATE Estatus SET '+Estatus+'WHERE Serial ='+params), function(error,results,fields){
                if(error) throw error;
                console.log('Se actualizo el estatus del equipo', results);
                resolve(params)
            }

        })
    }

    BorrarE(equipo){
        return new Promise((resolve, reject) => {
            console.log('Funciona el SQL de Borrar');
            conection.query('DELETE  FROM equipos WHERE Serial = '+ equipo, function (error, results, fields){
                if(error) throw error;
                console.log('Se ha borrado el equipo, puedes comprobarlo listando de nuevo o desde PHPMyAdmin', results);
                resolve(equipo)
            })
        })

    }


}




const equiposF = new EquiposFuente();
module.exports = equiposF; 