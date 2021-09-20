const { model, Schema } = require('mongoose');

const UserSchema = new Schema({

    "Informacion personal": {
        nombre: {type: String},

        apellido: {type: String},

        edad: {type:Number},

        "Fecha de nacimiento": {type: String},

        telefono : Number,

        domicilio: {type: String},

        dni: {type:Number},

        tutores :{
            nombre_tutor: {type: String},

            apellido_tutor: {type: String},

            dni_tutor:{type: String},

            domicilio: {type: String}
        },

    },
   
    "Intereses/hobby": {
        musica : {
            "cantante favorito": {type: String},
            "banda favorita": {type: String},
            "genero": {type: String}
        },
        actividades : {
            "deportes": {type: Boolean},
            "Mirar peliculas/series":{type: Boolean},
            "salir": {type: Boolean},
            "dibujar/pintar": {type: Boolean}
        }
    },

    "Datos Academicos/Profesionales":{

        Primaria: {
            Completo_p :{type: Boolean},
            Institucion_p: {type: String},
            direccion_p: {type: String}
        },

        Secundaria: {
            Completo_s : {type: Boolean},
            Institucion_s: {type: String},
            direccion_s: {type: String}
        },

        carrera:{
            nombreCarrera:{type: String},
            institucion_carrera: {type: String} ,
            direccion_insti_c: {type: String},
            añoCursada: {type:Number}
        },

        idiomas : [
            {
                "tipo de idioma": {type: String},
                nivel: {type: String}

            }

        ]
       

    }
});


module.exports = model('alumno', UserSchema);

