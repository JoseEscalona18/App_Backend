const controller = {};
const Mostrar_equipos = require('../src/Equipos.json');

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

module.exports = controller