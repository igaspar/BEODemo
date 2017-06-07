'use strict';

const publicHeroes = [
  { 'id': 11, 'name': 'Mr. Nice' },
  { 'id': 12, 'name': 'Narco' },
  { 'id': 13, 'name': 'Bombasto' },
  { 'id': 14, 'name': 'Celeritas' },
  { 'id': 15, 'name': 'Magneta' },
  { 'id': 16, 'name': 'RubberMan' },
  { 'id': 17, 'name': 'Dynama' },
  { 'id': 18, 'name': 'Dr IQ' },
  { 'id': 19, 'name': 'Magma' },
  { 'id': 20, 'name': 'Tornado' }
];


const consultaDatosCliente = [
  {
  'numCliente': '','nombre': '',
  "listaDirecciones": 
  [
    {
      "direccion": "","poblacion": "",
      "ciudad": "",
      "estado": "",
      "cp": "",
      "tipoDireccion": ""
    }
  ],
   "rfc": "",
   "listaTelefonos": [{
      "telefono": "",
      "tipo": "telefono1"
    },
    {
      "telefono": "",
      "tipo": "telefono2"
    },
    {
      "telefono": "",
      "tipo": "celular"
    }
  ],
  "listaEmails": [{
    "mail": "",
    "activo": true
  }],
  "tipoPersona": "",
  "estatus": "",
  "sucursal": "",
  "vip": "",
  "responseStatus": 200,
  "responseError": ""
}
];


module.exports = {
  publicHeroes,
  consultaDatosCliente
}