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
const consultaCuentasAgregadasCliente = [
	{
	"listCuentasCliente": [{
		"numeroDeCuenta": "",
		"idProducto": "",
		"descripcionProducto": "",
		"divisa": "",
		"saldo": 1532,
		"idSucursal": 124,
		"nombreSucursal": ""
	}, {
		"numeroDeCuenta": "",
		"idProducto": "",
		"descripcionProducto": "",
		"divisa": "",
		"saldo": 1532,
		"idSucursal": 124,
		"nombreSucursal": ""
	}],
              "listCreditosCliente": [{
		"numeroDeCuenta": "",
		"idProducto": "",
		"descripcionProducto": "",
		"divisa": "",
		"saldo": 1532,
		"idSucursal": 124,
		"nombreSucursal": ""
	}, {
		"numeroDeCuenta": "",
		"idProducto": "",
		"descripcionProducto": "",
		"divisa": "",
		"saldo": 1532,
		"idSucursal": 124,
		"nombreSucursal": ""
	}],
    "listInversionesCliente": [{
		"numeroDeCuenta": "",
		"idProducto": "",
		"descripcionProducto": "",
		"divisa": "",
		"saldo": 1532,
		"idSucursal": 124,
		"nombreSucursal": ""
	}, {
		"numeroDeCuenta": "",
		"idProducto": "",
		"descripcionProducto": "",
		"divisa": "",
		"saldo": 1532,
		"idSucursal": 124,
		"nombreSucursal": ""
	}],
	"responseStatus": "200",
	"responseError": ""
}
	]  





const consultaProductosContratados  = [
{
	"listaProductos": [{
			"nombre": "CUENTA DE CHEQUES",
			"idProducto": "CHQ"
		},
		{
			"nombre": "TARJETA DE CREDITO",
			"idProducto": "TDC"
		}
	],
	"responseStatus": 200,
	"responseError": ""
}
]; 



const consultaServiciosContratado = [
{
	"listaServicios": [{
			"nombre": "MULTITESORERIA",
			"contratado": true
		},
		{
			"nombre": "PAGO DE NOMINA",
			"contratado": true
		}
	],
	"responseStatus": 200,
	"responseError": ""
}
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
  consultaDatosCliente,
  consultaServiciosContratado,
  consultaProductosContratados,
  consultaCuentasAgregadasCliente



}