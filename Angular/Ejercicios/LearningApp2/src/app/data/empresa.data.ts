import { Empresa } from "../model/Empresa";

export const empresaData:Empresa = {
    nombre:'WWW.MASMUSIKA.COM',
    descripcion:'Tienda de instrumentos musicales',
    dueno:'Antonio Ledesma',
    tiendas:[
        {
            nombre:'MASMUSIKA GYE',
            direccion:{
                callePrincipal:'Rumichaca',
                calleSecundaria:'9 de Octubre',
                numeracion:823
            },
            productos:[
                {
                    instrumento:'Guitarra',
                    marca:'Fender',
                    familia:'American Pro',
                    precio:'$350'
                },
                {
                    instrumento:'Bateria',
                    marca:'Mapex',
                    familia:'Venus',
                    precio:'$500'
                },
                {
                    instrumento:'Piano',
                    marca:'Roland',
                    familia:'GP-3',
                    precio:'$900'
                }
            ]
        },
        {
            nombre:'MasMusika UIO',
            direccion:{
                callePrincipal:'10 de Agosto',
                calleSecundaria:'Daniel Hidalgo',
                numeracion:10
            },
            productos:[
                {
                    instrumento:'Guitarra',
                    marca:'Epiphone',
                    familia:'Les Paul',
                    precio:'$325'
                },
                {
                    instrumento:'Bateria',
                    marca:'Pearl',
                    familia:'Roadshow',
                    precio:'$525'
                },
                {
                    instrumento:'Piano',
                    marca:'Medeli',
                    familia:'MK-401',
                    precio:'$425'
                }
            ]
        }
    ]
}