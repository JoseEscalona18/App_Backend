const mysql = require('mysql');
const { select } = require('underscore');

const conection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
})


class FacturaFuente {
    listar(){
        return new Promise((resolve, reject)=>{
            console.log('Funciona el SQL De Listar')
            conection.query('SELECT * from `facturas`', function (error, results, fields) {
                if (error) throw error;
                console.log(results);
                resolve(results);
            });

        })
    }

    mostrarFactura(factura){
        return new Promise((resolve, reject)=>{
            console.log('Funciona el SQL de Mostrar uno')
            conection.query('SELECT * FROM `facturas` WHERE ID = '+ factura, function (error, results, fields) {
                if (error) throw error;
                console.log(results);
                resolve(results);
            });

        })
    }

    mostrarFactCI(factura){
        return new Promise((resolve, reject)=>{
            console.log('Funciona el SQL de Mostrar factura segun el CI_Admin')
            conection.query('SELECT * FROM `facturas` WHERE CI_Admin = "'+ factura +'"', function (error, results, fields) {
                if (error) throw error;
                console.log(results);
                resolve(results);
            });
        })
    }

    crear(factura){
        let prodcompr = '"'+factura.ProdCompr+'"'
        let preciototal = '"'+factura.PrecioTotal+'"'
        let fechac = '"'+factura.FechaC+'"'
        let horac =  '"'+factura.HoraC+'"'
        let domicilio =  '"'+factura.DomicilioF+'"'
        let proveedor =  '"'+factura.Proveedor+'"'
        let cif = '"'+factura.CIF_P+'"'
        let serialpr =  '"'+factura.SerialPr+'"'
        let cideladmin =  '"'+factura.CI_Admin+'"'

        console.log(factura)


        return new Promise((resolve, reject) => {
            console.log('Funciona el SQL de crear')
            conection.query('INSERT INTO facturas (ProdCompr, PrecioTotal, FechaC, HoraC, DomicilioF, Proveedor, CIF_P, SerialPr, CI_Admin) VALUES (' +prodcompr+ ', ' +preciototal+ ', ' +fechac+ ', ' +horac+ ', ' +domicilio+ ', ' +proveedor+ ', '+cif+', ' +serialpr+ ', ' +cideladmin+ ')',
            function (error, results, fields){
                if(error) throw error;
                console.log('Se ha guardado el registro');
                console.log(results);
                resolve(factura)
            }
        );
        })
    }

    ActualizarF(factura,idF){
        let prodcompr = '"'+factura.ProdCompr+'"'
        let preciototal = '"'+factura.PrecioTotal+'"'
        let fechac = '"'+factura.FechaC+'"'
        let horac =  '"'+factura.HoraC+'"'
        let domicilio =  '"'+factura.DomicilioF+'"'
        let proveedor =  '"'+factura.Proveedor+'"'
        let cif = '"'+factura.CIF_P+'"'
        let serialpr =  '"'+factura.SerialPr+'"'

        console.log(idF)

        


        return new Promise((resolve, reject) => {
            console.log('Fuente de Actualizar')
            conection.query('UPDATE facturas SET ProdCompr = '+prodcompr+', PrecioTotal = '+preciototal+', FechaC = '+fechac+', HoraC = '+horac+', DomicilioF = '+domicilio+', Proveedor = '+proveedor+', CIF_P = '+cif+', SerialPr = '+serialpr+' WHERE ID = '+idF,
            function (error, results, fields){
                if(error) throw error;
                console.log('Se ha actualizado la factura ', results);
                resolve(factura)
            });
        })
    }

    BorrarF(factura){
        return new Promise((resolve, reject) => {
            console.log('Funciona el SQL de Borrar');
            conection.query('DELETE  FROM facturas WHERE ID = '+ factura, function (error, results, fields){
                if(error) throw error;
                console.log('Se ha borrado la factura, puedes comprobarlo listando de nuevo o desde PHPMyAdmin', results);
                resolve('La factura con el ID:'+factura+ ','+'ha sido eliminada')
            })
        })

    }
    
    mostrarFFecha(factura){
        return new Promise((resolve, reject)=>{
            console.log('Funciona el SQL de Mostrar una factura por fecha')
            console.log(factura)
            conection.query('SELECT * FROM facturas WHERE FechaC = "'+ factura + '"', function (error, results, fields) {
                if (error) throw error;
                console.log(results);
                resolve(results);
            });

        })
    }

    mostrarFRango(factura1, factura2){
        return new Promise((resolve, reject)=>{
            console.log('Funciona el SQL de Mostrar facturas por rango de fechas')
            conection.query('SELECT * FROM facturas WHERE FechaC BETWEEN "'+ factura1 + '" AND "' + factura2 + '"', function (error, results, fields) {
                if (error) throw error;
                console.log(results);
                resolve(results);
            });

        })
    }
}

const facturaF = new FacturaFuente();
module.exports = facturaF; 