const mysql = require('mysql');
const { select } = require('underscore');

const conection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
})

class reservasequiposFuente {
    listarRequi(){
        return new Promise((resolve, reject)=>{
            console.log('Funciona el SQL De Listar REservas de Equipos')
            conection.query('SELECT * from `reservasequipos`', function (error, results, fields) {
                if (error) throw error;
                console.log(results);
                resolve(results);
            });

        })
    }

    mostrarREQ(reservadeequipo){
        return new Promise((resolve, reject)=>{
            console.log('Funciona el SQL de Mostrar uno')
            conection.query('SELECT * FROM `reservasequipos` WHERE ID = '+ reservadeequipo, function (error, results, fields) {
                if (error) throw error;
                console.log(results);
                resolve(results);
            });

        })
    }



    RegistrarReservasDeEquipos(reservadeequipo){
        let nombre = '"'+reservadeequipo.Nombre_Solicitante+'"'
        let ci = '"'+reservadeequipo.CI_Solicitante+'"'
        let fechainicio = '"'+reservadeequipo.FechaInicio+'"'
        let fechafin = '"'+reservadeequipo.FechaFin+'"'
        let horainicio = '"'+reservadeequipo.HoraInicio+'"'
        let horafi = '"'+reservadeequipo.HoraFi+'"'
        let serial =  '"'+reservadeequipo.SerialesE+'"'
        let equipo =  '"'+reservadeequipo.Equipos+'"'
        let motivo = '"'+reservadeequipo.Motivo+'"'

        console.log(reservadeequipo)

        return new Promise((resolve, reject) => {
            console.log('Funciona el SQL de crear')
            conection.query('INSERT INTO reservasequipos (Nombre_Solicitante, CI_Solicitante, FechaInicio, FechaFin, HoraInicio, HoraFi, SerialesE, Equipos, Motivo) VALUES (' +nombre+ ', ' +ci+ ', ' +fechainicio+ ', ' +fechafin+ ',' +horainicio+ ',' +horafi+ ',' +serial+ ','+equipo+','+motivo+')',
            function (error, results, fields){
                if(error) throw error;
                console.log('Se ha registrado a la persona en el sistema');
                console.log(results);
                resolve(reservadeequipo)
            }
        );
        })
    }

    ActualizarDatos(reservadeequipo,IDeq){
        let nombre = '"'+reservadeequipo.Nombre_Solicitante+'"'
        let ci = '"'+reservadeequipo.CI_Solicitante+'"'
        let fechainicio = '"'+reservadeequipo.FechaInicio+'"'
        let fechafin = '"'+reservadeequipo.FechaFin+'"'
        let horainicio = '"'+reservadeequipo.HoraInicio+'"'
        let horafi = '"'+reservadeequipo.HoraFi+'"'
        let serial =  '"'+reservadeequipo.SerialesE+'"'
        let equipo =  '"'+reservadeequipo.Equipos+'"'
        let motivo = '"'+reservadeequipo.Motivo+'"'

        console.log(IDeq)

        return new Promise((resolve, reject) => {
            console.log('Fuente de Actualizar')
            conection.query('UPDATE reservasequipos SET Nombre_Solicitante = '+nombre+', CI_Solicitante = '+ci+', FechaInicio = '+fechainicio+', FechaFin = '+fechafin+', HoraInicio = '+horainicio+',HoraFi = '+horafi+', SerialesE = '+serial+', Equipos = '+equipo+', Motivo = '+motivo+' WHERE ID = '+IDeq,
            function (error, results, fields){
                if(error) throw error;
                console.log('Se ha actualizado la reserva de equipo ', results);
                resolve(reservadeequipo)
            });
        })
    }

    BorrarReserva(reservadeequipo){
        return new Promise((resolve, reject) => {
            console.log('Funciona el SQL de Borrar');
            conection.query('DELETE  FROM reservasequipos WHERE ID = '+ reservadeequipo, function (error, results, fields){
                if(error) throw error;
                console.log('Se ha borrado la reserva del equipo, puedes comprobarlo listando de nuevo o desde PHPMyAdmin   ', results);
                resolve('La reserva de equipo con el ID' + reservadeequipo + ',ha sido eliminada')
            })
        })
    }

    mostrarREQF(reservadeequipo){
        return new Promise((resolve, reject)=>{
            console.log('Funciona el SQL de Mostrar una reserva por fecha')
            console.log(reservadeequipo)
            conection.query('SELECT * FROM reservasequipos WHERE FechaInicio = "'+ reservadeequipo + '"', function (error, results, fields) {
                if (error) throw error;
                console.log(results);
                resolve(results);
            });

        })
    }

    mostrarREQRango(reservadeequipo1, reservadeequipo2){
        return new Promise((resolve, reject)=>{
            console.log('Funciona el SQL de Mostrar una reserva por rango de fechas')
            conection.query('SELECT * FROM reservasequipos WHERE FechaInicio BETWEEN "'+ reservadeequipo1 + '" AND "' + reservadeequipo2 + '"', function (error, results, fields) {
                if (error) throw error;
                console.log(results);
                resolve(results);
            });

        })
    }


}


const reservasEquiF = new reservasequiposFuente();
module.exports = reservasEquiF