const mysql = require('mysql');
const { select } = require('underscore');

const conection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
})

class reservasespacioFuente {
    listarRespa(){
        return new Promise((resolve, reject)=>{
            console.log('Funciona el SQL De Listar REservas de Espacios')
            conection.query('SELECT * from `reservasespacios`', function (error, results, fields) {
                if (error) throw error;
                console.log(results);
                resolve(results);
            });

        })
    }

    mostrarRES(reservadeespacio){
        return new Promise((resolve, reject)=>{
            console.log('Funciona el SQL de Mostrar uno')
            conection.query('SELECT * FROM `reservasespacios` WHERE ID = '+ reservadeespacio, function (error, results, fields) {
                if (error) throw error;
                console.log(results);
                resolve(results);
            });

        })
    }

    RegistrarReservaDeEspacio(reservadeespacio){
        console.log(reservadeespacio)
        let nombre = '"'+reservadeespacio.Nombre_Solicitante+'"'
        let ci = '"'+reservadeespacio.CI_Solicitante+'"'
        let fechainicio = '"'+reservadeespacio.FechaInicio+'"'
        let fechafin = '"'+reservadeespacio.FechaFin+'"'
        let horainicio = '"'+reservadeespacio.HoraInicio+'"'
        let horafi = '"'+reservadeespacio.HoraFi+'"'
        let espacioid = '"'+reservadeespacio.ID_Espa+'"'
        let espacio =  '"'+reservadeespacio.Espacio+'"'
        let motivo = '"'+reservadeespacio.Motivo+'"'
        let tecnico = '"'+reservadeespacio.Tecnico+'"'
        let citecnico = '"'+reservadeespacio.CI_Tecnico+'"'

        return new Promise((resolve, reject) => {
            console.log('Funciona el SQL de crear')
            conection.query('INSERT INTO reservasespacios (Nombre_Solicitante, CI_Solicitante, FechaInicio, FechaFin, HoraInicio, HoraFi, ID_Espa, Espacio, Motivo, Tecnico, CI_Tecnico) VALUES (' +nombre+ ', ' +ci+ ', ' +fechainicio+ ', ' +fechafin+ ',' +horainicio+ ',' +horafi+ ','+espacioid+','+espacio+','+motivo+','+tecnico+','+citecnico+')',
            function (error, results, fields){
                if(error) throw error;
                console.log('Se ha registrado a la persona en el sistema');
                console.log(results);
                resolve(reservadeespacio)
            }
        );
        })
    }

    ActualizarDatos(reservadeespacio,IDes){
        console.log(reservadeespacio)
        let nombre = '"'+reservadeespacio.Nombre_Solicitante+'"'
        let ci = '"'+reservadeespacio.CI_Solicitante+'"'
        let fechainicio = '"'+reservadeespacio.FechaInicio+'"'
        let fechafin = '"'+reservadeespacio.FechaFin+'"'
        let horainicio = '"'+reservadeespacio.HoraInicio+'"'
        let horafi = '"'+reservadeespacio.HoraFi+'"'
        let espacioid = '"'+reservadeespacio.ID_Espa+'"'
        let espacio =  '"'+reservadeespacio.Espacio+'"'
        let motivo = '"'+reservadeespacio.Motivo+'"'
        let tecnico = '"'+reservadeespacio.Tecnico+'"'
        let citecnico = '"'+reservadeespacio.CI_Tecnico+'"'

        return new Promise((resolve, reject) => {
            console.log('Fuente de Actualizar')
            conection.query('UPDATE reservasespacios SET Nombre_Solicitante = '+nombre+', CI_Solicitante = '+ci+', FechaInicio = '+fechainicio+', FechaFin = '+fechafin+', HoraInicio = '+horainicio+',HoraFi = '+horafi+', ID_Espa = '+espacioid+', Espacio = '+espacio+', Motivo = '+motivo+',Tecnico = '+tecnico+', CI_Tecnico = '+citecnico+' WHERE ID = '+IDes,
            function (error, results, fields){
                if(error) throw error;
                console.log('Se ha actualizado la reserva de espacio ', results);
                resolve(reservadeespacio)
            });
        })
    }

    BorrarReserva(reservadeespacio){
        return new Promise((resolve, reject) => {
            console.log('Funciona el SQL de Borrar');
            conection.query('DELETE  FROM reservasespacios WHERE ID = '+ reservadeespacio, function (error, results, fields){
                if(error) throw error;
                console.log('Se ha borrado la reserva del espacio, puedes comprobarlo listando de nuevo o desde PHPMyAdmin   ', results);
                resolve('La reserva de equipo con el ID' + reservadeespacio + ',ha sido eliminada')
            })
        })
    }
}

const reservasEspaF = new reservasespacioFuente();
module.exports = reservasEspaF