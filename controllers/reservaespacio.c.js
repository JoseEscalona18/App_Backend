const controller = {};
var Mostrar_reservasEspacio= require('../src/ReservasEspacios.json');

const pos = require('underscore')

//VARIABLES
var none= "No"
var pedekratos = "No"
let aggria
var nono = "No"
///DOS VARIABLES "NO", RECORDAR

controller.consulta = function(req, res, next) {
    res.send(Mostrar_reservasEspacio)
};

controller.consultaIDD = function(req, res){
    none = 'No'
    const SANS  = req.params
    const SANSITO = Number(SANS.IDD)
  
    // RECORRE TODO EL JSON EN BUSQUEDA DE UN IDD IGUAL AL QUE SE COLOCÓ, SI NO ENCUENTRA NINGUNO MANDA UN MENSAJE ↓
    for (let f = 0; f < Mostrar_reservasEspacio.length; f++){
  
      if (Mostrar_reservasEspacio[f].IDD ==  SANSITO){
        res.send(Mostrar_reservasEspacio[f])
        none = 'Si'
      }
    }
    if(none == 'No') {
      res.send('No se encontraron reservas con ese IDD')
    }
};

controller.agregarResEsp = (req,res) => {

    // AGREGA LOS DATOS QUE SE ESTAN MANDANDO DEL BODY EN LAS RESPECTIVAS CONSTANTES ↓
    const {Nombre_Solicitante, FechaInicio, FechaFin, HoraInicio, HoraFin, Motivo, Tecnico, PersonasEspacio} = req.body
  
    // CONDICION PARA VER SI TODO LOS CAMPOS ESTÁN LLEGANDO ↓
    if (Nombre_Solicitante && FechaInicio && FechaFin && HoraInicio && HoraFin && Motivo && Tecnico && PersonasEspacio) {
      let IDD
      if (Mostrar_reservasEspacio.length == 0) {
        IDD = 1
        const nueva_reservaespa =  {IDD, ...req.body}
        Mostrar_reservasEspacio.push(nueva_reservaespa)
        res.send('Guardado correctamente')
      }else{
          IDD = Mostrar_reservasEspacio.length + 1
          // AGREGA LOS DATOS EN UNA NUEVA CONSTANTE ↓
  
          const nueva_reservaespa =  {IDD,...req.body}
          // AGREGA LOS DATOS EL JSON ↓
          Mostrar_reservasEspacio.push(nueva_reservaespa)
          // MENSAJE QUE INDICA QUE SE GUARDÓ CORRECTAMENTE ↓
          res.send('Guardado correctamente')
        }
    } else {
      // EN CASO DE QUE ALGUN CAMPO NO ESTÉ COLOCADO, SE EJECUTA ESTA CONDICIÓN ↓
      res.status(500).send('Peticion Erronea')
    }
};

controller.eliminarResEsp = function(req, res){
    pedekratos = 'No'
    const SIDD  = req.params
    const IDDA = Number(SIDD.IDD)
    pos.each(Mostrar_reservasEspacio,(reservaespa, i) =>{
  
      if (reservaespa.IDD == IDDA){
        Mostrar_reservasEspacio.splice(i,1)
        console.log('Eliminado correctamente')
        pedekratos = 'Si'
        res.send(Mostrar_reservasEspacio)
      }
    });
    if(none == 'No') {
      res.send('No se encontro ninguna reserva de espacio con ese numero de IDD')
    }
};

controller.editarResEsp = function(req, res){
    const REQUIEM = req.params
    const GIDDO = (REQUIEM.IDD)
    console.log(GIDDO);
    const {Nombre_Solicitante, FechaInicio, FechaFin, HoraInicio, HoraFin, Motivo, Tecnico, PersonasEspacio } = req.body;
    if (Nombre_Solicitante && FechaInicio && FechaFin && HoraInicio && HoraFin && Motivo && Tecnico && PersonasEspacio) {
      pos.each(Mostrar_reservasEspacio, (reservaespa, i) => {
        if(reservaespa.IDD == GIDDO ){
            reservaespa.Nombre_Solicitante = Nombre_Solicitante;
            reservaespa.FechaInicio = FechaInicio;
            reservaespa.FechaFin = FechaFin;
            reservaespa.HoraInicio = HoraInicio;
            reservaespa.HoraFin = HoraFin;
            reservaespa.Motivo = Motivo;
            reservaespa.Tecnico = Tecnico;
            reservaespa.PersonasEspacio = PersonasEspacio;
        }
      });
      res.send(Mostrar_reservasEspacio)
    }
    else{
      res.status(500).json({error: "Hubo un error"})
    }
};

controller.consultaFecha = function(req, res){
    nono = 'No'
    const sansoini  = req.params
    const sansifinish = sansoini
    let AcumuladorReservasE = []
    let acum = 0
    console.log(sansifinish)
  
    // RECORRE TODO EL JSON EN BUSQUEDA DE UNA FECHA IGUAL AL QUE SE COLOCÓ, SI NO ENCUENTRA NINGUNO MANDA UN MENSAJE ↓
    for (let f = 0; f < Mostrar_reservasEspacio.length; f++){
  
      if (Mostrar_reservasEspacio[f].FechaInicio == sansifinish){
        AcumuladorReservasE[acum] = Mostrar_reservasEspacio[f]
        acum = acum + 1
        nanot = 'Si'
      }
    }
    if(nono == 'No') {
      res.send('No se encontraron reservas con esa fecha de inicio')
    }else{
      res.send(AcumuladorReservasE)
    }
};

controller.consultaRangoFecha = function(req, res){

    //RANGOS GUARDA :FECHA1 Y :FECHA2 COMO PARAMETROS ↓
    const Rangos  = req.params
    //FINICIO GUARADA LA :FECHA1 ↓
    const Finicio = Rangos.Fecha1
    //FFIN GUARADA LA :FECHA2 ↓
    const FFin = Rangos.Fecha2
  
    ///HACE UN FILTRO QUE BUSCA POR LOS RANGOS DE FECHAS COLOCADAS ↓
    let buscarrango = Mostrar_reservasEspacio.filter(n => n.FechaInicio >= Finicio && n.FechaInicio <= FFin)
    res.send(buscarrango)
  };


module.exports = controller