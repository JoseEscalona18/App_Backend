const mysql = require('mysql');
const { select } = require('underscore');

const conection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
})

class EspaciosFuente {
    listar(){
        return new Promise((resolve, reject)=>{
            console.log('Funciona el SQL de Espacios Para Listar')
            conection.query('SELECT * from `espacios`', function (error, results, fields) {
                if (error) throw error;
                console.log(results);
                resolve(results);
            });

        })
    }

    mostrarEspacio(espacio){
        return new Promise((resolve, reject)=>{
            console.log('Funciona el SQL de Mostrar uno')
            conection.query('SELECT * FROM `espacios` WHERE ID_Espacio = '+ espacio, function (error, results, fields) {
                if (error) throw error;
                console.log(results);
                resolve(results);
            });

        })
    }

    crearEspacio(espacio){
        let nombre = '"'+espacio.Nombre+'"'
        let descripcion = '"'+espacio.Descripcion+'"'
        let direccion = '"'+espacio.Direccion+'"'
        let estatus =  '"'+espacio.Estatus+'"'

        console.log(espacio)

        return new Promise((resolve, reject) => {
            console.log('Funciona el SQL de crear')
            conection.query('INSERT INTO espacios (Nombre, Descripcion, Direccion, Estatus) VALUES (' +nombre+ ', ' +descripcion+ ', ' +direccion+ ', ' +estatus+ ')',
            function (error, results, fields){
                if(error) throw error;
                console.log('Se ha guardado el espacio');
                console.log(results);
                resolve(espacio)
            }
        );
        })
    }

    ActualizarEspa(espacio,ID_Espacio){
        let nombre = '"'+espacio.Nombre+'"'
        let descripcion = '"'+espacio.Descripcion+'"'
        let direccion = '"'+espacio.Direccion+'"'
        let estatus =  '"'+espacio.Estatus+'"'

        console.log(ID_Espacio)

        


        return new Promise((resolve, reject) => {
            console.log('Fuente de Actualizar')
            conection.query('UPDATE espacios SET Nombre = '+nombre+', Descripcion = '+descripcion+', Direccion = '+direccion+', Estatus = '+estatus+' WHERE ID_Espacio = '+ID_Espacio,
            function (error, results, fields){
                if(error) throw error;
                console.log('Se ha actualizado el espacio ', results);
                resolve(espacio)
            });
        })
    }

    BorrarEspa(espacio){
        return new Promise((resolve, reject) => {
            console.log('Funciona el SQL de Borrar');
            conection.query('DELETE  FROM espacios WHERE ID_Espacio = '+ espacio, function (error, results, fields){
                if(error) throw error;
                resolve('Se ha borrado el espacio, puedes comprobarlo listando de nuevo o desde PHPMyAdmin')
            })
        })
    }

}

const espaciosF = new EspaciosFuente();
module.exports = espaciosF; 