const controller = {};
var Mostrar_reservasEqui = require('../src/ReservasEquipos.json');

const pse = require('underscore')

//VARIABLES
var non = "No"
var pe = "No"
var nanot= "No"
///DOS VARIABLES"NO", RECORDAR

controller.consulta = function(req, res, next) {
    res.send(Mostrar_reservasEqui)
};

controller.consultaIDE = function(req, res){
    non = 'No'
    const CID  = req.params
    const SID = Number(CID.IDE)
  
    // RECORRE TODO EL JSON EN BUSQUEDA DE UN IDE IGUAL AL QUE SE COLOCÓ, SI NO ENCUENTRA NINGUNO MANDA UN MENSAJE ↓
    for (let f = 0; f < Mostrar_reservasEqui.length; f++){
  
      if (Mostrar_reservasEqui[f].IDE ==  SID){
        res.send(Mostrar_reservasEqui[f])
        non = 'Si'
      }
    }
    if(non == 'No') {
      res.send('No se encontraron reservas con ese IDE')
    }
};

controller.agregarResEqu = (req,res) => {

    // AGREGA LOS DATOS QUE SE ESTAN MANDANDO DEL BODY EN LAS RESPECTIVAS CONSTANTES ↓
    const { IDE, Nombre_Solicitante, FechaInicio, FechaFin, HoraInicio, HoraFin, Motivo, Equipos} = req.body
  
    // CONDICION PARA VER SI TODO LOS CAMPOS ESTÁN LLEGANDO ↓
    if (Nombre_Solicitante && FechaInicio && FechaFin && HoraInicio && HoraFin && Motivo && Equipos) {
      let IDE
      if (Mostrar_reservasEqui.length == 0) {
        IDE = 1
        const nueva_reservaequi =  {IDE, ...req.body}
        Mostrar_reservasEqui.push(nueva_reservaequi)
        res.send('Guardado correctamente')

      }else{
        IDE = Mostrar_reservasEqui.length + 1
        // AGREGA LOS DATOS EN UNA NUEVA CONSTANTE ↓
        const nueva_reservaequi =  {IDE, ...req.body}
        // AGREGA LOS DATOS EL JSON ↓
        Mostrar_reservasEqui.push(nueva_reservaequi)
        // MENSAJE QUE INDICA QUE SE GUARDÓ CORRECTAMENTE ↓
        res.send('Guardado correctamente')
      }
    } else {
      // EN CASO DE QUE ALGUN CAMPO NO ESTÉ COLOCADO, SE EJECUTA ESTA CONDICIÓN ↓
      res.status(500).send('Peticion Erronea')
    }
};

controller.eliminarResEqu = function(req, res){
    pe = 'No'
    const SCID  = req.params
    const PID = Number(SCID.IDE)
    pse.each(Mostrar_reservasEqui,(reservaequi, i) =>{
  
      if (reservaequi.IDE == PID){
        Mostrar_reservasEqui.splice(i,1)
        console.log('Eliminado correctamente')
        pe = 'Si'
        res.send(Mostrar_reservasEqui)
      }
    });
    if(non == 'No') {
      res.send('No se encontro ninguna de reserva equipo con ese IDD')
    }
};

controller.editarResEqu = function(req, res){
    const RQID = req.params
    const GUID = Number(RQID.IDE)
    console.log(GUID);
    const { FechaInicio, FechaFin, HoraInicio, HoraFin, Motivo, Equipos} = req.body;
    if (FechaInicio && FechaFin && HoraInicio && HoraFin && Motivo && Equipos) {
      pse.each(Mostrar_reservasEqui, (reservaequi, i) => {
        if(reservaequi.IDE == GUID ){
          reservaequi.FechaInicio = FechaInicio;
          reservaequi.FechaFin = FechaFin;
          reservaequi.HoraInicio = HoraInicio;
          reservaequi.HoraFin = HoraFin;
          reservaequi.Motivo = Motivo;
          reservaequi.Equipos = Equipos;
        }
      });
      res.send(Mostrar_reservasEqui)
    }
    else{
      res.status(500).json({error: "Hubo un error"})
    }
  };

controller.consultaFechaInicio = function(req, res){
    nanot = 'No'
    const sansini  = req.params
    const sansfinish = sansini.FechaInicio
    let AcumuladorReservas = []
    let acum = 0
    console.log(sansfinish)
  
    // RECORRE TODO EL JSON EN BUSQUEDA DE UNA FECHA IGUAL AL QUE SE COLOCÓ, SI NO ENCUENTRA NINGUNO MANDA UN MENSAJE ↓
    for (let f = 0; f < Mostrar_reservasEqui.length; f++){
  
      if (Mostrar_reservasEqui[f].FechaInicio == sansfinish){
        AcumuladorReservas[acum] = Mostrar_reservasEqui[f]
        acum = acum + 1
        nanot = 'Si'
      }
    }
    if(nanot == 'No') {
      res.send('No se encontraron reservas con esa fecha de inicio')
    }else{
      res.send(AcumuladorReservas)
    }
};

controller.consultaRangoFecha =  function(req, res){

    //RANGOS GUARDA :FECHA1 Y :FECHA2 COMO PARAMETROS ↓
    const Rangos  = req.params
    //FINICIO GUARADA LA :FECHA1 ↓
    const Finicio = Rangos.Fecha1
    //FFIN GUARADA LA :FECHA2 ↓
    const FFin = Rangos.Fecha2
  
    ///HACE UN FILTRO QUE BUSCA POR LOS RANGOS DE FECHAS COLOCADAS ↓
    let buscarrango = Mostrar_reservasEqui.filter(n => n.FechaInicio >= Finicio && n.FechaInicio <= FFin)
    res.send(buscarrango)
  };

module.exports = controller