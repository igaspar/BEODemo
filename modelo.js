'use strict';




const consultaPerfiles = {
	"facultadesSimples":["MVN_MNU_OPCION1", "MVN_MNU_OPCION2","MVN_MNU_OPCION3"],
	"responseStatus": 0,
	"responseError": ""
}



 const bloqueoOTP = {
"codigoRespuesta": 21,
"descRespuesta": "Token no existe"
}

const activacionOTP = {
"codigoRespuesta": 0,
"descRespuesta": "OK"
}


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
          
          "cvePais": 52,		 
 	  		  "codArea": 55,
          "telefono": "04455517116",
          "tipoTelefono": "celular"
          
          
        },
        {
          "cvePais": 52,		 
 	  		  "codArea": 55,
          "telefono": "04455517116",
          "tipoTelefono": "casa"
        },
        {
          "cvePais": 52,		 
 	  		  "codArea": 55,
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

const  cambioContrasena  = {
	"listCambioContrasena": {
		"codigo": 0,
		"mensaje": ""
	},
	"responseStatus": "200",
	"responseError": ""
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
	"numCliente": "123454354545",
	"nombre": "Empresa Mexicana de Autopartes A.S",
	"listaDirecciones": [{
		"direccion": "Naucalpan #12 colonia maravillas",
		"poblacion": "Estado de Mexico",
		"ciudad": "Mexico",
		"estado": "Estado de Mexico",
		"cp": "15420",
		"tipoDireccion": "1"
	}],
	"rfc": "DEGA880407HFLNR01",
	"listaTelefonos": [{
			"telefono": "5529017222",
			"tipoTelefono": "celular"
		},{
			"telefono": "5529017223",
			"tipoTelefono": "celular"
		},{
			"telefono": "5529017224",
			"tipoTelefono": "celular"
		},
	
	],
	"listaEmails": [{
		"mail": "edwin@multiva.com",
		"activo": true,
    "tipoEmail" : "empresa"
	}],
	"tipoPersona": "moral",
	"estatus": "a",
	"sucursal": "313",
	"vip": "1",
	"responseStatus": 200,
	"responseError": ""
}

module.exports = {
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
  listarTokensOTP,
  activacionOTP,
  bloqueoOTP,
  consultaPerfiles
}
