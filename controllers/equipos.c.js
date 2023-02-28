const controller = {};
const Mostrar_equipos = require('../src/Equipos.json');
const _ = require('underscore')

    controller.consulta = function(req, res){
        res.send(Mostrar_equipos)
      };

    controller.consultaSerial = function(req, res){
        con = 'No'
        const CSerial  = req.params
        const SSerial = Number(CSerial.Serial)
      
        // RECORRE TODO EL JSON EN BUSQUEDA DE UN SERIAL IGUAL AL QUE SE COLOCÓ, SI NO ENCUENTRA NINGUNO MANDA UN MENSAJE ↓
        for (let f = 0; f < Mostrar_equipos.length; f++){
      
          if (Mostrar_equipos[f].Serial ==  SSerial){
            res.send(Mostrar_equipos[f])
            con = 'Si'
          }
        }
        if(con == 'No') {
          res.send('No se encontraron equipos con ese Serial')
        }
      };

    controller.agregarEquipo

    controller.eliminarEquipo = function(req, res){
        el = 'No'
        const ECSerial  = req.params
        const ESSerial = Number(ECSerial.Serial)
        _.each(Mostrar_equipos,(equipo, i) =>{
      
          if (equipo.Serial == ESSerial){
            Mostrar_equipos.splice(i,1)
            console.log('Eliminado correctamente')
            el = 'Si'
            res.send(Mostrar_equipos)
          }
        });
        if(con == 'No') {
          res.send('No se encontraron equipos con ese Serial')
        }
       
      };

module.exports = controller