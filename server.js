'use strict';

const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

let publicHeroes = require('./heroes').publicHeroes;
let consultaDatosCliente = require('./heroes').consultaDatosCliente;
let consultaServiciosContratados = require('./heroes').consultaServiciosContratado;
let consultaCuentasAgregadasCliente = require('./heroes').consultaCuentasAgregadasCliente;
let consultaProductosContratados = require('./heroes').consultaProductosContratados;
let cambioContrasena = require('./heroes').cambioContrasena;
let envioNotificaciones = require('./heroes').envioNotificaciones;
let validacontrato =  require('./heroes').validacontrato;
let Validaotp  =   require('./heroes').Validaotp;
let login =  require('./heroes').login;
let autentificacion = require('./heroes').autentificacion;
let consultaContrato = require('./heroes').consultaContrato;
let errorServicio = require('./heroes').errorServicio;






const publicEndpoint = '/BEO';
const secretEndpoint = '/api/secret';

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
app.post(`/v1/consultaCuentasAgregadasCliente`, (req, res) => {
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
  res.json(envoNotificaciones);
});

// Post all public consultaServiciosContratados
app.post(`/v1/envioNotificaciones`, (req, res) => {
  res.json(envioNotificaciones);
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
app.post(`/v1/autentificacion`, (req, res) => {
  
 
if(req.body.banderaAutentificacion=="")
   res.json(consultaContrato );
  
else {
	if(req.body.banderaAutentificacion=="1")
      res.json(autentificacion);
    else
      res.json(errorServicio);
}
});



 




// Get an individual public hero
app.get(`${publicEndpoint}/heroes/:id`, (req, res) => {
  const hero = publicHeroes.find(hero => hero.id == req.params.id);
  if (!hero) {
    res.json({ message: 'No hero found!' });
  }
  res.json(hero);
});

// Save a new secret hero
app.post(`${publicEndpoint}/heroes`, (req, res) => {
  const lastHero = publicHeroes[publicHeroes.length - 1].id;

  const hero = {
    id: lastHero + 1,
    name: req.body.name
  }

  publicHeroes.push(hero);

  res.json(hero);
});

// Update a public hero
app.put(`${publicEndpoint}/heroes/:id`, (req, res) => {
  let hero = publicHeroes.find(hero => hero.id == req.params.id);
  hero.name = req.body.name;
  res.json({ message: 'Hero saved!' });
});

// Delete a public hero
app.delete(`${publicEndpoint}/heroes/:id`, (req, res) => {
  const hero = publicHeroes.find(hero => hero.id == req.params.id);
  const index = publicHeroes.indexOf(hero);
  publicHeroes.splice(index, 1);
  res.json({ message: 'Hero deleted' });
});


app.listen(3001);
console.log('Listening on localhost:3001');
