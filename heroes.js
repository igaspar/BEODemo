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

const listarTokensOTP = {
"listTokens": [{
"usuario": 1234567890,
"tokenSerial": "7121804170B32HOSTVER",
"nombreUsuario": "SAUL PEREZ SANCHEZ",
"fechaAlta": "06-06-2017T08:20:13",
"tokenStatus": "f"
}, 
{
"usuario": 9876543210,
"tokenSerial": "7121804170B32HOSTVER",
"nombreUsuario": "RAUL PEREZ SANCHEZ",
"fechaAlta": "06-06-2017T08:20:13",
"tokenStatus": "t"
}

]

,
"responseStatus": 200,
"responseError": ""
}


const autentificacion  = {
  "consultaDatosBasicos": [
    {
      "fecha-ultimo-acceso": "13062016",
      "mail": "aaa@gmail.com",
      "numCliente": "343243434",
      "nombre": "Edwind Ramirez Perez",
      "rfc": "dega880407hflnr08",
      "listaTelefonos": [
        {
          "telefono": "04455517116",
          "tipoTelefono": "celular"
        },
        {
          "telefono": "04455517116",
          "tipoTelefono": "casa"
        },
        {
          "telefono": "04455517116",
          "tipoTelefono": "oficina"
        }
        
      ],
      "listaEmails": [
        {
          "mail": "oficina@hotmail.com",
          "activo": "1",
          "tipoEmail": "oficina"
        },
        {
          "mail": "oficina@hotmail.com",
          "activo": "1",
          "tipoEmail": "oficina"
        },
        {
          "mail": "oficina@hotmail.com",
          "activo": "1",
          "tipoEmail": "oficina"
        }
      ],
      "tipoPersona": "moral",
      "estatus": "activo",
      "sucursal": "06",
      "vip": "01",
    
    }
  ],
  "consultaServiciosContratados": [
    {
      "listaServicios": [
        {
          "nombre": "Multitoseria",
          "contratado": "1"
        }
      ]
    }
  ],
  "consultaProductosContratados": [
    {
      "ListaProductos": [
        {
          "nombre": "Trasferencia de tarjetas",
          "contratado": "1"
        }
      ]
    }
  ],
  "consultaCuentasAgregadasCliente": [
    {
      "listCuentasCliente": [
        {
          "numeroDeCuenta": "string",
          "idProducto": "string",
          "descripcionProducto": "string",
          "divisa": "string",
          "saldo": "Big Decimal",
          "idSucursal": "integer",
          "nombreSucursal": "string"
        }
      ],
      "listCreditosCliente": [
        {
          "numeroDeCuenta": "string",
          "idProducto": "string",
          "descripcionProducto": "string",
          "divisa": "string",
          "saldo": "Big Decimal",
          "idSucursal": "integer",
          "nombreSucursal": "string"
        }
      ],
      "listInversionesCliente": [
        {
          "numeroDeCuenta": "string",
          "idProducto": "string",
          "descripcionProducto": "string",
          "divisa": "string",
          "saldo": "Big Decimal",
          "idSucursal": "integer",
          "nombreSucursal": "string"
        }
      ],
      "responseStatus": "200",
      "responseError": "respuesta"
    }
  ]
}



const login  = 
 {
  "consultaDatosBasicos": [
    {
      "fecha-ultimo-acceso": "date",
      "mail": "string",
      "numCliente": "Long",
      "nombre": "String",
      "listaDirecciones": [
        {
          "direccion": "String",
          "poblacion": "String",
          "ciudad": "String",
          "estado": "String",
          "cp": "String",
          "tipoDireccion": "String"
        }
      ],
      "rfc": "String",
      "listaTelefonos": [
        {
          "telefono": "Integer",
          "tipoTelefono": "String"
        }
      ],
      "listaEmails": [
        {
          "mail": "String",
          "activo": "Boolean",
          "tipoEmail": "String"
        }
      ],
      "tipoPersona": "String",
      "estatus": "String",
      "sucursal": "String",
      "vip": "String",
      "responseStatus": "String",
      "responseError": "String"
    }
  ],
  "consultaServiciosContratados": [
    {
      "listaServicios": [
        {
          "nombre": "String",
          "contratado": "Boolean"
        }
      ],
      "responseStatus": "String",
      "responseError": "String"
    }
  ],
  "consultaProductosContratados": [
    {
      "ListaProductos": [
        {
          "nombre": "String",
          "contratado": "Boolean"
        }
      ],
      "responseStatus": "String",
      "responseError": "String"
    }
  ],
  "consultaCuentasAgregadasCliente": [
    {
      "listCuentasCliente": [
        {
          "numeroDeCuenta": "string",
          "idProducto": "string",
          "descripcionProducto": "string",
          "divisa": "string",
          "saldo": "Big Decimal",
          "idSucursal": "integer",
          "nombreSucursal": "string"
        }
      ],
      "listCreditosCliente": [
        {
          "numeroDeCuenta": "string",
          "idProducto": "string",
          "descripcionProducto": "string",
          "divisa": "string",
          "saldo": "Big Decimal",
          "idSucursal": "integer",
          "nombreSucursal": "string"
        }
      ],
      "listInversionesCliente": [
        {
          "numeroDeCuenta": "string",
          "idProducto": "string",
          "descripcionProducto": "string",
          "divisa": "string",
          "saldo": "Big Decimal",
          "idSucursal": "integer",
          "nombreSucursal": "string"
        }
      ],
      "responseStatus": "string",
      "responseError": "string"
    }
  ]
}


const errorServicio  = 
  {
 
  "CodigoRespuesta": 234,
  "DescRespuesta": "Error en validar el contrato"
  }


const Validaotp  = 
  {
  "Antiphishing": 989999,
  "CodigoRespuesta": 0,
  "DescRespuesta": "Usuario correcto y token correcto"
  }

const validacontrato  = 
  {
    "CodigoRespuesta": 0
  }

const  envioNotificaciones  = 
  {
	"responseStatus": "200",
	"responseError": ""
  } 

const  cambioContrasena  = 
  {
    "CodigoRespuesta": "0"
  }

const consultaCuentasAgregadasCliente = 
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
	
const consultaProductosContratados  = 
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

const consultaServiciosContratado = 
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

const consultaContrato  =
{
  "contratoAceptado":0 
}


const consultaDatosCliente = 
 {
	"numCliente": "",
	"nombre": "",
	"listaDirecciones": [{
		"direccion": "",
		"poblacion": "",
		"ciudad": "",
		"estado": "",
		"cp": "",
		"tipoDireccion": ""
	}],
	"rfc": "",
	"listaTelefonos": [{
			"cvePais": 52,
			"codArea": 55,
			"telefono": 123456789,
			"tipo": "telefono1"
		},
		{
			"cvePais": "",
			"codArea": "",
			"telefono": "",
			"tipo": "telefono2"
		},
		{
			"cvePais": "",
			"codArea": "",
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

module.exports = {
  publicHeroes,
  consultaDatosCliente,
  consultaServiciosContratado,
  consultaProductosContratados,
  consultaCuentasAgregadasCliente,
  cambioContrasena,
  envioNotificaciones,
  validacontrato,
  Validaotp,
  login,
  autentificacion,
  consultaContrato,
  errorServicio,
  listarTokensOTP
}
