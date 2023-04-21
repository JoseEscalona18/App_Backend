const mysql = require('mysql');
const { select } = require('underscore');

const conection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
})


class ProveedorFuente {
    listar(){
        return new Promise((resolve, reject)=>{
            console.log('Funciona el SQL De Listar')
            conection.query('SELECT * from `proveedores`', function (error, results, fields) {
                if (error) throw error;
                console.log(results);
                resolve(results);
            });

        })
    }

    mostrarProveedor(proveedor){
        return new Promise((resolve, reject)=>{
            console.log('Funciona el SQL de Mostrar uno')
            conection.query('SELECT * FROM `proveedores` WHERE CIF = '+ proveedor, function (error, results, fields) {
                if (error) throw error;
                console.log(results);
                resolve(results);
            });

        })
    }

    mostrarporNum(proveedor){
        console.log(proveedor)
        return new Promise((resolve, reject)=>{
            console.log('Funciona el SQL de Mostrar proveedor segun el NumeroT')
            conection.query('SELECT * FROM `proveedores` WHERE NumeroM = "'+ proveedor +'"', function (error, results, fields) {
                if (error) throw error;
                console.log(results);
                resolve(results);
            });
        })
    }

    crear(proveedor){
        let empresa = '"'+proveedor.Empresa+'"'
        let cif = '"'+proveedor.CIF+'"'
        let web = '"'+proveedor.WEB+'"'
        let numero = '"'+proveedor.NumeroM+'"'
        let tipo = '"'+proveedor.TipodeS+'"'


        return new Promise((resolve, reject) => {
            console.log('Funciona el SQL de crear')
            conection.query('INSERT INTO proveedores (Empresa, CIF, WEB, NumeroM, TipodeS) VALUES (' +empresa+ ', ' +cif+ ', ' +web+ ', ' +numero+ ', ' +tipo+ ')',
            function (error, results, fields){
                if(error) throw error;
                console.log('Se ha guardado el registro');
                console.log(results);
                resolve(proveedor)
            }
        );
        })
    }

    ActualizarP(proveedor,Scif){
        let empresa = '"'+proveedor.Empresa+'"'
        let cif = '"'+proveedor.CIF+'"'
        let web = '"'+proveedor.WEB+'"'
        let numero = '"'+proveedor.NumeroM+'"'
        let tipo = '"'+proveedor.TipodeS+'"'

        console.log(Scif)

        return new Promise((resolve, reject) => {
            console.log('Fuente de Actualizar')
            conection.query('UPDATE proveedores SET Empresa = '+empresa+', CIF = '+cif+', WEB = '+web+', NumeroM = '+numero+', TipodeS = '+tipo+' WHERE CIF = '+Scif,
            function (error, results, fields){
                if(error) throw error;
                console.log('Se ha actualizado el proveedor ', results);
                resolve(proveedor)
            });
        })
    }

    BorrarP(proveedor){
        return new Promise((resolve, reject) => {
            console.log('Funciona el SQL de Borrar');
            conection.query('DELETE  FROM proveedores WHERE CIF = '+ proveedor, function (error, results, fields){
                if(error) throw error;
                console.log('Se ha borrado la proveedor, puedes comprobarlo listando de nuevo o desde PHPMyAdmin', results);
                resolve('La proveedor con el ID:'+proveedor+ ','+'ha sido eliminada')
            })
        })

    }
}

const proveedorF = new ProveedorFuente();
module.exports = proveedorF; 

