const mysql = require('mysql');
const { select } = require('underscore');

const conection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
})


class TrabajosFuente {
    listar(){
        return new Promise((resolve, reject)=>{
            console.log('Funciona el SQL De Listar')
            conection.query('SELECT * from `trabajos`', function (error, results, fields) {
                if (error) throw error;
                console.log(results);
                resolve(results);
            });

        })
    }

    mostrarTrabajo(trabajo){
        return new Promise((resolve, reject)=>{
            console.log('Funciona el SQL de Mostrar uno')
            conection.query('SELECT * FROM `trabajos` WHERE ID_Trabajo = '+ trabajo, function (error, results, fields) {
                if (error) throw error;
                console.log(results);
                resolve(results);
            });

        })
    }

    mostrarTReservaEQID(trabajo){
        console.log(trabajo)
        return new Promise((resolve, reject)=>{
            console.log('Funciona el SQL de Mostrar trabajo segun el ID de una reserva de equipo')
            conection.query('SELECT * FROM `trabajos` WHERE ID_ReservaEq= "'+ trabajo +'"', function (error, results, fields) {
                if (error) throw error;
                console.log(results);
                resolve(results);
            });
        })
    }

    crear(trabajo){
        let trabajon = '"'+trabajo.Trabajo+'"'
        let nombres = '"'+trabajo.Nombre_Solicitante+'"'
        let idreservaes = '"'+trabajo.ID_ReservaEs+'"'
        let idreservaeq = '"'+trabajo.ID_ReservaEq+'"'
        let descripcion = '"'+trabajo.Descripcion+'"'


        return new Promise((resolve, reject) => {
            console.log('Funciona el SQL de crear')
            conection.query('INSERT INTO trabajos (Trabajo, Nombre_Solicitante, ID_ReservaEs, ID_ReservaEq, Descripción) VALUES (' +trabajon+ ', ' +nombres+ ', ' +idreservaes+ ', ' +idreservaeq+ ', ' +descripcion+ ')',
            function (error, results, fields){
                if(error) throw error;
                console.log('Se ha guardado el registro');
                console.log(results);
                resolve(trabajo)
            }
        );
        })
    }

    ActualizarT(trabajo,IDT){
        let trabajon = '"'+trabajo.Trabajo+'"'
        let nombres = '"'+trabajo.Nombre_Solicitante+'"'
        let idreservaes = '"'+trabajo.ID_ReservaEs+'"'
        let idreservaeq = '"'+trabajo.ID_ReservaEq+'"'
        let descripcion = '"'+trabajo.Descripción+'"'

        console.log(IDT)

        return new Promise((resolve, reject) => {
            console.log('Fuente de Actualizar')
            conection.query('UPDATE trabajos SET Trabajo = '+trabajon+', Nombre_Solicitante = '+nombres+', ID_ReservaEs = '+idreservaes+', ID_ReservaEq = '+idreservaeq+', Descripcion = '+descripcion+' WHERE ID_Trabajo = '+IDT,
            function (error, results, fields){
                if(error) throw error;
                console.log('Se ha actualizado el trabajo ', results);
                resolve(trabajo)
            });
        })
    }

    BorrarT(trabajo){
        return new Promise((resolve, reject) => {
            console.log('Funciona el SQL de Borrar');
            conection.query('DELETE  FROM trabajos WHERE ID_Trabajo = '+ trabajo, function (error, results, fields){
                if(error) throw error;
                console.log('Se ha borrado la trabajo, puedes comprobarlo listando de nuevo o desde PHPMyAdmin', results);
                resolve('La trabajo con el ID:'+trabajo+ ','+'ha sido eliminada')
            })
        })

    }
}

const trabajoF = new TrabajosFuente();
module.exports = trabajoF; 

