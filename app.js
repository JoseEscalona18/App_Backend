var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var equiposRouter = require('./routes/equipos');
var espaciosRouter = require('./routes/espacios');

var app = express();

//PRUEBAAAA

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//MIDDLEWARE ↓↓↓↓↓

//↓ MUESTRA EN CONSOLA LAS PETICIONES ↓
app.use(logger('dev'));
//↓ SOPORTA LOS FORMATOS JSON Y LOS ENTIENDE ↓
app.use(express.json());
//↓ ENTIENDE LOS DATOS QUE LLEGAN DESDE EL FORMULARIO (ESTOS DATOS SON SENCILLOS, COMO TEXTOS O DATOS QUE VIENEN DESDE INPUTS) ↓
app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api/equipos', equiposRouter);
app.use('/api/espacios', espaciosRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler

app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
