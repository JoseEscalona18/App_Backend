const controller = {};
const Mostrar_equipos = require('../src/Equipos.json');

    controller.consulta = function(req, res){
        res.send(Mostrar_equipos)
      }

module.exports = controller