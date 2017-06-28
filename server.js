'use strict';

var express = require('express');
var app = express();
var cors = require('cors');
var bodyParser = require('body-parser');

let publicHeroes = require('./modelo').publicHeroes;
let consultaDatosCliente = require('./modelo').consultaDatosCliente;
let consultaServiciosContratados = require('./modelo').consultaServiciosContratado;
let consultaCuentasAgregadasCliente = require('./modelo').consultaCuentasAgregadasCliente;
let consultaProductosContratados = require('./modelo').consultaProductosContratados;
let cambioContrasena = require('./modelo').cambioContrasena;
let envioNotificaciones = require('./modelo').envioNotificaciones;
let validacontrato =  require('./modelo').validacontrato;
let Validaotp  =   require('./modelo').Validaotp;
let login =  require('./modelo').login;
let autentificacion = require('./modelo').autentificacion;
let consultaContrato = require('./modelo').consultaContrato;
let errorServicio = require('./modelo').errorServicio;
let listarTokensOTP = require('./modelo').listarTokensOTP;
let activacionOTP = require('./modelo').activacionOTP;
let  bloqueoOTP = require('./modelo').bloqueoOTP;
let consultaPerfiles = require('./modelo').consultaPerfiles;
let consultaContratoerror= require('./modelo').consultaContratoerror;






app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());



// ===== Public Routes ======
// Post all public consultaDatosCliente
app.post(`/consultaDatosBasicos`, (req, res) => {
  res.json(consultaDatosCliente);
});

// Post all public consultaServiciosContratados
app.post(`/consultaServiciosContratados`, (req, res) => {
  res.json(consultaServiciosContratados);
});

// Post all public consultaServiciosContratados
app.post(`/consultaCuentasAgregadasCliente`, (req, res) => {
  res.json(consultaCuentasAgregadasCliente);
});

// Post all public consultaServiciosContratados
app.post(`/consultaProductosContratados`, (req, res) => {
  res.json(consultaProductosContratados);
});

// Post all public consultaServiciosContratados
app.post(`/cambioContrasena`, (req, res) => {
  res.json(cambioContrasena);
});

// Post all public consultaServiciosContratados
app.post(`/envioNotificaciones`, (req, res) => {
  res.json(envioNotificaciones);
});



// Post all public consultaServiciosContratados
app.post(`/validacontrato`, (req, res) => {
  res.json(validacontrato);
});

// Post all public consultaServiciosContratados
app.post(`/Validaotp`, (req, res) => {
  res.json(Validaotp);
});




// Post all public consultaServiciosContratados
app.post(`/listarTokensOTP`, (req, res) => {
  res.json(listarTokensOTP);
});


// Post all public consultaServiciosContratados
app.post(`/activacionOTP`, (req, res) => {
  res.json(activacionOTP);
});



// Post all public consultaServiciosContratados
app.post(`/bloqueoOTP`, (req, res) => {
  res.json(bloqueoOTP);
});





// Post all public consultaServiciosContratados
app.post(`/consultaPerfiles`, (req, res) => {
  res.json(consultaPerfiles);
});




//Los servicios de Middleware



// ===== Public Routes ======
// Post all public consultaDatosCliente
app.post(`/v1/consultaDatosBasicos`, (req, res) => {
  res.json(consultaDatosCliente);
});

// Post all public consultaServiciosContratados
app.post(`/v1/consultaServiciosContratados`, (req, res) => {
  res.json(consultaServiciosContratados);
});

// Post all public consultaServiciosContratados
app.post(`/v1/consultaCuentas`, (req, res) => {
  res.json(consultaCuentasAgregadasCliente);
});

// Post all public consultaServiciosContratados
app.post(`/v1/consultaProductosContratados`, (req, res) => {
  res.json(consultaProductosContratados);
});

// Post all public consultaServiciosContratados
app.post(`/v1/cambioContrasena`, (req, res) => {
  res.json(cambioContrasena);
});

// Post all public consultaServiciosContratados
app.post(`/v1/envioNotificaciones`, (req, res) => {
  res.json(envioNotificaciones );
});



// Post all public consultaServiciosContratados
app.post(`/v1/validacontrato`, (req, res) => {
  res.json(validacontrato);
});

// Post all public consultaServiciosContratados
app.post(`/v1/Validaotp`, (req, res) => {
  res.json(Validaotp);
});


// Post all public consultaServiciosContratados
app.post(`/v1/login`, (req, res) => {
  res.json(login);
});



// Post all public consultaServiciosContratados
app.post(`/v1/accesoCliente`, (req, res) => {
  
 
if(req.body.banderaAcceso=="")
   res.json(consultaContratoerror);
  
else {
	if(req.body.banderaAcceso=="1")
      res.json(autentificacion);
    else
      res.json(consultaContrato);
}
});

app.listen(3001);
console.log('Listening on localhost:3001');
