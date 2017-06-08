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
